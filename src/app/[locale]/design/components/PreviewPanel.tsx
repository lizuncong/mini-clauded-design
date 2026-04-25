'use client';

import { useCallback, useRef, useState } from 'react';
import { fileStore } from '../lib/tools';

type PreviewPanelProps = {
  activeFile: string | null;
};

export function PreviewPanel({ activeFile }: PreviewPanelProps) {
  const [refreshKey, setRefreshKey] = useState(0);
  const frameRef = useRef<HTMLIFrameElement>(null);

  const file = activeFile ? fileStore.getFile(activeFile) : null;
  const isHtmlFile = activeFile && (activeFile.endsWith('.html') || activeFile.endsWith('.htm'));

  const handleRefresh = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  const handleNewTab = useCallback(() => {
    if (!file?.content) {
      return;
    }
    const blob = new Blob([file.content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }, [file]);

  const getPreviewContent = (): string => {
    if (!file?.content) {
      return '';
    }
    if (isHtmlFile) {
      return file.content;
    }
    const ext = activeFile?.split('.').pop() || '';
    const langMap: Record<string, string> = {
      css: 'css',
      js: 'javascript',
      json: 'json',
      md: 'markdown',
    };
    const lang = langMap[ext] || 'plaintext';
    const escapedContent = file.content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<!DOCTYPE html><html><head><style>body{font-family:monospace;padding:20px;background:#fafafa;white-space:pre-wrap;word-break:break-all;font-size:13px;color:#333;}</style></head><body><pre class="language-${lang}">${escapedContent}</pre></body></html>`;
  };

  return (
    <section className="flex min-w-[400px] flex-1 flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-[#2a2a4a] bg-[#0f3460] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.75 w-1.75 rounded-full bg-[#7ec699]" />
          <span className="text-[13px] font-semibold text-[#7ec699]">预览</span>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={handleRefresh}
            disabled={!activeFile}
            className="cursor-pointer rounded border border-solid border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#8bb4f9] outline-none transition-colors duration-150 hover:bg-[#243355] disabled:cursor-not-allowed disabled:opacity-40"
          >
            刷新
          </button>
          <button
            onClick={handleNewTab}
            disabled={!activeFile}
            className="cursor-pointer rounded border border-solid border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#8bb4f9] outline-none transition-colors duration-150 hover:bg-[#243355] disabled:cursor-not-allowed disabled:opacity-40"
          >
            新窗口
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-white">
        {activeFile && file
          ? (
              <iframe
                ref={frameRef}
                key={`${activeFile}-${refreshKey}`}
                srcDoc={getPreviewContent()}
                sandbox="allow-scripts allow-same-origin"
                className="h-full w-full border-none"
                title={`Preview: ${activeFile}`}
              />
            )
          : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#fafafa] text-[#444]">
                <span className="text-[48px] opacity-30">&#x1F4F0;</span>
                <span className="text-sm">选择左侧文件或等待 LLM 生成代码</span>
              </div>
            )}
      </div>

      {activeFile && (
        <div className="truncate border-t border-[#2a2a4e] bg-[#0f1929] px-4 py-1.5 text-[12px] text-[#aaa]">
          {activeFile}
        </div>
      )}
    </section>
  );
}
