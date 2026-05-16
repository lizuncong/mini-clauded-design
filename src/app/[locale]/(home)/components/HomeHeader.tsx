'use client';

import type { ModelOption } from '../../design/lib/types';
import { getModel, MODEL_LIST, setModel } from '../../design/lib/llm';
import { ApiKeyButton } from './ApiKeyModal';

export function HomeHeader() {
  return (
    <header className="flex h-12 items-center justify-between border-b border-[#2a2a4a] bg-[#0f1929] px-4">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-bold tracking-tight text-[#e0e0e0]">
          Snake
          {' '}
          <span className="text-[#8bb4f9]">Design</span>
        </h1>
        <div className="h-5 w-px bg-[#334466]" />
        <select
          defaultValue={getModel()}
          onChange={(e) => {
            setModel(e.target.value);
          }}
          className="min-w-[170px] cursor-pointer rounded-md border border-[#334466] bg-[#1a2744] px-2.5 py-1 text-xs text-[#e0e0e0] transition-colors outline-none focus:border-[#8bb4f9]"
        >
          {MODEL_LIST.map((m: ModelOption) => (
            <option key={m.id} value={m.id} className="bg-[#1a2744]">
              {m.label}
              {m.free ? ' 🆓' : ''}
              {m.context ? ` | ${m.context}` : ''}
              {m.output ? ` →${m.output}` : ''}
              {m.desc ? ` (${m.desc})` : ''}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/lizuncong/snake-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#888] transition-colors hover:text-[#e0e0e0]"
        >
          GitHub
        </a>
        <ApiKeyButton />
      </div>
    </header>
  );
}
