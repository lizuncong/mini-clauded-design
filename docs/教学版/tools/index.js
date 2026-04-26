// tools/index.js — 工具注册表 + 调度器
// 对应 Omelette 的 Lu Map + Rx() 函数

export const toolRegistry = new Map();

export function registerTool(def) {
  toolRegistry.set(def.name, def);
}

export function getToolDefinitions() {
  return [...toolRegistry.values()]
    .filter(t => !t.enabled || t.enabled())
    .map(t => ({
      name: t.name,
      description: t.description,
      input_schema: t.input_schema,
    }));
}

export async function dispatchTool(toolName, input, ctx) {
  const tool = toolRegistry.get(toolName);
  if (!tool?.execute) {
    return `Unknown tool: ${toolName}`;
  }
  return await tool.execute(input, ctx);
}
