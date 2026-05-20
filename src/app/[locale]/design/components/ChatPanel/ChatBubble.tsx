'use client';

import type { Components } from 'react-markdown';
import type { ChatMessage } from '../../lib/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ChatBubbleProps = {
  message: ChatMessage;
};

const mdComponents: Components = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} className="text-[#6b9cf7] underline hover:text-[#8bb4f9]" target="_blank" rel="noopener noreferrer">
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
    <blockquote className="my-2 border-l-2 border-[#3b4d6b] pl-3 text-[#9aa8bc]">{children}</blockquote>
  ),
  hr: () => <hr className="my-3 border-[#2a3548]" />,
  table: ({ children }) => (
    <div className="my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-[#2a3548] text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-[#2a3548] bg-[#1e293b] px-2.5 py-1.5 font-medium text-[#d4dce8]">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-[#2a3548] px-2.5 py-1.5">{children}</td>
  ),
  code({ className, children, ...props }) {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="rounded-md bg-[rgba(99,132,189,0.18)] px-1.5 py-0.5 font-mono text-[12px] text-[#8bb4f9]" {...props}>
          {children}
        </code>
      );
    }
    const lang = (className || '').replace('language-', '');
    return (
      <div className="group my-2 overflow-hidden rounded-lg border border-solid border-[#2a3548]">
        {lang && (
          <div className="flex items-center justify-between bg-[#161e2d] px-3 py-1.5">
            <span className="text-[11px] font-medium text-[#5a6a7e]">{lang}</span>
          </div>
        )}
        <pre className="overflow-x-auto bg-[#0d1117] px-3.5 py-2.5">
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
      <div className="flex w-full justify-end">
        <div className="relative max-w-[88%] rounded-2xl rounded-br-md bg-linear-to-br from-[#1a56db] to-[#1e40af] px-3.5 py-2.5 text-[13px] leading-relaxed font-medium break-words whitespace-pre-wrap text-white">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-start">
      <div className="relative max-w-[88%] rounded-2xl rounded-bl-md bg-[#1c2538] px-3.5 py-2.5 text-[13px] leading-relaxed break-words text-[#d4dce8]">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {message.content}
        </ReactMarkdown>
        {message.isStreaming && (
          <span className="ml-0.5 inline-block h-[15px] w-[7px] animate-pulse bg-[#8bb4f9] align-text-bottom" />
        )}
      </div>
    </div>
  );
}
