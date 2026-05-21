'use client';

import type { Components } from 'react-markdown';
import type { ChatMessage } from '../../lib/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ThinkingCardProps = {
  message: ChatMessage;
  onToggleExpand: () => void;
};

const thinkingMdComponents: Components = {
  p: ({ children }) => <p className="mb-2 leading-relaxed last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-[#fbbf24]">{children}</strong>,
  em: ({ children }) => <em className="text-[#d4a574] italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} className="text-[#d97706] underline transition-colors duration-200 hover:text-[#fbbf24]" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="mb-2 ml-4 list-disc space-y-0.5 last:mb-0">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 ml-4 list-decimal space-y-0.5 last:mb-0">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  h1: () => null,
  h2: () => null,
  h3: () => null,
  h4: () => null,
  h5: () => null,
  h6: () => null,
  blockquote: ({ children }) => (
    <blockquote className="my-2 border-l-2 border-[#f59e0b]/40 bg-[#f59e0b]/8 pl-3 text-[#92400e] italic">{children}</blockquote>
  ),
  hr: () => <hr className="my-2 border-[#451a03]" />,
  table: ({ children }) => (
    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#f59e0b]/20 hover:scrollbar-thumb-[#f59e0b]/40 my-2 overflow-x-auto rounded border border-[#451a03]">
      <table className="w-full min-w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-[#451a03] bg-[#451a03]/30 px-2 py-1.5 font-semibold text-[#fbbf24]">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-[#451a03] px-2 py-1.5 text-[#d4a574]">{children}</td>
  ),
  code({ className, children, ...props }) {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="rounded bg-[#f59e0b]/15 px-1 py-0.5 font-mono text-[11.5px] text-[#fbbf24]" {...props}>
          {children}
        </code>
      );
    }
    const lang = (className || '').replace('language-', '');
    return (
      <div className="my-2 overflow-hidden rounded-lg border border-[#451a03]">
        {lang && (
          <div className="flex items-center justify-between bg-[#451a03]/30 px-3 py-1.5">
            <span className="text-[10px] font-medium tracking-wider text-[#78716c] uppercase">{lang}</span>
          </div>
        )}
        <pre className="overflow-x-auto bg-black/30 px-3 py-2">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  },
};

export function ThinkingCard({ message, onToggleExpand }: ThinkingCardProps) {
  const isStreaming = !!message.isStreaming;
  const isExpanded = !isStreaming && message.isExpanded;

  if (isStreaming) {
    const displayContent = message.content.replace(/\n{3,}/g, '\n\n').trimStart();
    return (
      <div className="w-full">
        <div className="overflow-hidden rounded-lg border border-[#f59e0b]/20 bg-[#1a1612]">
          <div className="flex items-center gap-2 border-b border-[#f59e0b]/10 bg-[#f59e0b]/5 px-3 py-2">
            <div className="relative flex h-4 w-4 items-center justify-center">
              <svg className="h-3.5 w-3.5 animate-spin text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="text-[11.5px] font-semibold text-[#fbbf24]">推理过程</span>
            <span className="ml-auto flex gap-0.5">
              <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-[#fbbf24]" />
              <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-[#fbbf24] [animation-delay:0.15s]" />
              <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-[#fbbf24] [animation-delay:0.3s]" />
            </span>
          </div>
          <div className="px-3 py-2.5">
            <div className="text-[12px] leading-relaxed text-[#d4a574]">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={thinkingMdComponents}>
                {displayContent || '正在思考...'}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const displayContent = message.content.replace(/\n{3,}/g, '\n\n').trimStart();

  return (
    <button
      type="button"
      onClick={onToggleExpand}
      className={`w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-all duration-200 ${
        isExpanded
          ? 'border-[#f59e0b]/25 bg-[#1a1612]'
          : 'border-[#f59e0b]/15 bg-[#1a1612]/60 hover:border-[#f59e0b]/25 hover:bg-[#1a1612]'
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <svg className="h-3.5 w-3.5 shrink-0 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.z47z" />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#d97706]">推理过程</span>
        {!isExpanded && (
          <span className="text-[11px] text-[#78716c]">点击展开</span>
        )}
        <svg className={`ml-auto h-3.5 w-3.5 shrink-0 text-[#78716c] transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      {isExpanded && (
        <div className="border-t border-[#f59e0b]/10 px-3 pt-2 pb-2.5">
          <div className="text-[11.5px] leading-relaxed text-[#b45309]">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={thinkingMdComponents}>
              {displayContent}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </button>
  );
}
