import type { DesignFile } from './file-store';
import type { AgentCallbacks, AgentConfig, LlmMessage, ToolDefinition } from './types';
import { runAgent } from './agent';
import { FileStore } from './file-store';
import { createLlmClient } from './llm';
import { runReviewAgent } from './review-agent';
import { SYSTEM_PROMPT } from './system-prompt';
import { createTools } from './tools';

export type { AgentCallbacks, AgentConfig, LlmMessage, ToolDefinition };
export { type DesignFile, FileStore };
export { SYSTEM_PROMPT };

export type AgentInstance = {
  run: (
    userInput: string,
    callbacks: AgentCallbacks,
    existingMessages?: LlmMessage[],
  ) => Promise<LlmMessage[]>;
  fileStore: FileStore;
};

export function createAgent(config: AgentConfig): AgentInstance {
  const fileStore = new FileStore();
  const llmClient = createLlmClient(config.apiKey, config.baseUrl);
  const systemPrompt = config.systemPrompt || SYSTEM_PROMPT;

  const runReview = async (): Promise<string> => {
    const result = await runReviewAgent(llmClient, fileStore);
    return `全面质量审查完成。\n\n修改的文件：\n${result.filesModified.map(f => `- ${f}`).join('\n') || '（无修改）'}\n\n审查报告：\n${result.report}`;
  };

  const tools = createTools(fileStore, runReview);

  return {
    fileStore,
    async run(userInput, callbacks, existingMessages = []) {
      return runAgent(
        userInput,
        callbacks,
        llmClient,
        systemPrompt,
        tools,
        existingMessages,
        {
          maxTokens: config.maxTokens,
          maxTurns: config.maxTurns,
        },
      );
    },
  };
}
