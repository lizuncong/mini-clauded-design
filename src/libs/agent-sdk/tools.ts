import type { DesignFile, FileStore } from './file-store';
import type { SnipRecord, ToolDefinition } from './types';

let msgIdCounter = 0;

export function createTools(
  fileStore: FileStore,
  runReview: () => Promise<string>,
): ToolDefinition[] {
  const fsTools: ToolDefinition[] = [
    {
      name: 'write_file',
      description: `Write content to a file in the project. Creates parent directories automatically.
Supports all file types: HTML pages, JSX React components, and any text files.
For React projects: write index.html as entry point (with React + Babel CDN scripts), then write components/*.jsx separately.
Overwrites if file already exists.`,
      input_schema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'File path relative to project root, e.g. "components/Button.jsx"' },
          content: { type: 'string', description: 'The file content to write' },
        },
        required: ['path', 'content'],
      },
      async execute({ path, content }: Record<string, unknown>) {
        return fileStore.writeFile(path as string, content as string);
      },
    },
    {
      name: 'read_file',
      description: 'Read the content of a file. Returns the full text content. If the file doesn\'t exist, returns an error message.',
      input_schema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'File path to read' },
        },
        required: ['path'],
      },
      async execute({ path }: Record<string, unknown>) {
        return fileStore.readFile(path as string);
      },
    },
    {
      name: 'list_files',
      description: 'List all files in the project. Returns a flat list of file paths.',
      input_schema: {
        type: 'object',
        properties: {},
      },
      async execute() {
        const files = fileStore.listFiles();
        if (files.length === 0) {
          return '(empty project)';
        }
        return files.join('\n');
      },
    },
  ];

  const reviewTool: ToolDefinition = {
    name: 'visual_review',
    description: `启动全面质量审查子代理（视觉设计 + 代码质量）。该工具会：

**视觉设计审查**：
- 视觉层次、间距一致性、色彩协调
- 交互状态、响应式适配、细节质量

**代码生成质量审查**：
- 组件架构：拆分合理性、职责单一性、Props 设计、状态管理
- React 最佳实践：Hooks 使用、性能优化、Key 属性、条件渲染
- 代码可读性：命名规范、函数长度、注释质量、魔术数字
- HTML/CSS 质量：语义化标签、可访问性、CSS 组织
- 错误处理：边界情况、类型安全、数据验证

工作流程：
1. 自动读取项目文件（index.html、App.jsx 及关键组件）
2. 按照专业标准进行全面检查
3. 发现问题后自动修正文件
4. 返回结构化审查报告和修改的文件列表

建议在完成主要代码编写后调用此工具进行质量把关。`,
    input_schema: {
      type: 'object',
      properties: {},
    },
    async execute() {
      return runReview();
    },
  };

  const snipTool: ToolDefinition = {
    name: 'snip',
    description: `Mark a range of conversation history for deferred removal.

Each user message ends with an [id:mNNNN] tag. Copy the exact tag values as from_id and to_id. Both IDs are inclusive.

Snips is a REGISTRATION system, not immediate deletion. Registering is cheap and non-destructive — messages stay visible until context pressure builds. Register aggressively and early.`,
    input_schema: {
      type: 'object',
      properties: {
        from_id: { type: 'string', description: 'The [id:...] tag of the first user message to snip, inclusive' },
        to_id: { type: 'string', description: 'The [id:...] tag of the last user message to snip, inclusive' },
        reason: { type: 'string', description: 'Brief note on why this range is no longer needed' },
      },
      required: ['from_id', 'to_id'],
    },
    async execute() {
      return ''; // handled in agent loop
    },
  };

  return [...fsTools, reviewTool, snipTool];
}

const registeredSnips: SnipRecord[] = [];

export function registerSnip(fromId: string, toId: string, reason: string): void {
  registeredSnips.push({ fromId, toId, reason });
}

export function executeSnips(
  messages: Array<{ role: string; content: string | Array<Record<string, unknown>> }>,
): Set<string> {
  if (registeredSnips.length === 0) {
    return new Set();
  }

  const idsToRemove = new Set<string>();
  for (const snip of registeredSnips) {
    let removing = false;
    for (const msg of messages) {
      if (msg.role !== 'user') {
        continue;
      }
      const id = extractMsgId(typeof msg.content === 'string' ? msg.content : '');
      if (id === snip.fromId) {
        removing = true;
      }
      if (removing && id !== null) {
        idsToRemove.add(id);
      }
      if (id === snip.toId) {
        removing = false;
        break;
      }
    }
  }
  registeredSnips.length = 0;
  return idsToRemove;
}

export function trimMessages<T extends { role: string; content: string | Array<Record<string, unknown>> }>(
  messages: T[],
  idsToRemove: Set<string>,
): T[] {
  if (idsToRemove.size === 0) {
    return messages;
  }

  let removedCount = 0;
  const result: T[] = [];
  for (const msg of messages) {
    if (msg.role !== 'user') {
      result.push(msg);
      continue;
    }
    const id = extractMsgId(typeof msg.content === 'string' ? msg.content : '');
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
    } as T);
  }
  return result;
}

export function tagUserMessage(content: string): string {
  const id = `m${String(++msgIdCounter).padStart(4, '0')}`;
  return `${content}\n[id:${id}]`;
}

export function extractMsgId(content: string): string | null {
  const match = content.match(/\[id:(m\d+)\]/);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

export { type DesignFile, FileStore };
