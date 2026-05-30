import type { FileStore } from '@/libs/agent-sdk';

export const PREVIEW_PREFIX = 'preview:';

export type TreeNode = {
  name: string;
  path: string;
  isFolder: boolean;
  children: TreeNode[];
};

export type FilePanelProps = {
  activeFile: string | null;
  fileStore: FileStore;
  onSelectFile: (path: string) => void;
};
