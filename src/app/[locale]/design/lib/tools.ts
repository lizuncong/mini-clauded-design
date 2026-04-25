import type { SnipRecord, ToolDefinition } from './types';
import { fileStore } from './file-store';

const toolRegistry = new Map<string, ToolDefinition>();

export function registerTool(def: ToolDefinition): void {
  toolRegistry.set(def.name, def);
}

export function getToolDefinitions(): Array<{
  name: string;
  description: string;
  input_schema: Record<string, unknown>;
}> {
  return [...toolRegistry.values()]
    .filter(t => !t.enabled || t.enabled())
    .map(t => ({
      name: t.name,
      description: t.description,
      input_schema: t.input_schema,
    }));
}

export async function dispatchTool(toolName: string, input: Record<string, unknown>): Promise<string> {
  const tool = toolRegistry.get(toolName);
  if (!tool?.execute) {
    return `Unknown tool: ${toolName}`;
  }
  return tool.execute(input, {});
}

const fsTools = {
  write_file: {
    name: 'write_file',
    description: `Write content to a file in the project. Creates parent directories automatically.
Supports all file types: HTML pages, CSS stylesheets, JavaScript modules, and any text files.
For modular projects: write index.html as entry point (referencing external CSS/JS via relative paths), then write styles/*.css and js/*.js separately.
Overwrites if file already exists.`,
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path relative to project root, e.g. "components/Button.html"' },
        content: { type: 'string', description: 'The file content to write' },
      },
      required: ['path', 'content'],
    },
    async execute({ path, content }: { path: string; content: string }) {
      return fileStore.writeFile(path, content);
    },
  },

  read_file: {
    name: 'read_file',
    description: `Read the content of a file. Returns the full text content.
If the file doesn't exist, returns an error message.`,
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path to read' },
      },
      required: ['path'],
    },
    async execute({ path }: { path: string }) {
      return fileStore.readFile(path);
    },
  },

  list_files: {
    name: 'list_files',
    description: `List all files in the project. Returns a flat list of file paths.`,
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
} as const;

let msgIdCounter = 0;

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

const registeredSnips: SnipRecord[] = [];

const snipTool = {
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
  async execute({ from_id, to_id }: { from_id: string; to_id: string }) {
    registeredSnips.push({ fromId: from_id, toId: to_id, reason: '' });
    return `Snip registered (${registeredSnips.length} queued).`;
  },
};

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

export function trimMessages(
  messages: Array<{ role: string; content: string | Array<Record<string, unknown>> }>,
  idsToRemove: Set<string>,
): Array<{ role: string; content: string | Array<Record<string, unknown>> }> {
  if (idsToRemove.size === 0) {
    return messages;
  }

  let removedCount = 0;
  const result: Array<{ role: string; content: string | Array<Record<string, unknown>> }> = [];
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
    });
  }
  return result;
}

for (const tool of Object.values(fsTools)) {
  registerTool(tool as unknown as ToolDefinition);
}
registerTool(snipTool as unknown as ToolDefinition);

export { fileStore };
