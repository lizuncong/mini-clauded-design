'use client';

import type { TreeNode } from './types';
import { useCallback, useState } from 'react';
import { getFileIcon } from './util';

type TreeNodeItemProps = {
  node: TreeNode;
  depth: number;
  activeFile: string | null;
  onSelectFile: (path: string) => void;
  showPreview?: boolean;
  onTogglePreview?: () => void;
};

export function TreeNodeItem({ node, depth, activeFile, onSelectFile, showPreview, onTogglePreview }: TreeNodeItemProps) {
  const [expanded, setExpanded] = useState(true);

  const handleClick = useCallback(() => {
    if (node.isFolder) {
      setExpanded(e => !e);
    } else {
      onSelectFile(node.path);
    }
  }, [node.isFolder, node.path, onSelectFile]);

  const isActive = !node.isFolder && node.path === activeFile;
  const isIndexHtml = !node.isFolder && (node.name.toLowerCase() === 'index.html' || node.name.toLowerCase() === 'index.htm');

  return (
    <div>
      <button
        onClick={handleClick}
        title={node.path}
        className={`flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-[13px] transition-colors duration-150 ${
          isActive
            ? 'bg-[#0f3460] text-[#8bb4f9]'
            : 'hover:bg-[#1a3050]'
        }`}
        style={{ paddingLeft: `${8 + depth * 16}px` }}
      >
        {node.isFolder
          ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 transition-transform duration-150 ${expanded ? 'rotate-90' : ''}`}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )
          : (
              <span className="w-[12px] shrink-0 text-center text-[12px] leading-none">
                {getFileIcon(node.path)}
              </span>
            )}
        <span className="flex-1 truncate">{node.name}</span>
      </button>
      {isIndexHtml && onTogglePreview && (
        <button
          onClick={onTogglePreview}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200 ${
            showPreview
              ? 'bg-[#0f3460] text-[#7ec699] shadow-[0_0_12px_rgba(126,198,153,0.15)]'
              : 'bg-[#1a2744] text-[#8bb4f9] hover:bg-[#243355] hover:text-[#a0c8ff]'
          }`}
          style={{ marginLeft: `${8 + depth * 16}px`, marginTop: '4px' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 14 20 9 15 4" />
            <path d="M4 20v-7a4 4 0 014-4h12" />
          </svg>
          {showPreview ? '返回源码' : '效果预览'}
        </button>
      )}
      {node.isFolder && expanded && (
        <div>
          {node.children.map(child => (
            <TreeNodeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              activeFile={activeFile}
              onSelectFile={onSelectFile}
            />
          ))}
        </div>
      )}
    </div>
  );
}
