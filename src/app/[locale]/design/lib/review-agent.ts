import type { LlmMessage } from './types';
import { callZhipuStream } from './llm';
import { fileStore } from './tools';

const REVIEW_SYSTEM_PROMPT = `你是一个专业的全栈质量审查专家。你的职责是：
1. 读取项目文件并全面分析代码质量和视觉设计
2. 发现问题后立即修正
3. 返回详细的审查报告

## 一、视觉设计质量审查

- **视觉层次**：字号、字重、颜色是否有 3 层以上对比
- **间距一致性**：同类元素间距是否统一，是否有足够留白（8px基准）
- **色彩协调**：主色与中性色比例是否合理，功能色使用是否正确
- **交互状态**：按钮/链接/卡片是否有 hover/focus/active 状态
- **响应式**：是否使用了 sm:/md:/lg: 断点适配不同屏幕
- **细节质量**：圆角、阴影层级、图标尺寸是否协调统一

## 二、代码生成质量审查

### 2.1 组件架构
- **组件拆分**：单个文件是否超过 150 行？是否应拆分为子组件？
- **职责单一**：每个组件是否只做一件事？是否存在上帝组件？
- **Props 设计**：Props 是否清晰？是否传递了不必要的深层状态？
- **状态管理**：状态是否放在正确的层级？是否存在状态提升问题？

### 2.2 React 最佳实践
- **Hooks 使用**：是否正确使用 useState/useEffect？依赖数组是否完整？
- **性能优化**：是否存在不必要的重渲染？是否需要 useMemo/useCallback？
- **Key 属性**：列表渲染是否使用了稳定的 key？
- **条件渲染**：是否合理使用三元运算符和逻辑与？

### 2.3 代码可读性
- **命名规范**：变量/函数/组件名是否语义化？是否遵循 camelCase/PascalCase？
- **函数长度**：单个函数是否超过 30 行？复杂逻辑是否应抽取？
- **注释质量**：是否有必要的注释？避免无意义的注释
- **魔术数字**：是否将硬编码数值提取为常量？

### 2.4 HTML/CSS 质量
- **语义化标签**：是否使用 header/nav/main/article 等语义标签？
- **可访问性**：图片是否有 alt？表单是否有 label？颜色对比度是否足够？
- **CSS 组织**：样式是否模块化？是否使用 Tailwind 工具类优先？
- **响应式图片**：是否考虑不同屏幕尺寸的图片优化？

### 2.5 错误处理与健壮性
- **边界情况**：空数据、加载态、错误态是否处理？
- **类型安全**：TypeScript 类型定义是否完整？any 使用是否过多？
- **数据验证**：用户输入是否校验？API 数据是否做容错？

## 工作流程
1. 用 list_files 确认所有文件
2. 必读 index.html 和 App.jsx（或主要入口文件）
3. 从子组件中挑选 2-3 个最复杂的文件深入阅读
4. 按照上述维度逐一检查，发现问题立即用 write_file 修正
5. 输出结构化审查报告（分类列出发现的问题和修改内容）`;

const REVIEW_TOOLS = [
  {
    type: 'function' as const,
    function: {
      name: 'read_file',
      description: 'Read the content of a file',
      parameters: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'File path to read' },
        },
        required: ['path'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'list_files',
      description: 'List all files in the project',
      parameters: {
        type: 'object',
        properties: {},
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'write_file',
      description: 'Write content to a file (only for fixing issues)',
      parameters: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'File path' },
          content: { type: 'string', description: 'File content' },
        },
        required: ['path', 'content'],
      },
    },
  },
];

const MAX_REVIEW_TURNS = 8;

export async function runVisualReviewAgent(
  onProgress?: (text: string) => void,
): Promise<{ report: string; filesModified: string[] }> {
  const messages: LlmMessage[] = [];
  const filesModified: string[] = [];

  messages.push({
    role: 'user',
    content: '请开始对当前项目进行全面的质量审查，包括视觉设计质量和代码生成质量。请按照标准流程逐一检查所有维度。',
  });

  for (let turn = 0; turn < MAX_REVIEW_TURNS; turn++) {
    onProgress?.(`\n[审查轮次 ${turn + 1}] `);

    const apiResp = await callZhipuStream(
      messages as unknown as Parameters<typeof callZhipuStream>[0],
      REVIEW_TOOLS as unknown as Parameters<typeof callZhipuStream>[1],
      REVIEW_SYSTEM_PROMPT,
      {
        onTextChunk(chunk: string) {
          onProgress?.(chunk);
        },
      },
    );

    const choice = apiResp.choices[0];
    if (!choice) {
      break;
    }

    const msg = choice.message;
    const assistantMsg: LlmMessage = {
      role: 'assistant',
      content: msg.content || '',
    };

    if (msg.tool_calls && msg.tool_calls.length > 0) {
      assistantMsg.tool_calls = msg.tool_calls;
    }
    messages.push(assistantMsg);

    if (choice.finish_reason !== 'tool_calls' || !msg.tool_calls || msg.tool_calls.length === 0) {
      break;
    }

    for (const tc of msg.tool_calls) {
      const fn = tc.function;
      const input = typeof fn.arguments === 'string'
        ? (JSON.parse(fn.arguments) as Record<string, unknown>)
        : (fn.arguments as Record<string, unknown>);

      let result: string;
      try {
        switch (fn.name) {
          case 'read_file':
            result = await fileStore.readFile((input as { path: string }).path);
            break;
          case 'list_files':
            result = fileStore.listFiles().join('\n') || '(empty project)';
            break;
          case 'write_file': {
            const { path, content } = input as { path: string; content: string };
            result = await fileStore.writeFile(path, content);
            filesModified.push(path);
            break;
          }
          default:
            result = `Unknown tool: ${fn.name}`;
        }
      } catch (err) {
        result = `Error: ${err instanceof Error ? err.message : String(err)}`;
      }

      messages.push({
        role: 'tool',
        tool_call_id: tc.id,
        content: result,
      });
    }
  }

  const report = messages
    .filter(m => m.role === 'assistant')
    .map(m => m.content)
    .join('\n');

  return {
    report: report || '审查完成，未发现重大问题。',
    filesModified,
  };
}
