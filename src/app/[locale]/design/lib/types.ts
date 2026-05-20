export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  toolCalls?: ToolCallInfo[];
  toolCallId?: string;
  timestamp: number;
};

export type ToolCallInfo = {
  id: string;
  name: string;
  arguments: string;
  result?: string;
};

export type ChatMessage = {
  id: string;
  type: 'user' | 'assistant' | 'thinking' | 'tool-call' | 'tool-result' | 'system' | 'error' | 'done';
  content: string;
  toolName?: string;
  toolArgs?: string;
  isStreaming?: boolean;
  isExpanded?: boolean;
  timestamp: number;
};

export type DesignFile = {
  path: string;
  content: string;
  size: number;
  createdAt: number;
  updatedAt: number;
};

export type ToolDefinition = {
  name: string;
  description: string;
  input_schema: Record<string, unknown>;
  execute?: (input: Record<string, unknown>, ctx?: unknown) => Promise<string>;
  enabled?: () => boolean;
};

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

export type ModelOption = {
  id: string;
  label: string;
  free?: boolean;
  context?: string;
  output?: string;
  desc?: string;
};

export type SnipRecord = { fromId: string; toId: string; reason: string };
