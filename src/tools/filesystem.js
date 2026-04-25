// tools/filesystem.js — 文件系统工具（write_file, read_file, list_files）
// 对应 Omelette 的 S4 工具组

// 内存文件系统，模拟项目文件存储
const fileStore = new Map();

export function getFileStore() {
  return fileStore;
}

const fsTools = {
  write_file: {
    name: 'write_file',
    description: `Write content to a file in the project. Creates parent directories automatically.
Use for HTML, CSS, JS, or any text file. Overwrites if the file already exists.`,
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path relative to project root, e.g. "components/Button.html"' },
        content: { type: 'string', description: 'The file content to write' },
      },
      required: ['path', 'content'],
    },
    async execute({ path, content }) {
      fileStore.set(path, content);
      return `Written ${path} (${content.length} chars)`;
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
    async execute({ path }) {
      const content = fileStore.get(path);
      if (content === undefined) return `Error: file not found: ${path}`;
      return content;
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
      const files = [...fileStore.keys()];
      if (files.length === 0) return '(empty project)';
      return files.join('\n');
    },
  },
};

export default fsTools;
