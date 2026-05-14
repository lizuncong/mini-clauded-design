'use client';

import type { FilePanelProps } from './types';
import { useMemo } from 'react';
import { useFileStore } from '../../lib/useFileStore';

import { TreeNodeItem } from './TreeNodeItem';
import { PREVIEW_PREFIX } from './types';
import { buildTree } from './util';

export { PREVIEW_PREFIX };
export function FilePanel({ activeFile, onSelectFile }: FilePanelProps) {
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
              <>
                {tree.map(node => (
                  <TreeNodeItem
                    key={node.path}
                    node={node}
                    depth={0}
                    activeFile={activeFile}
                    onSelectFile={onSelectFile}
                  />
                ))}
                <button
                  onClick={() => onSelectFile(PREVIEW_PREFIX)}
                  className={`mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                    activeFile?.startsWith(PREVIEW_PREFIX)
                      ? 'bg-[#0f3460] text-[#7ec699] shadow-[0_0_12px_rgba(126,198,153,0.15)]'
                      : 'bg-[#1a2744] text-[#8bb4f9] hover:bg-[#243355] hover:text-[#a0c8ff]'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 14 20 9 15 4" />
                    <path d="M4 20v-7a4 4 0 014-4h12" />
                  </svg>
                  效果预览
                </button>
              </>
            )}
      </div>
    </aside>
  );
}
