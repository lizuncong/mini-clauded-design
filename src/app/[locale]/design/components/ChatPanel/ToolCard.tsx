'use client';

import { useState } from 'react';

type ToolCardProps = {
  type: 'call' | 'result';
  name: string;
  content: string;
};

export function ToolCard({ type, name, content }: ToolCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isCall = type === 'call';

  const summaryText = content.slice(0, 80) + (content.length > 80 ? '...' : '');

  return (
    <div className="mx-auto w-full">
      <div className={`overflow-hidden rounded-lg border transition-all duration-200 ${
        isCall
          ? 'border-[#22c55e]/20 bg-[#0d1a12]'
          : 'border-[#f59e0b]/20 bg-[#1a1612]'
      }`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left transition-colors duration-150 select-none hover:bg-white/[0.02]"
        >
          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
            isCall ? 'bg-[#22c55e]/15' : 'bg-[#f59e0b]/15'
          }`}
          >
            {isCall
              ? (
                  <svg className="h-3 w-3 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              : (
                  <svg className="h-3 w-3 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
          </div>

          <span className={`text-[11.5px] font-semibold ${isCall ? 'text-[#4ade80]' : 'text-[#fbbf24]'}`}>
            {name}
          </span>

          {!expanded && summaryText && (
            <span className="truncate text-[11px] text-[#64748b]">{summaryText}</span>
          )}

          <svg
            className={`ml-auto h-3.5 w-3.5 shrink-0 text-[#475569] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            expanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`border-t px-3 pt-2 pb-2.5 ${
            isCall ? 'border-[#22c55e]/10 bg-black/20' : 'border-[#f59e0b]/10 bg-black/20'
          }`}
          >
            <pre className="font-mono text-[11.5px] leading-relaxed break-all whitespace-pre-wrap text-[#94a3b8]">
              {content}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
