import type { CallOptions, LlmResponse, LlmStreamCallbacks } from './types';
import { createAnthropicClient } from './anthropic';
import { createOpenAiClient } from './openai';

export type { CallOptions, LlmResponse, LlmStreamCallbacks };

export type LlmClient = {
  chatStream: (
    messages: Array<Record<string, unknown>>,
    tools: Array<Record<string, unknown>> | undefined,
    systemPrompt: string,
    callbacks?: LlmStreamCallbacks,
    options?: CallOptions,
  ) => Promise<LlmResponse>;
};

function isAnthropicEndpoint(baseUrl: string): boolean {
  const lowered = baseUrl.toLowerCase();
  return lowered.includes('anthropic.com') || lowered.includes('claude');
}

export function createLlmClient(apiKey: string, baseUrl: string): LlmClient {
  if (isAnthropicEndpoint(baseUrl)) {
    return createAnthropicClient(baseUrl, apiKey);
  }
  return createOpenAiClient(baseUrl, apiKey);
}
