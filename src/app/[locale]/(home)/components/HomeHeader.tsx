'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getApiKey, getModel, MODEL_LIST } from '../../design/lib/model-config';

export function HomeHeader() {
  const [hasKey, setHasKey] = useState(false);
  const [modelLabel, setModelLabel] = useState('');

  useEffect(() => {
    setHasKey(!!getApiKey());
    const currentId = getModel();
    const current = MODEL_LIST.find(m => m.id === currentId);
    setModelLabel(current?.label || currentId || 'GLM-4.7-Flash');
  }, []);

  return (
    <header className="flex h-12 items-center justify-between border-b border-[#2a2a4a] bg-[#0f1929] px-4">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-bold tracking-tight text-[#e0e0e0]">
          Snake
          {' '}
          <span className="text-[#8bb4f9]">Design</span>
        </h1>
        <div className="h-5 w-px bg-[#334466]" />
        <Link
          href="/settings"
          className="flex cursor-pointer items-center gap-1.5 rounded-md border border-[#334466] bg-[#1a2744] px-2.5 py-1 text-xs text-[#aaa] transition-colors hover:border-[#8bb4f9] hover:text-[#e0e0e0]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
          设置
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-md border border-[#334466] bg-[#1a2744] px-2.5 py-1 text-[11px] text-[#888]">
          {modelLabel}
        </span>
        <div
          className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-200 ${hasKey ? 'bg-[#7ec699]' : 'bg-[#f56c6c]'}`}
          title={hasKey ? '已配置' : '未配置 API Key'}
        />
      </div>
    </header>
  );
}
