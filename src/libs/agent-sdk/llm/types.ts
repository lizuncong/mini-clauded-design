export type LlmStreamCallbacks = {
  onTextChunk?: (chunk: string) => void;
  onReasoningChunk?: (chunk: string) => void;
};

export type LlmStreamAccumulated = {
  content: string;
  reasoning: string;
  tool_calls: Array<{
    id: string;
    type: 'function';
    function: { name: string; arguments: string };
  }>;
  usage: { prompt_tokens: number; completion_tokens: number };
  finish_reason: string | null;
};

export type LlmResponse = {
  choices: Array<{
    message: {
      role: 'assistant';
      content: string | null;
      tool_calls?: Array<{
        id: string;
        type: 'function';
        function: { name: string; arguments: string };
      }>;
    };
    finish_reason: string;
  }>;
  usage: { prompt_tokens: number; completion_tokens: number };
};

export type CallOptions = {
  model?: string;
  maxTokens?: number;
  temperature?: number;
};

export type LlmClient = {
  chatStream: (
    messages: Array<Record<string, unknown>>,
    tools: Array<Record<string, unknown>> | undefined,
    systemPrompt: string,
    callbacks?: LlmStreamCallbacks,
    options?: CallOptions,
  ) => Promise<LlmResponse>;
};
