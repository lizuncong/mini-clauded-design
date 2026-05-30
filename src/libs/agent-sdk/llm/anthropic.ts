import type { CallOptions, LlmResponse, LlmStreamCallbacks } from './types';

const ANTHROPIC_VERSION = '2023-06-01';

function convertToolsToAnthropic(
  tools: Array<Record<string, unknown>>,
): Array<Record<string, unknown>> {
  return tools.map((t) => {
    const fn = (t.function || t) as Record<string, unknown>;
    return {
      name: fn.name,
      description: fn.description,
      input_schema: fn.parameters || fn.input_schema || { type: 'object', properties: {} },
    };
  });
}

function convertMessagesToAnthropic(
  messages: Array<Record<string, unknown>>,
): Array<Record<string, unknown>> {
  return messages
    .filter(m => m.role !== 'system')
    .map((m) => {
      if (m.role === 'tool') {
        return {
          role: 'user',
          content: [
            {
              type: 'tool_result',
              tool_use_id: m.tool_call_id,
              content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content),
            },
          ],
        };
      }
      if (m.role === 'assistant' && m.tool_calls) {
        const toolCalls = m.tool_calls as Array<Record<string, unknown>>;
        const content: Array<Record<string, unknown>> = [];
        if (m.content) {
          content.push({ type: 'text', text: m.content });
        }
        for (const tc of toolCalls) {
          const fn = tc.function as Record<string, unknown>;
          content.push({
            type: 'tool_use',
            id: tc.id,
            name: fn.name,
            input: typeof fn.arguments === 'string' ? JSON.parse(fn.arguments as string) : fn.arguments,
          });
        }
        return { role: 'assistant', content };
      }
      const text = typeof m.content === 'string' ? m.content : '';
      return {
        role: m.role,
        content: [{ type: 'text', text }],
      };
    });
}

async function parseAnthropicStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  callbacks: LlmStreamCallbacks,
): Promise<LlmResponse> {
  const decoder = new TextDecoder();
  let buffer = '';

  const accumulated = {
    content: '',
    reasoning: '',
    tool_calls: [] as Array<{ id: string; type: 'function'; function: { name: string; arguments: string } }>,
    usage: { prompt_tokens: 0, completion_tokens: 0 },
    finish_reason: null as string | null,
  };

  const toolUseMap = new Map<number, { id: string; name: string; arguments: string }>();

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (!line.startsWith('data: ')) {
        continue;
      }
      const data = line.slice(6).trim();
      if (!data) {
        continue;
      }

      try {
        const event = JSON.parse(data) as Record<string, unknown>;

        switch (event.type) {
          case 'message_start': {
            const message = event.message as Record<string, unknown> | undefined;
            if (message?.usage) {
              const usage = message.usage as Record<string, unknown>;
              accumulated.usage.prompt_tokens = (usage.input_tokens as number) || 0;
            }
            break;
          }

          case 'content_block_start': {
            const block = event.content_block as Record<string, unknown> | undefined;
            if (block?.type === 'tool_use') {
              const index = (event.index as number) || 0;
              toolUseMap.set(index, {
                id: (block.id as string) || '',
                name: (block.name as string) || '',
                arguments: '',
              });
            }
            break;
          }

          case 'content_block_delta': {
            const delta = event.delta as Record<string, unknown> | undefined;
            if (!delta) {
              break;
            }
            if (delta.type === 'text_delta' && delta.text) {
              accumulated.content += delta.text as string;
              callbacks.onTextChunk?.(delta.text as string);
            }
            if (delta.type === 'thinking_delta' && delta.thinking) {
              accumulated.reasoning += delta.thinking as string;
              callbacks.onReasoningChunk?.(delta.thinking as string);
            }
            if (delta.type === 'input_json_delta' && delta.partial_json) {
              const idx = (event.index as number) || 0;
              const entry = toolUseMap.get(idx);
              if (entry) {
                entry.arguments += delta.partial_json as string;
              }
            }
            break;
          }

          case 'message_delta': {
            const delta = event.delta as Record<string, unknown> | undefined;
            if (delta?.stop_reason) {
              accumulated.finish_reason = delta.stop_reason === 'tool_use'
                ? 'tool_calls'
                : (delta.stop_reason as string);
            }
            if (event.usage) {
              const usage = event.usage as Record<string, unknown>;
              accumulated.usage.completion_tokens = (usage.output_tokens as number) || 0;
            }
            break;
          }

          default:
            break;
        }
      } catch {
        // ignore parse errors
      }
    }
  }

  toolUseMap.forEach((v) => {
    accumulated.tool_calls.push({
      id: v.id,
      type: 'function',
      function: { name: v.name, arguments: v.arguments },
    });
  });

  return {
    choices: [
      {
        message: {
          role: 'assistant',
          content: accumulated.content || null,
          tool_calls: accumulated.tool_calls.length > 0 ? accumulated.tool_calls : undefined,
        },
        finish_reason: accumulated.finish_reason || 'stop',
      },
    ],
    usage: accumulated.usage,
  };
}

export function createAnthropicClient(baseUrl: string, apiKey: string): {
  chatStream: (
    messages: Array<Record<string, unknown>>,
    tools: Array<Record<string, unknown>> | undefined,
    systemPrompt: string,
    callbacks?: LlmStreamCallbacks,
    options?: CallOptions,
  ) => Promise<LlmResponse>;
} {
  const endpoint = `${baseUrl.replace(/\/+$/, '')}/messages`;

  return {
    async chatStream(messages, tools, systemPrompt, callbacks = {}, options = {}) {
      const body: Record<string, unknown> = {
        model: options.model || 'unknown',
        system: systemPrompt,
        messages: convertMessagesToAnthropic(messages),
        max_tokens: options.maxTokens || 96000,
        temperature: options.temperature ?? 0.7,
        stream: true,
      };

      if (tools && tools.length > 0) {
        body.tools = convertToolsToAnthropic(tools);
      }

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': ANTHROPIC_VERSION,
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        const errorBody = await resp.text();
        let errorMsg = `Anthropic API request failed (${resp.status})`;
        try {
          const errJson = JSON.parse(errorBody) as Record<string, unknown>;
          errorMsg = ((errJson.error as Record<string, unknown>)?.message as string) || errorMsg;
        } catch {
          // ignore parse errors
        }
        throw new Error(errorMsg);
      }

      const reader = resp.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      return parseAnthropicStream(reader, callbacks);
    },
  };
}
