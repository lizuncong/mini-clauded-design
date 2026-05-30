'use client';

import type { DesignFile, FileStore } from '@/libs/agent-sdk';
import { useEffect, useState } from 'react';

export function useFileStore(fileStore: FileStore) {
  const [files, setFiles] = useState<DesignFile[]>(fileStore.getAllFiles());

  useEffect(() => {
    const unsubscribe = fileStore.subscribe(() => {
      setFiles(fileStore.getAllFiles());
    });

    return unsubscribe;
  }, [fileStore]);

  return files;
}
