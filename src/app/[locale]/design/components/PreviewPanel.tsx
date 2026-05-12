'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { fileStore } from '../lib/tools';

type PreviewPanelProps = {
  activeFile: string | null;
};

const blobUrlCache = new Map<string, string>();

function getBlobUrl(path: string): string | null {
  if (blobUrlCache.has(path)) {
    return blobUrlCache.get(path) || null;
  }
  const file = fileStore.getFile(path);
  if (!file) {
    return null;
  }
  const ext = path.split('.').pop()?.toLowerCase() || '';
  const mime: Record<string, string> = {
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
    svg: 'image/svg+xml',
    html: 'text/html',
    htm: 'text/html',
  };
  const mimeType = mime[ext] || 'text/plain';
  const url = URL.createObjectURL(new Blob([file.content], { type: mimeType }));
  blobUrlCache.set(path, url);
  return url;
}

function invalidateBlobUrls(): void {
  for (const url of blobUrlCache.values()) {
    URL.revokeObjectURL(url);
  }
  blobUrlCache.clear();
}

function resolveWithBlobUrls(htmlContent: string, basePath: string): string {
  let resolved = htmlContent;
  const dir = basePath.substring(0, basePath.lastIndexOf('/') + 1);

  resolved = resolved.replace(
    /<link\s[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
    (match, href) => {
      const fullPath = href.startsWith('/') ? href.slice(1) : dir + href;
      const url = getBlobUrl(fullPath);
      if (url) {
        return match.replace(href, url);
      }
      return match;
    },
  );

  resolved = resolved.replace(
    /<script\s[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi,
    (match, src) => {
      const fullPath = src.startsWith('/') ? src.slice(1) : dir + src;
      const url = getBlobUrl(fullPath);
      if (url) {
        return match.replace(src, url);
      }
      return match;
    },
  );

  return resolved;
}

export function PreviewPanel({ activeFile }: PreviewPanelProps) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const unsubscribe = fileStore.subscribe(() => {
      invalidateBlobUrls();
      setRefreshKey(k => k + 1);
    });

    return () => {
      unsubscribe();
      invalidateBlobUrls();
    };
  }, []);

  const file = activeFile ? fileStore.getFile(activeFile) : null;
  const isHtmlFile = activeFile && (activeFile.endsWith('.html') || activeFile.endsWith('.htm'));

  const handleRefresh = useCallback(() => {
    invalidateBlobUrls();
    setRefreshKey(k => k + 1);
  }, []);

  const handleNewTab = useCallback(() => {
    if (!file?.content) {
      return;
    }
    invalidateBlobUrls();
    const resolved = isHtmlFile ? resolveWithBlobUrls(file.content, activeFile!) : file.content;
    const blob = new Blob([resolved], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }, [file, activeFile, isHtmlFile]);

  const getPreviewContent = (): string => {
    if (!file?.content) {
      return '';
    }
    if (isHtmlFile) {
      return resolveWithBlobUrls(file.content, activeFile!);
    }
    const ext = activeFile?.split('.').pop() || '';
    const escapedContent = file.content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<!DOCTYPE html><html><head><style>body{font-family:monospace;padding:20px;background:#fafafa;white-space:pre-wrap;word-break:break-all;font-size:13px;color:#333;}</style></head><body><pre class="language-${ext}">${escapedContent}</pre></body></html>`;
  };

  return (
    <section className="flex  h-full  flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-[#2a2a4a] bg-[#0f3460] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.75 w-1.75 rounded-full bg-[#7ec699]" />
          <span className="text-[13px] font-semibold text-[#7ec699]">预览</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex rounded border border-solid border-[#334466] bg-[#1a2744] p-[2px]">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`cursor-pointer rounded px-2 py-1 text-[11px] transition-colors duration-150 outline-none ${
                deviceMode === 'desktop'
                  ? 'bg-[#243355] text-[#8bb4f9]'
                  : 'text-[#666] hover:text-[#8bb4f9]'
              }`}
              title="PC端预览"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`cursor-pointer rounded px-2 py-1 text-[11px] transition-colors duration-150 outline-none ${
                deviceMode === 'mobile'
                  ? 'bg-[#243355] text-[#8bb4f9]'
                  : 'text-[#666] hover:text-[#8bb4f9]'
              }`}
              title="移动端预览"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </button>
          </div>
          <button
            onClick={handleRefresh}
            disabled={!activeFile}
            className="cursor-pointer rounded border border-solid border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#8bb4f9] transition-colors duration-150 outline-none hover:bg-[#243355] disabled:cursor-not-allowed disabled:opacity-40"
          >
            刷新
          </button>
          <button
            onClick={handleNewTab}
            disabled={!activeFile}
            className="cursor-pointer rounded border border-solid border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#8bb4f9] transition-colors duration-150 outline-none hover:bg-[#243355] disabled:cursor-not-allowed disabled:opacity-40"
          >
            新窗口
          </button>
        </div>
      </div>

      <div className={`relative flex-1 bg-white ${deviceMode === 'mobile' ? 'flex items-center justify-center overflow-auto' : ''}`}>
        {activeFile && file
          ? (
              <iframe
                ref={frameRef}
                key={`${activeFile}-${refreshKey}-${deviceMode}`}
                srcDoc={getPreviewContent()}
                sandbox="allow-scripts allow-same-origin allow-forms"
                className={`h-full border-none ${deviceMode === 'mobile' ? 'h-[calc(100%-2rem)] max-h-[812px] w-[375px] rounded-xl shadow-2xl ring-1 ring-black/10' : 'w-full'}`}
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
