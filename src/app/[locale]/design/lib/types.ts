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

export type ModelOption = {
  id: string;
  label: string;
  free?: boolean;
  context?: string;
  output?: string;
  desc?: string;
};
