import type { AgentCallbacks, LlmMessage } from './types';
import { MAX_TOKENS, MAX_TURNS, TOKEN_PER_CHAR } from './constants';
import { callZhipuStream } from './llm';
import { SYSTEM_PROMPT } from './system-prompt';
import { dispatchTool, executeSnips, getToolDefinitions, tagUserMessage, trimMessages } from './tools';

const REVIEW_PROMPT = `请进行设计质量审查。

**步骤一**：用 list_files 确认所有文件。
**步骤二**：必读 index.html 和 App.jsx。
**步骤三**：从子组件中挑选 2-3 个最复杂的文件用 read_file 阅读（无需全部读完）。

审查维度：
1. 视觉层次：字号、字重、颜色是否有 3 层以上对比
2. 间距一致性：同类元素间距是否统一，是否有足够留白
3. 色彩协调：主色与中性色比例是否合理，功能色使用是否正确
4. 交互状态：按钮/链接/卡片是否有 hover/focus/active 状态
5. 响应式：是否使用了 sm:/md:/lg: 断点适配不同屏幕
6. 细节质量：圆角、阴影层级、图标尺寸是否协调统一

发现问题请立即用 write_file 修正，无需修改的部分不要动。`;

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
  let hasWrittenFiles = false;
  let reviewDone = false;

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
      if (hasWrittenFiles && !reviewDone) {
        reviewDone = true;
        callbacks.onText('\n[设计审查] ');
        userInput = REVIEW_PROMPT;
        continue;
      }
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

      if (fn.name === 'write_file') {
        hasWrittenFiles = true;
      }

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
