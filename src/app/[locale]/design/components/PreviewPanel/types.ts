import type { FileStore } from '@/libs/agent-sdk';

export type PreviewPanelProps = {
  activeFile: string | null;
  fileStore: FileStore;
};

export type DeviceMode = 'desktop' | 'mobile';
