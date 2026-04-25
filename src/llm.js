// llm.js — 智谱 AI (GLM) 原生调用
// 直接使用 OpenAI 兼容协议，不做任何格式转换

const ZHIPU_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

export const MODEL_LIST = [
  { id: 'glm-4-flash', label: 'GLM-4 Flash (快速)' },
  { id: 'glm-4-air', label: 'GLM-4 Air (轻量)' },
  { id: 'glm-4-plus', label: 'GLM-4 Plus (增强)' },
  { id: 'glm-4', label: 'GLM-4 (标准)' },
  { id: 'glm-4-alltools', label: 'GLM-4 AllTools' },
];

const STORAGE_KEY = 'zhipu_api_key';
const MODEL_STORAGE_KEY = 'zhipu_model';

export function getApiKey() {
  return localStorage.getItem(STORAGE_KEY) || '';
}

export function setApiKey(key) {
  localStorage.setItem(STORAGE_KEY, key);
}

export function hasApiKey() {
  return !!getApiKey();
}

export function getModel() {
  return localStorage.getItem(MODEL_STORAGE_KEY) || 'glm-4-flash';
}

export function setModel(model) {
  localStorage.setItem(MODEL_STORAGE_KEY, model);
}

/**
 * 调用智谱 AI API（非流式）
 * @param {Array} messages - OpenAI 格式消息数组
 * @param {Array} tools - 工具定义数组
 * @param {string} systemPrompt - 系统提示词
 * @returns {Promise<object>} 原始 API 响应
 */
export async function callZhipuAPI(messages, tools, systemPrompt, options = {}) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('未设置智谱 AI API Key，请先在页面顶部设置');
  }

  const body = {
    model: options.model || getModel(),
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
    max_tokens: options.maxTokens || 64000,
    temperature: options.temperature ?? 0.7,
  };

  if (tools && tools.length > 0) {
    body.tools = tools;
    body.tool_choice = 'auto';
  }

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

  return await resp.json();
}

/**
 * 调用智谱 AI API（流式 SSE）
 * @param {Array} messages - OpenAI 格式消息数组
 * @param {Array} tools - 工具定义数组
 * @param {string} systemPrompt - 系统提示词
 * @param {object} callbacks - 流式回调 { onTextChunk, onToolCallChunk, onDone }
 * @param {object} options - 可选参数
 * @returns {Promise<object>} 完整聚合后的响应（与 callZhipuAPI 返回格式一致）
 */
export async function callZhipuStream(messages, tools, systemPrompt, callbacks = {}, options = {}) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('未设置智谱 AI API Key，请先在页面顶部设置');

  const body = {
    model: options.model || getModel(),
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
    max_tokens: options.maxTokens || 64000,
    temperature: options.temperature ?? 0.7,
    stream: true,
    stream_options: { include_usage: true },
  };

  if (tools && tools.length > 0) {
    body.tools = tools;
    body.tool_choice = 'auto';
  }

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

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  const accumulated = {
    content: '',
    tool_calls: [],
    usage: { prompt_tokens: 0, completion_tokens: 0 },
    finish_reason: null,
    current_tool_index: -1,
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === 'data: [DONE]') continue;
      if (!trimmed.startsWith('data: ')) continue;

      try {
        const chunk = JSON.parse(trimmed.slice(6));
        const choice = chunk.choices?.[0];
        if (!choice) continue;

        const delta = choice.delta || {};

        if (delta.content) {
          accumulated.content += delta.content;
          if (callbacks.onTextChunk) callbacks.onTextChunk(delta.content);
        }

        if (delta.tool_calls) {
          for (const tc of delta.tool_calls) {
            const idx = tc.index ?? 0;
            if (!accumulated.tool_calls[idx]) {
              accumulated.tool_calls[idx] = { id: '', type: 'function', function: { name: '', arguments: '' } };
              accumulated.current_tool_index = idx;
            }
            if (tc.id) accumulated.tool_calls[idx].id = tc.id;
            if (tc.type) accumulated.tool_calls[idx].type = tc.type;
            if (tc.function?.name) accumulated.tool_calls[idx].function.name += tc.function.name;
            if (tc.function?.arguments) accumulated.tool_calls[idx].function.arguments += tc.function.arguments;
          }
        }

        if (choice.finish_reason) {
          accumulated.finish_reason = choice.finish_reason;
        }

        if (chunk.usage) {
          accumulated.usage.prompt_tokens = chunk.usage.prompt_tokens || 0;
          accumulated.usage.completion_tokens = chunk.usage.completion_tokens || 0;
        }
      } catch {}
    }
  }

  if (callbacks.onDone) callbacks.onDone(accumulated);

  return {
    choices: [{
      message: {
        role: 'assistant',
        content: accumulated.content || null,
        tool_calls: accumulated.tool_calls.filter(tc => tc.id),
      },
      finish_reason: accumulated.finish_reason || 'stop',
    }],
    usage: accumulated.usage,
  };
}
