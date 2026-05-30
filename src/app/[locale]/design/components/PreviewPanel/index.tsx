'use client';

import type { DeviceMode, PreviewPanelProps } from './types';
import type { DesignFile } from '@/libs/agent-sdk';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PREVIEW_PREFIX } from '../FilePanel/types';
import EditorComp from './Editor';
import { Toolbar } from './Toolbar';
import { invalidateBlobUrls, resolveWithBlobUrls } from './util';

export function PreviewPanel({ activeFile, fileStore }: PreviewPanelProps) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [files, setFiles] = useState<DesignFile[]>([]);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const unsubscribe = fileStore.subscribe(() => {
      setFiles(fileStore.getAllFiles());
      invalidateBlobUrls();
      setRefreshKey(k => k + 1);
    });

    return () => {
      unsubscribe();
      invalidateBlobUrls();
    };
  }, []);

  const isPreview = activeFile === PREVIEW_PREFIX;
  const indexFile = files.find((f) => {
    const name = f.path.split('/').pop()?.toLowerCase();
    return name === 'index.html' || name === 'index.htm';
  });
  const previewFile = indexFile ?? null;

  const previewContent = useMemo(() => {
    void refreshKey;
    if (!previewFile) {
      return '';
    }
    return resolveWithBlobUrls(fileStore, previewFile.content, previewFile.path);
  }, [previewFile, fileStore, refreshKey]);

  const handleRefresh = useCallback(() => {
    invalidateBlobUrls();
    setRefreshKey(k => k + 1);
  }, []);

  return (
    <section className="flex h-full flex-col bg-[#0d1117]">
      <Toolbar
        deviceMode={deviceMode}
        fileStore={fileStore}
        onDeviceChange={setDeviceMode}
        onRefresh={handleRefresh}
      />

      <div className="relative flex-1">
        {isPreview
          ? (
              <div className={`h-full bg-white ${deviceMode === 'mobile' ? 'flex items-center justify-center overflow-auto' : ''}`}>
                {previewContent
                  ? (
                      <iframe
                        ref={frameRef}
                        key={`preview-${refreshKey}-${deviceMode}`}
                        srcDoc={previewContent}
                        sandbox="allow-scripts allow-same-origin allow-forms"
                        className={`h-full border-none ${deviceMode === 'mobile' ? 'h-[calc(100%-2rem)] max-h-[812px] w-[375px] rounded-xl shadow-2xl ring-1 ring-black/10' : 'w-full'}`}
                        title="Preview"
                      />
                    )
                  : (
                      <div className="flex h-full items-center justify-center text-sm text-[#888]">
                        暂无可预览的 HTML 文件
                      </div>
                    )}
              </div>
            )
          : <EditorComp activeFile={activeFile} fileStore={fileStore} refreshKey={refreshKey} />}
      </div>
      {activeFile && !isPreview && (
        <div className="truncate border-t border-[#2a2a4e] bg-[#0f1929] px-4 py-1.5 text-[12px] text-[#aaa]">
          {activeFile}
        </div>
      )}
    </section>
  );
}
