'use client';

import { fileStore } from '../lib/tools';

type FilePanelProps = {
  activeFile: string | null;
  onSelectFile: (path: string) => void;
};

const FILE_ICONS: Record<string, string> = {
  html: '\u{1F310}',
  htm: '\u{1F310}',
  css: '\u{1F3A8}',
  js: '\u{1F4D3}',
  json: '\u{1F4C4}',
  md: '\u{1F4DD}',
  svg: '\u{1F3B5}',
};

function getFileIcon(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase() || '';
  return FILE_ICONS[ext] || '\u{1F4C4}';
}

export function FilePanel({ activeFile, onSelectFile }: FilePanelProps) {
  const files = fileStore.getAllFiles();
  const sortedFiles = [...files].sort((a, b) => {
    const ah = a.path.endsWith('.html') || a.path.endsWith('.htm');
    const bh = b.path.endsWith('.html') || b.path.endsWith('.htm');
    if (ah && !bh) {
      return -1;
    }
    if (!ah && bh) {
      return 1;
    }
    return a.path.localeCompare(b.path);
  });

  return (
    <aside className="flex h-full min-w-[150px] flex-col border-r border-[#2a2a4a] bg-[#16213e]">
      <div className="flex items-center gap-2 border-b border-[#2a2a4a] bg-[#0f3460] px-4 py-3">
        <span className="h-1.75 w-1.75 rounded-full bg-[#e6c07b]" />
        <span className="text-[13px] font-semibold text-[#e6c07b]">设计产物</span>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {sortedFiles.length === 0
          ? (
              <div className="py-10 text-center text-sm leading-relaxed text-[#555]">
                暂无文件
                <br />
                LLM 生成的代码将显示在这里
              </div>
            )
          : (
              sortedFiles.map(file => (
                <button
                  key={file.path}
                  onClick={() => onSelectFile(file.path)}
                  title={file.path}
                  className={`mb-0.5 flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-left text-[13px] transition-colors duration-150 ${
                    file.path === activeFile
                      ? 'bg-[#0f3460] text-[#8bb4f9]'
                      : 'hover:bg-[#1a3050]'
                  }`}
                >
                  <span className="w-[18px] shrink-0 text-center text-[14px]">{getFileIcon(file.path)}</span>
                  <span className="flex-1 truncate">{file.path}</span>
                  <span className="shrink-0 text-[11px] text-[#666]">
                    {(file.size / 1024).toFixed(1)}
                    KB
                  </span>
                </button>
              ))
            )}
      </div>
    </aside>
  );
}
