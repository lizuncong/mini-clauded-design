import type { FileStore } from './file-store';
import type { LlmClient } from './llm/types';
import type { SubAgentDefinition, ToolDefinition } from './types';
import { runAgent } from './agent';

export function createSubAgentTool(
  llmClient: LlmClient,
  _fileStore: FileStore,
  allTools: ToolDefinition[],
  subAgents: Record<string, SubAgentDefinition>,
): ToolDefinition {
  return {
    name: 'subagent',
    description: `Invoke a specialized sub-agent to handle specific tasks.

Available sub-agents:
${Object.entries(subAgents).map(([key, def]) => `- ${key}: ${def.description}`).join('\n')}

Use this tool when you need expert assistance for a specific domain (e.g., code review, testing, security audit).
The sub-agent operates in an isolated context and returns structured results.`,
    input_schema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: Object.keys(subAgents),
          description: 'The sub-agent type to invoke',
        },
        prompt: {
          type: 'string',
          description: 'Specific instructions or context for this invocation',
        },
      },
      required: ['type', 'prompt'],
    },
    async execute(input) {
      const { type, prompt } = input as { type: string; prompt: string };
      const def = subAgents[type];

      if (!def) {
        return JSON.stringify({ error: `Unknown sub-agent type: ${type}` });
      }

      const subAgentModel = def.model || undefined;
      const subAgentTools = allTools.filter(tool => !def.tools || def.tools.includes(tool.name));

      const messages = await runAgent(
        prompt,
        {
          onText: () => {},
          onStreamText: () => {},
          onToolCall: () => {},
          onToolResult: () => {},
          onDone: () => {},
        },
        llmClient,
        def.prompt,
        subAgentTools,
        [],
        {
          model: subAgentModel,
          maxTurns: def.maxTurns ?? 10,
        },
      );

      const lastAssistantMsg = messages.filter(m => m.role === 'assistant').pop();
      const content = lastAssistantMsg?.content;

      if (typeof content === 'string') {
        return content;
      }

      return JSON.stringify(content);
    },
  };
}
