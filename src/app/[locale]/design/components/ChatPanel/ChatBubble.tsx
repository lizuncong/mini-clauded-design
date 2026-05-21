'use client';

import type { Components } from 'react-markdown';
import type { ChatMessage } from '../../lib/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ChatBubbleProps = {
  message: ChatMessage;
};

const mdComponents: Components = {
  p: ({ children }) => <p className="mb-2 leading-relaxed last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} className="text-[#60a5fa] underline transition-colors duration-200 hover:text-[#93c5fd]" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="mb-2 ml-4 list-disc space-y-1 last:mb-0">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 ml-4 list-decimal space-y-1 last:mb-0">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  h1: () => null,
  h2: () => null,
  h3: () => null,
  h4: () => null,
  h5: () => null,
  h6: () => null,
  blockquote: ({ children }) => (
    <blockquote className="my-2 border-l-2 border-[#3b82f6] bg-[rgba(59,130,246,0.08)] pl-3 text-[#94a3b8] italic">{children}</blockquote>
  ),
  hr: () => <hr className="my-3 border-[#334155]" />,
  table: ({ children }) => (
    <div className="my-2 overflow-x-auto rounded-lg border border-[#334155]">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-[#334155] bg-[#1e293b] px-3 py-2 font-semibold text-[#e2e8f0]">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-[#334155] px-3 py-2 text-[#cbd5e1]">{children}</td>
  ),
  code({ className, children, ...props }) {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="rounded-md bg-[rgba(59,130,246,0.15)] px-1.5 py-0.5 font-mono text-[13px] text-[#60a5fa]" {...props}>
          {children}
        </code>
      );
    }
    const lang = (className || '').replace('language-', '');
    return (
      <div className="group/my-2 overflow-hidden rounded-xl border border-[#334155] shadow-lg shadow-black/20">
        {lang && (
          <div className="flex items-center justify-between bg-[#1e293b] px-4 py-2">
            <span className="text-xs font-medium tracking-wider text-[#64748b] uppercase">{lang}</span>
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#eab308]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            </div>
          </div>
        )}
        <pre className="overflow-x-auto bg-[#0f172a] px-4 py-3">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  },
};

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.type === 'user';

  if (isUser) {
    return (
      <div className="flex w-full justify-end gap-2">
        <div className="flex max-w-[85%] flex-col items-end gap-1.5">
          <div className="group/bubble relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] opacity-60 blur-[2px] transition-all duration-300 group-hover/bubble:opacity-80 group-hover/bubble:blur-[3px]" />
            <div className="relative overflow-hidden rounded-2xl rounded-br-md bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e40af] px-4 py-2.5 shadow-xl shadow-blue-900/30 transition-all duration-200 group-hover/bubble:shadow-blue-800/40">
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
              <p className="relative text-[13.5px] leading-relaxed font-medium break-words whitespace-pre-wrap text-white">
                {message.content}
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] shadow-lg ring-2 shadow-blue-900/40 ring-[#0f172a]/80">
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-start gap-2">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] shadow-md ring-2 ring-[#0f172a]">
        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      </div>
      <div className="flex max-w-[85%] flex-col gap-1">
        <div className="group/bubble relative rounded-xl rounded-bl-md border border-[#334155]/50 bg-[#1e293b]/80 px-3.5 py-2.5 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-200 hover:border-[#3b82f6]/30 hover:bg-[#1e293b]">
          <div className="text-[13.5px] leading-relaxed text-[#e2e8f0]">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {message.content}
            </ReactMarkdown>
          </div>
          {message.isStreaming && (
            <span className="ml-1 inline-flex gap-0.5 align-text-bottom">
              <span className="inline-block h-[5px] w-[5px] animate-bounce rounded-full bg-[#3b82f6] [animation-delay:-0.3s]" />
              <span className="inline-block h-[5px] w-[5px] animate-bounce rounded-full bg-[#3b82f6] [animation-delay:-0.15s]" />
              <span className="inline-block h-[5px] w-[5px] animate-bounce rounded-full bg-[#3b82f6]" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
