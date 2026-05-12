'use client';

import type { ChatMessage } from '../../lib/types';

type ChatBubbleProps = {
  message: ChatMessage;
};

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.type === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed break-words ${
          isUser
            ? 'rounded-br-md bg-linear-to-br from-[#1a56db] to-[#1e40af] font-medium text-white'
            : 'rounded-bl-md bg-[#1c2538] text-[#d4dce8]'
        } ${!isUser ? 'whitespace-pre-wrap' : ''}`}
      >
        {message.content}
        {message.isStreaming && !isUser && (
          <span className="ml-0.5 inline-block h-[15px] w-[7px] animate-pulse bg-[#8bb4f9] align-text-bottom" />
        )}
      </div>
    </div>
  );
}
