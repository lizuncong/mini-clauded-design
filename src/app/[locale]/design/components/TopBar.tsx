'use client';

import type { ModelOption } from '../lib/types';
import { getModel, hasApiKey, MODEL_LIST, setModel } from '../lib/llm';

type TopBarProps = {
  onApiKeyClick: () => void;
};

export function TopBar({ onApiKeyClick }: TopBarProps) {
  const isConnected = hasApiKey();

  return (
    <header className="flex h-12 items-center justify-between border-b border-[#2a2a4a] bg-[#0f1929] px-4">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-bold tracking-tight text-[#e0e0e0]">
          Mini
          {' '}
          <span className="text-[#8bb4f9]">Design</span>
        </h1>
        <div className="h-5 w-px bg-[#334466]" />
        <select
          defaultValue={getModel()}
          onChange={e => setModel(e.target.value)}
          className="min-w-[170px] cursor-pointer rounded-md border border-[#334466] bg-[#1a2744] px-2.5 py-1 text-xs text-[#e0e0e0] transition-colors outline-none focus:border-[#8bb4f9]"
        >
          {MODEL_LIST.map((m: ModelOption) => (
            <option key={m.id} value={m.id} className="bg-[#1a2744]">
              {m.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2.5">
        <button
          onClick={onApiKeyClick}
          className="cursor-pointer rounded-md border border-[#334466] bg-transparent px-3.5 py-1.5 text-xs text-[#aaa] transition-all duration-150 outline-none hover:border-[#8bb4f9] hover:text-[#8bb4f9]"
        >
          API Key
        </button>
        <div
          className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-200 ${isConnected ? 'bg-[#7ec699]' : 'bg-[#f56c6c]'}`}
          title={isConnected ? '已连接' : '未连接'}
        />
      </div>
    </header>
  );
}
