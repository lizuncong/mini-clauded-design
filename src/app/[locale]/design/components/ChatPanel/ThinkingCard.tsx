'use client';

import type { ChatMessage } from '../../lib/types';

type ThinkingCardProps = {
  message: ChatMessage;
  onToggleExpand: () => void;
};

export function ThinkingCard({ message, onToggleExpand }: ThinkingCardProps) {
  const isStreaming = !!message.isStreaming;
  const isExpanded = !isStreaming && message.isExpanded;

  if (isStreaming) {
    const displayContent = message.content.replace(/\n{3,}/g, '\n\n').trimStart();
    return (
      <div className="mx-auto max-w-[88%]">
        <div className="mb-1 flex items-center gap-1.5 px-1">
          <svg className="h-3 w-3 animate-spin text-[#c9a227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          </svg>
          <span className="text-[11px] font-medium tracking-wide text-[#c9a227]">推理过程</span>
        </div>
        <div className="rounded-xl border border-solid border-[rgba(201,162,39,0.15)] bg-[rgba(201,162,39,0.06)] px-3.5 py-2.5">
          <pre className="text-[12px] leading-relaxed break-words whitespace-pre-wrap text-[#b8a05d]">{displayContent || ' '}</pre>
          <span className="ml-0.5 inline-block h-[13px] w-[6px] animate-pulse bg-[#c9a227]/60 align-text-bottom" />
        </div>
      </div>
    );
  }

  const displayContent = message.content.replace(/\n{3,}/g, '\n\n').trimStart();

  return (
    <button
      type="button"
      onClick={onToggleExpand}
      className="mx-auto flex w-full max-w-[88%] cursor-pointer items-center gap-1.5 rounded-lg border border-solid border-[rgba(201,162,39,0.12)] bg-[rgba(201,162,39,0.04)] px-3 py-1.5 text-left transition-colors duration-200 hover:bg-[rgba(201,162,39,0.08)]"
    >
      <svg className={`h-3 w-3 shrink-0 text-[#c9a227] transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} viewBox="0 0 16 16" fill="currentColor">
        <path d="M6 4l4 4-4 4V4z" />
      </svg>
      <span className="text-[11px] font-medium tracking-wide text-[#c9a227]">推理过程</span>
      {isExpanded && (
        <pre className="mt-1.5 w-full border-t border-dashed border-[rgba(201,162,39,0.12)] pt-1.5 text-[11.5px] leading-relaxed break-words whitespace-pre-wrap text-[#9a8556]">{displayContent}</pre>
      )}
    </button>
  );
}
