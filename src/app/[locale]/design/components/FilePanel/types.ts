export type TreeNode = {
  name: string;
  path: string;
  isFolder: boolean;
  children: TreeNode[];
};

export type FilePanelProps = {
  activeFile: string | null;
  onSelectFile: (path: string) => void;
  onTogglePreview: () => void;
  showPreview: boolean;
};
