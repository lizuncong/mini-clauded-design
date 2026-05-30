import type { DesignFile } from './file-store';
import type { AgentCallbacks, AgentConfig, LlmMessage, ToolDefinition } from './types';
import { runAgent } from './agent';
import { FileStore } from './file-store';
import { createLlmClient } from './llm';
import { createSubAgentTool } from './subagent-tool';
import { createTools } from './tools';

export type { AgentCallbacks, AgentConfig, LlmMessage, ToolDefinition };
export type { SubAgentDefinition } from './types';
export { type DesignFile, FileStore };

export type AgentInstance = {
  run: (
    userInput: string,
    callbacks: AgentCallbacks,
    existingMessages?: LlmMessage[],
  ) => Promise<LlmMessage[]>;
  fileStore: FileStore;
};

export function createAgent(config: AgentConfig): AgentInstance {
  if (!config.systemPrompt) {
    throw new Error('[Agent SDK] systemPrompt is required');
  }

  const fileStore = new FileStore();
  const llmClient = createLlmClient(config.apiKey, config.baseUrl);
  const systemPrompt = config.systemPrompt;

  const coreTools = createTools(fileStore);

  let allTools: ToolDefinition[] = coreTools;

  if (config.subAgents && Object.keys(config.subAgents).length > 0) {
    const subAgentTool = createSubAgentTool(
      llmClient,
      fileStore,
      coreTools,
      config.subAgents,
      config.model,
    );
    allTools = [...coreTools, subAgentTool];
  }

  return {
    fileStore,
    async run(userInput, callbacks, existingMessages = []) {
      return runAgent(
        userInput,
        callbacks,
        llmClient,
        systemPrompt,
        allTools,
        existingMessages,
        {
          model: config.model,
          maxTokens: config.maxTokens,
          maxTurns: config.maxTurns,
        },
      );
    },
  };
}
