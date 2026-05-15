'use client';

import type { DeviceMode } from './types';
import { useCallback } from 'react';
import { downloadAsZip } from '../../lib/download';
import { fileStore } from '../../lib/file-store';

type ToolbarProps = {
  deviceMode: DeviceMode;
  onDeviceChange: (mode: DeviceMode) => void;
  onRefresh: () => void;
};

export function Toolbar({
  deviceMode,
  onDeviceChange,
  onRefresh,
}: ToolbarProps) {
  const handleDownload = useCallback(async () => {
    const files = fileStore.getAllFiles();
    if (files.length === 0) {
      return;
    }
    await downloadAsZip(files, 'design-project');
  }, []);
  return (
    <div className="flex items-center justify-end border-b border-[#2a2a4a] bg-[#0f3460] px-4 py-3">
      <div className="flex items-center gap-1.5">
        <div className="flex rounded border border-solid border-[#334466] bg-[#1a2744] p-[2px]">
          <button
            onClick={() => onDeviceChange('desktop')}
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
            onClick={() => onDeviceChange('mobile')}
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
          onClick={onRefresh}
          className="cursor-pointer rounded border border-solid border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#8bb4f9] transition-colors duration-150 outline-none hover:bg-[#243355]"
        >
          刷新
        </button>
        <button
          onClick={handleDownload}
          className="cursor-pointer rounded border border-solid border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#8bb4f9] transition-colors duration-150 outline-none hover:bg-[#243355]"
          title="下载代码"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
