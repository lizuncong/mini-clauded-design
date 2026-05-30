import type { LlmClient } from './llm';
import type { AgentCallbacks, LlmMessage, ToolDefinition } from './types';
import { executeSnips, registerSnip, tagUserMessage, trimMessages } from './tools';

const DEFAULT_MAX_TOKENS = 96000;
const TOKEN_PER_CHAR = 0.3;
const DEFAULT_MAX_TURNS = 100;

function estimateTokens(messages: LlmMessage[], systemPrompt: string): number {
  let chars = systemPrompt.length;
  for (const msg of messages) {
    if (typeof msg.content === 'string') {
      chars += msg.content.length;
    } else if (Array.isArray(msg.content)) {
      for (const block of msg.content) {
        if (block.type === 'text' && block.text) {
          chars += block.text.length;
        } else if (block.type === 'tool_use') {
          chars += JSON.stringify(block.input).length;
        } else if (block.type === 'tool_result') {
          chars += typeof block.content === 'string' ? block.content.length : JSON.stringify(block.content).length;
        }
      }
    }
  }
  return Math.ceil(chars * TOKEN_PER_CHAR);
}

export async function runAgent(
  userInput: string,
  callbacks: AgentCallbacks,
  llmClient: LlmClient,
  systemPrompt: string,
  tools: ToolDefinition[],
  existingMessages: LlmMessage[] = [],
  options: { maxTokens?: number; maxTurns?: number } = {},
): Promise<LlmMessage[]> {
  const maxTokens = options.maxTokens || DEFAULT_MAX_TOKENS;
  const maxTurns = options.maxTurns || DEFAULT_MAX_TURNS;

  const messages: LlmMessage[] = existingMessages.length > 0 ? [...existingMessages] : [];

  const openAiTools = tools.map(t => ({
    type: 'function' as const,
    function: {
      name: t.name,
      description: t.description,
      parameters: t.input_schema,
    },
  }));

  let pendingInput = userInput;
  let turnCount = 0;

  while (turnCount < maxTurns) {
    turnCount++;

    if (pendingInput) {
      const taggedContent = tagUserMessage(pendingInput);
      messages.push({ role: 'user', content: taggedContent });
    }

    const estimated = estimateTokens(messages, systemPrompt);
    if (estimated > maxTokens * 0.8) {
      const idsToRemove = executeSnips(messages as Array<{ role: string; content: string | Array<Record<string, unknown>> }>);
      if (idsToRemove.size > 0) {
        const before = messages.length;
        const trimmed = trimMessages([...messages], idsToRemove);
        messages.length = 0;
        messages.push(...trimmed);
        callbacks.onSnip?.(before, messages.length);
      }
    }

    callbacks.onText(`\n[Turn ${turnCount}] `);

    const apiResp = await llmClient.chatStream(
      messages as Array<Record<string, unknown>>,
      openAiTools,
      systemPrompt,
      {
        onTextChunk(chunk: string) {
          callbacks.onStreamText(chunk);
        },
        onReasoningChunk(chunk: string) {
          callbacks.onReasoningText?.(chunk);
        },
      },
    );

    const choice = apiResp.choices[0];
    if (!choice) {
      continue;
    }
    const msg = choice.message;
    const usage = apiResp.usage || { prompt_tokens: 0, completion_tokens: 0 };
    const finishReason = choice.finish_reason;

    const assistantMsg: LlmMessage = {
      role: 'assistant',
      content: msg.content || '',
    };
    if (msg.tool_calls && msg.tool_calls.length > 0) {
      assistantMsg.tool_calls = msg.tool_calls;
    }
    messages.push(assistantMsg);

    if (finishReason !== 'tool_calls' || !msg.tool_calls || msg.tool_calls.length === 0) {
      callbacks.onDone(usage);
      return messages;
    }

    for (const tc of msg.tool_calls) {
      const fn = tc.function;
      const input = typeof fn.arguments === 'string'
        ? (JSON.parse(fn.arguments) as Record<string, unknown>)
        : (fn.arguments as Record<string, unknown>);
      callbacks.onToolCall(fn.name, input);

      let result: string;
      try {
        if (fn.name === 'snip') {
          const { from_id, to_id, reason } = input as { from_id: string; to_id: string; reason: string };
          registerSnip(from_id, to_id, reason || '');
          result = 'Snip registered.';
        } else {
          const tool = tools.find(t => t.name === fn.name);
          if (!tool) {
            result = `Unknown tool: ${fn.name}`;
          } else {
            result = await tool.execute(input);
          }
        }
      } catch (err) {
        result = `Error: ${err instanceof Error ? err.message : String(err)}`;
      }
      callbacks.onToolResult(fn.name, result);
      messages.push({
        role: 'tool',
        tool_call_id: tc.id,
        content: result,
      });
    }

    pendingInput = '';
  }

  callbacks.onText('\n[Agent] 达到最大轮次限制\n');
  return messages;
}
