// llm.js — 智谱 AI (GLM) 真实 LLM 调用
// 使用 OpenAI 兼容接口: https://open.bigmodel.cn/api/paas/v4/chat/completions

const ZHIPU_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const DEFAULT_MODEL = 'glm-4-flash';

/**
 * 获取保存的 API Key
 */
export function getApiKey() {
  return localStorage.getItem('zhipu_api_key') || '';
}

export function setApiKey(key) {
  localStorage.setItem('zhipu_api_key', key);
}

export function hasApiKey() {
  return !!getApiKey();
}

/**
 * 将 Claude 格式的 input_schema 转换为 OpenAI function calling 格式的 parameters
 */
function toOpenAIFunction(tool) {
  return {
    type: 'function',
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.input_schema,
    },
  };
}

/**
 * 将 Claude 格式的消息转换为 OpenAI 格式
 */
function convertMessages(messages) {
  return messages.map(msg => {
    if (msg.role === 'user' && Array.isArray(msg.content)) {
      // tool_result 消息 → 转为 OpenAI 的 tool role 消息
      const toolResults = msg.content.filter(b => b.type === 'tool_result');
      if (toolResults.length > 0 && msg.content.every(b => b.type === 'tool_result')) {
        return toolResults.map(r => ({
          role: 'tool',
          tool_call_id: r.tool_use_id,
          content: typeof r.content === 'string' ? r.content : JSON.stringify(r.content),
        }));
      }
      // 混合内容：提取 text 部分
      const textPart = msg.content.find(b => b.type === 'text');
      if (textPart) {
        return { role: 'user', content: textPart.text };
      }
      return { role: 'user', content: JSON.stringify(msg.content) };
    }

    if (msg.role === 'assistant' && Array.isArray(msg.content)) {
      const textBlocks = msg.content.filter(b => b.type === 'text');
      const toolUses = msg.content.filter(b => b.type === 'tool_use');

      const result = { role: 'assistant' };

      if (textBlocks.length > 0) {
        result.content = textBlocks.map(b => b.text).join('\n');
      }

      if (toolUses.length > 0) {
        result.tool_calls = toolUses.map(t => ({
          id: t.id,
          type: 'function',
          function: {
            name: t.name,
            arguments: JSON.stringify(t.input),
          },
        }));
      }

      return result;
    }

    // 普通字符串消息直接透传
    if (typeof msg.content === 'string') {
      return { role: msg.role, content: msg.content };
    }

    return msg;
  }).flat();
}

/**
 * 将 OpenAI 格式的响应转换为 Claude 格式
 */
function convertResponse(apiResponse) {
  const choice = apiResponse.choices[0];
  const message = choice.message;
  const content = [];
  const usage = apiResponse.usage || { prompt_tokens: 0, completion_tokens: 0 };

  if (message.content) {
    content.push({ type: 'text', text: message.content });
  }

  if (message.tool_calls) {
    for (const tc of message.tool_calls) {
      content.push({
        type: 'tool_use',
        id: tc.id,
        name: tc.function.name,
        input: JSON.parse(tc.function.arguments),
      });
    }
  }

  return {
    id: apiResponse.id || `msg_${Date.now()}`,
    type: 'message',
    role: 'assistant',
    content,
    model: apiResponse.model || DEFAULT_MODEL,
    stop_reason: message.tool_calls ? 'tool_use' : 'end_turn',
    usage: {
      input_tokens: usage.prompt_tokens,
      output_tokens: usage.completion_tokens,
    },
  };
}

/**
 * 调用智谱 AI API（非流式）
 */
export async function callZhipuAPI(messages, tools, systemPrompt, options = {}) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('未设置智谱 AI API Key，请先在页面中输入');
  }

  const openaiTools = tools.map(toOpenAIFunction);
  const convertedMessages = convertMessages(messages);

  const body = {
    model: options.model || DEFAULT_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      ...convertedMessages,
    ],
    max_tokens: options.maxTokens || 64000,
    temperature: options.temperature ?? 0.7,
    tools: openaiTools.length > 0 ? openaiTools : undefined,
    tool_choice: openaiTools.length > 0 ? 'auto' : undefined,
  };

  const resp = await fetch(ZHIPU_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const errorBody = await resp.text();
    let errorMsg = `API 请求失败 (${resp.status})`;
    try {
      const errJson = JSON.parse(errorBody);
      errorMsg = errJson.error?.message || errJson.message || errorMsg;
    } catch {}
    throw new Error(errorMsg);
  }

  const apiResponse = await resp.json();
  return convertResponse(apiResponse);
}

/**
 * 调用智谱 AI API（流式），返回 ReadableStream
 * 兼容原有的 SSE 流式消费模式
 */
export async function callZhipuStream(messages, tools, systemPrompt, options = {}) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('未设置智谱 AI API Key，请先在页面中输入');
  }

  const openaiTools = tools.map(toOpenAIFunction);
  const convertedMessages = convertMessages(messages);

  const body = {
    model: options.model || DEFAULT_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      ...convertedMessages,
    ],
    max_tokens: options.maxTokens || 64000,
    temperature: options.temperature ?? 0.7,
    stream: true,
    tools: openaiTools.length > 0 ? openaiTools : undefined,
    tool_choice: openaiTools.length > 0 ? 'auto' : undefined,
  };

  const resp = await fetch(ZHIPU_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const errorBody = await resp.text();
    let errorMsg = `API 请求失败 (${resp.status})`;
    try {
      const errJson = JSON.parse(errorBody);
      errorMsg = errJson.error?.message || errJson.message || errorMsg;
    } catch {}
    throw new Error(errorMsg);
  }

  return resp.body;
}
