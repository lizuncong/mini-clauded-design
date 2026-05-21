import type { AgentCallbacks, LlmMessage } from './types';
import { MAX_TOKENS, MAX_TURNS, TOKEN_PER_CHAR } from './constants';
import { callZhipuStream } from './llm';
import { SYSTEM_PROMPT } from './system-prompt';
import { dispatchTool, executeSnips, getToolDefinitions, tagUserMessage, trimMessages } from './tools';

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
  existingMessages: LlmMessage[] = [],
): Promise<LlmMessage[]> {
  const messages: LlmMessage[] = existingMessages.length > 0 ? [...existingMessages] : [];
  const rawTools = getToolDefinitions();

  const tools = rawTools.map(t => ({
    type: 'function' as const,
    function: {
      name: t.name,
      description: t.description,
      parameters: t.input_schema,
    },
  }));

  let turnCount = 0;

  while (turnCount < MAX_TURNS) {
    turnCount++;

    if (userInput) {
      const taggedContent = tagUserMessage(userInput);
      messages.push({ role: 'user', content: taggedContent });
    }

    const estimated = estimateTokens(messages, SYSTEM_PROMPT);
    if (estimated > MAX_TOKENS * 0.8) {
      const idsToRemove = executeSnips(messages);
      if (idsToRemove.size > 0) {
        const before = messages.length;
        const trimmed = trimMessages([...messages], idsToRemove) as LlmMessage[];
        messages.length = 0;
        messages.push(...trimmed);
        callbacks.onSnip?.(before, messages.length);
      }
    }

    callbacks.onText(`\n[Turn ${turnCount}] `);

    const apiResp = await callZhipuStream(
      messages as unknown as Parameters<typeof callZhipuStream>[0],
      tools as unknown as Parameters<typeof callZhipuStream>[1],
      SYSTEM_PROMPT,
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
      const input
        = typeof fn.arguments === 'string'
          ? (JSON.parse(fn.arguments) as Record<string, unknown>)
          : (fn.arguments as Record<string, unknown>);
      callbacks.onToolCall(fn.name, input);

      try {
        const result = await dispatchTool(fn.name, input);
        callbacks.onToolResult(fn.name, result);
        messages.push({
          role: 'tool',
          tool_call_id: tc.id,
          content: typeof result === 'string' ? result : JSON.stringify(result),
        });
      } catch (err) {
        const errContent = `Error: ${err instanceof Error ? err.message : String(err)}`;
        callbacks.onToolResult(fn.name, errContent);
        messages.push({
          role: 'tool',
          tool_call_id: tc.id,
          content: errContent,
        });
      }
    }

    userInput = '';
  }

  callbacks.onText('\n[Agent] 达到最大轮次限制\n');
  return messages;
}
