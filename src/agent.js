// agent.js — Agent Loop 核心逻辑
// 对应 Omelette 的 _te() 函数，浏览器端运行的 tool-use agent 循环

import { registerTool } from './tools/index.js';
import fsTools from './tools/filesystem.js';
import snipTool, {
  tagUserMessage,
  executeSnips,
  trimMessages,
} from './tools/snip.js';
import { callZhipuAPI } from './llm.js';

// 注册所有工具
for (const tool of Object.values(fsTools)) registerTool(tool);
registerTool(snipTool);

const SYSTEM_PROMPT = `你是一个前端设计助手，运行在浏览器端的文件系统上。
你可以使用工具来读写文件。每完成一个阶段的工作后，用 snip 工具清理不再需要的上下文。

工具使用规则：
- 使用 write_file 创建或修改文件
- 使用 read_file 读取已创建的文件内容以确认
- 使用 list_files 查看项目中所有文件
- 使用 snip 清理不再需要的上下文（传入消息的 [id:mNNNN] 标签）

请用中文回复用户。`;

const MAX_TOKENS = 64000;
const TOKEN_PER_CHAR = 0.25;

function estimateTokens(messages, systemPrompt) {
  let chars = systemPrompt.length;
  for (const msg of messages) {
    if (typeof msg.content === 'string') {
      chars += msg.content.length;
    } else if (Array.isArray(msg.content)) {
      for (const block of msg.content) {
        if (block.type === 'text') chars += block.text.length;
        else if (block.type === 'tool_use') chars += JSON.stringify(block.input).length;
        else if (block.type === 'tool_result') {
          chars += typeof block.content === 'string'
            ? block.content.length
            : JSON.stringify(block.content).length;
        }
      }
    }
  }
  return Math.ceil(chars * TOKEN_PER_CHAR);
}

async function callLLM(messages, tools, systemPrompt) {
  return await callZhipuAPI(messages, tools, systemPrompt);
}

/**
 * 核心：Agent Loop
 */
export async function runAgent(userInput, {
  onText = () => {},
  onToolCall = () => {},
  onToolResult = () => {},
  onDone = () => {},
  onSnip = () => {},
} = {}) {
  const messages = [];
  const { getToolDefinitions } = await import('./tools/index.js');
  let tools = getToolDefinitions();
  let turnCount = 0;
  const MAX_TURNS = 10;

  while (turnCount < MAX_TURNS) {
    turnCount++;

    // 1. 追加 user 消息（带 [id:mNNNN] 标签）
    if (userInput) {
      const taggedContent = tagUserMessage(userInput);
      messages.push({ role: 'user', content: taggedContent });
    }

    // 2. Token 预算检查
    const estimated = estimateTokens(messages, SYSTEM_PROMPT);
    if (estimated > MAX_TOKENS * 0.8) {
      const idsToRemove = executeSnips(messages);
      if (idsToRemove.size > 0) {
        const before = messages.length;
        const trimmed = trimMessages([...messages], idsToRemove);
        messages.length = 0;
        messages.push(...trimmed);
        onSnip(before, messages.length);
      }
    }

    // 3. 调用 LLM
    onText(`\n[Turn ${turnCount}] 正在思考...\n`);
    const response = await callLLM(messages, tools, SYSTEM_PROMPT);

    // 4. 追加 assistant 消息
    messages.push({
      role: 'assistant',
      content: response.content,
    });

    // 5. 检查是否有 tool_use
    const toolUses = response.content.filter(b => b.type === 'tool_use');
    const textBlocks = response.content.filter(b => b.type === 'text');

    for (const block of textBlocks) {
      onText(block.text);
    }

    // 6. 根据 stop_reason 决定下一步
    if (response.stop_reason === 'end_turn') {
      onDone(response.usage);
      return messages;
    }

    if (response.stop_reason !== 'tool_use' || toolUses.length === 0) {
      onDone(response.usage);
      return messages;
    }

    // 7. 有 tool_use → 执行工具
    const toolResults = [];
    for (const toolUse of toolUses) {
      onToolCall(toolUse.name, toolUse.input);
      const { dispatchTool } = await import('./tools/index.js');
      try {
        const result = await dispatchTool(toolUse.name, toolUse.input, {});
        toolResults.push({
          type: 'tool_result',
          tool_use_id: toolUse.id,
          content: result,
        });
        onToolResult(toolUse.name, result);
      } catch (err) {
        toolResults.push({
          type: 'tool_result',
          tool_use_id: toolUse.id,
          content: `Error: ${err.message}`,
          is_error: true,
        });
        onToolResult(toolUse.name, `Error: ${err.message}`);
      }
    }

    // 8. 追加 tool_result
    messages.push({ role: 'user', content: toolResults });

    // 9. 后续轮次不再追加新 user 消息
    userInput = '';
  }

  onText('\n[Agent] 达到最大轮次限制\n');
  return messages;
}
