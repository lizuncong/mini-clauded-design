import type { ChatMessage } from '../../app/[locale]/design/lib/types';
import type { DesignFile, LlmMessage } from '../../libs/agent-sdk';

export type Project = {
  id: string;
  title: string;
  requirement: string;
  createdAt: number;
  updatedAt: number;
  state: ProjectState;
};

export type ProjectState = {
  messages: ChatMessage[];
  files: DesignFile[];
  activeFile: string | null;
  conversation: LlmMessage[];
};

export type ProjectSummary = Omit<Project, 'state'>;
