import type { TreeNode } from './types';

export const FILE_ICONS: Record<string, string> = {
  html: '\u{1F310}',
  htm: '\u{1F310}',
  css: '\u{1F3A8}',
  js: '\u{1F4D3}',
  jsx: '\u{1F4D3}',
  json: '\u{1F4C4}',
  md: '\u{1F4DD}',
  svg: '\u{1F3B5}',
};

export function getFileIcon(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase() || '';
  return FILE_ICONS[ext] || '\u{1F4C4}';
}

function sortNodes(nodes: TreeNode[]): void {
  nodes.sort((a, b) => {
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
  nodes.forEach(n => sortNodes(n.children));
}

export function buildTree(files: { path: string }[]): TreeNode[] {
  const root: TreeNode[] = [];

  for (const file of files) {
    const parts = file.path.split('/');
    let current = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]!;
      const isLast = i === parts.length - 1;
      const fullPath = parts.slice(0, i + 1).join('/');

      const existing = current.find(n => n.name === part);

      if (existing) {
        if (isLast) {
          existing.isFolder = false;
        }
        current = existing.children;
      } else {
        const node: TreeNode = {
          name: part,
          path: fullPath,
          isFolder: !isLast,
          children: [],
        };
        current.push(node);
        current = node.children;
      }
    }
  }

  sortNodes(root);
  return root;
}
