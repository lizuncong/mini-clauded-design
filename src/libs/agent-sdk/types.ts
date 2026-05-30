export type AgentCallbacks = {
  onText: (text: string) => void;
  onStreamText: (chunk: string) => void;
  onReasoningText?: (chunk: string) => void;
  onToolCall: (name: string, input: Record<string, unknown>) => void;
  onToolResult: (name: string, result: string) => void;
  onDone: (usage: { prompt_tokens: number; completion_tokens: number }) => void;
  onSnip?: (before: number, after: number) => void;
};

export type LlmMessage = {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string | LlmContentBlock[];
  tool_calls?: LlmToolCall[];
  tool_call_id?: string;
};

export type LlmContentBlock
  = | { type: 'text'; text: string }
    | { type: 'tool_use'; id: string; name: string; input: Record<string, unknown> }
    | { type: 'tool_result'; content: string };

export type LlmToolCall = {
  id: string;
  type: 'function';
  function: { name: string; arguments: string };
};

export type ToolDefinition = {
  name: string;
  description: string;
  input_schema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<string>;
};

export type SnipRecord = { fromId: string; toId: string; reason: string };

export type SubAgentDefinition = {
  name: string;
  description: string;
  prompt: string;
  tools?: string[];
  model?: string;
  maxTurns?: number;
};

export type AgentConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
  systemPrompt: string;
  maxTokens?: number;
  temperature?: number;
  maxTurns?: number;
  subAgents?: Record<string, SubAgentDefinition>;
};
