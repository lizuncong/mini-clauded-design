// tools/snip.js — 上下文裁剪工具
// 对应 Omelette 的 T6 (snip tool) + wj/vj 执行逻辑

// 每条 user 消息携带 [id:mNNNN] 标签，snip 根据 from_id/to_id 标记要删除的范围
// 注册是延迟的：只标记不删除，当 token 超阈值时批量执行

let msgIdCounter = 0;

/**
 * 给 user 消息附加 [id:mNNNN] 标签
 */
export function tagUserMessage(content) {
  const id = `m${String(++msgIdCounter).padStart(4, '0')}`;
  return `${content}\n[id:${id}]`;
}

/**
 * 从消息内容中提取 [id:mNNNN] 标签
 */
export function extractMsgId(content) {
  const match = content.match(/\[id:(m\d+)\]/);
  return match ? match[1] : null;
}

// 已注册的 snip 列表
const registeredSnips = [];

const snipTool = {
  name: 'snip',
  description: `Mark a range of conversation history for deferred removal.

Each user message ends with an [id:mNNNN] tag. Copy the exact tag values as from_id and to_id. Both IDs are inclusive.

Snips are a REGISTRATION system, not immediate deletion. Registering is cheap and non-destructive — messages stay visible until context pressure builds. Register aggressively and early.`,
  input_schema: {
    type: 'object',
    properties: {
      from_id: { type: 'string', description: 'The [id:...] tag of the first user message to snip, inclusive' },
      to_id: { type: 'string', description: 'The [id:...] tag of the last user message to snip, inclusive' },
      reason: { type: 'string', description: 'Brief note on why this range is no longer needed' },
    },
    required: ['from_id', 'to_id'],
  },
  async execute({ from_id, to_id, reason }) {
    registeredSnips.push({ from_id, to_id, reason });
    return `Snip registered (${registeredSnips.length} queued).`;
  },
};

/**
 * 执行所有已注册的 snip，返回被裁剪的消息 ID 集合
 */
export function executeSnips(messages) {
  if (registeredSnips.length === 0) {
    return new Set();
  }

  const idsToRemove = new Set();
  for (const snip of registeredSnips) {
    let removing = false;
    for (const msg of messages) {
      if (msg.role !== 'user') {
        continue;
      }
      const id = extractMsgId(
        typeof msg.content === 'string' ? msg.content : '',
      );
      if (id === snip.from_id) {
        removing = true;
      }
      if (removing) {
        idsToRemove.add(id);
      }
      if (id === snip.to_id) {
        removing = false;
        break;
      }
    }
  }
  registeredSnips.length = 0; // 清空已执行的 snip
  return idsToRemove;
}

/**
 * 根据 ID 集合裁剪消息，用 <dropped_messages> 占位符替换
 */
export function trimMessages(messages, idsToRemove) {
  if (idsToRemove.size === 0) {
    return messages;
  }

  let removedCount = 0;
  const result = [];
  for (const msg of messages) {
    if (msg.role !== 'user') {
      result.push(msg);
      continue;
    }
    const id = extractMsgId(
      typeof msg.content === 'string' ? msg.content : '',
    );
    if (id && idsToRemove.has(id)) {
      removedCount++;
      continue;
    }
    result.push(msg);
  }

  if (removedCount > 0) {
    result.unshift({
      role: 'user',
      content: `<dropped_messages count="${removedCount}">The preceding ${removedCount} message(s) were removed from the transcript to fit the context window.</dropped_messages>`,
    });
  }
  return result;
}

export default snipTool;
