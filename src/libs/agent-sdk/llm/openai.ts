import type { CallOptions, LlmResponse, LlmStreamCallbacks } from './types';

export function createOpenAiClient(baseUrl: string, apiKey: string): {
  chatStream: (
    messages: Array<Record<string, unknown>>,
    tools: Array<Record<string, unknown>> | undefined,
    systemPrompt: string,
    callbacks?: LlmStreamCallbacks,
    options?: CallOptions,
  ) => Promise<LlmResponse>;
} {
  const endpoint = `${baseUrl.replace(/\/+$/, '')}/chat/completions`;

  return {
    async chatStream(messages, tools, systemPrompt, callbacks = {}, options = {}) {
      const body: Record<string, unknown> = {
        model: options.model || 'unknown',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        max_tokens: options.maxTokens || 96000,
        temperature: options.temperature ?? 0.7,
        stream: true,
        stream_options: { include_usage: true },
      };

      if (tools && tools.length > 0) {
        body.tools = tools;
        body.tool_choice = 'auto';
      }

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        const errorBody = await resp.text();
        let errorMsg = `API request failed (${resp.status})`;
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

      const decoder = new TextDecoder();
      let buffer = '';

      const accumulated = {
        content: '',
        reasoning: '',
        tool_calls: [] as NonNullable<LlmResponse['choices'][0]['message']['tool_calls']>,
        usage: { prompt_tokens: 0, completion_tokens: 0 },
        finish_reason: null as string | null,
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') {
            continue;
          }
          if (!trimmed.startsWith('data: ')) {
            continue;
          }

          try {
            const chunk = JSON.parse(trimmed.slice(6)) as Record<string, unknown>;
            const choicesArray = chunk.choices as Array<Record<string, unknown>> | undefined;
            const choice = choicesArray?.[0] as Record<string, unknown> | undefined;
            if (!choice) {
              continue;
            }

            const delta = (choice.delta || {}) as Record<string, unknown>;

            if (delta.content && typeof delta.content === 'string') {
              accumulated.content += delta.content;
              callbacks.onTextChunk?.(delta.content);
            }

            if (delta.reasoning_content && typeof delta.reasoning_content === 'string') {
              accumulated.reasoning += delta.reasoning_content;
              callbacks.onReasoningChunk?.(delta.reasoning_content);
            }

            if (Array.isArray(delta.tool_calls)) {
              for (const tc of delta.tool_calls) {
                const tcRecord = tc as Record<string, unknown>;
                const idx = (tcRecord.index ?? 0) as number;
                if (!accumulated.tool_calls[idx]) {
                  accumulated.tool_calls[idx] = {
                    id: '',
                    type: 'function',
                    function: { name: '', arguments: '' },
                  };
                }
                const target = accumulated.tool_calls[idx];
                if (tcRecord.id) {
                  target.id = tcRecord.id as string;
                }
                if (tcRecord.type) {
                  target.type = tcRecord.type as 'function';
                }
                const fn = tcRecord.function as Record<string, unknown> | undefined;
                if (fn?.name) {
                  target.function.name += fn.name as string;
                }
                if (fn?.arguments) {
                  target.function.arguments += fn.arguments as string;
                }
              }
            }

            if (choice.finish_reason) {
              accumulated.finish_reason = choice.finish_reason as string;
            }

            if (chunk.usage) {
              const usage = chunk.usage as Record<string, unknown>;
              accumulated.usage.prompt_tokens = (usage.prompt_tokens as number) || 0;
              accumulated.usage.completion_tokens = (usage.completion_tokens as number) || 0;
            }
          } catch {
            // ignore parse errors
          }
        }
      }

      return {
        choices: [
          {
            message: {
              role: 'assistant',
              content: accumulated.content || null,
              tool_calls: accumulated.tool_calls.filter(tc => tc.id),
            },
            finish_reason: accumulated.finish_reason || 'stop',
          },
        ],
        usage: accumulated.usage,
      };
    },
  };
}
