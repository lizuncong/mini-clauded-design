'use client';

import type { FilePanelProps } from './types';
import { useMemo } from 'react';
import { useFileStore } from '../../lib/useFileStore';

import { TreeNodeItem } from './TreeNodeItem';
import { buildTree } from './util';

export function FilePanel({ activeFile, onSelectFile, onTogglePreview, showPreview }: FilePanelProps) {
  const files = useFileStore();

  const tree = useMemo(() => buildTree(files), [files]);

  return (
    <aside className="flex h-full min-w-[150px] flex-col border-r border-[#2a2a4a] bg-[#16213e]">
      <div className="flex items-center gap-2 border-b border-[#2a2a4a] bg-[#0f3460] px-4 py-3">
        <span className="h-1.75 w-1.75 rounded-full bg-[#e6c07b]" />
        <span className="text-[13px] font-semibold text-[#e6c07b]">设计产物</span>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {tree.length === 0
          ? (
              <div className="py-10 text-center text-sm leading-relaxed text-[#555]">
                暂无文件
                <br />
                LLM 生成的代码将显示在这里
              </div>
            )
          : (
              tree.map(node => (
                <TreeNodeItem
                  key={node.path}
                  node={node}
                  depth={0}
                  activeFile={activeFile}
                  onSelectFile={onSelectFile}
                  showPreview={showPreview}
                  onTogglePreview={onTogglePreview}
                />
              ))
            )}
      </div>
    </aside>
  );
}
