'use client';

import type { ChatMessage } from '../lib/types';

type ChatBubbleProps = {
  message: ChatMessage;
};

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.type === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed break-words relative ${
          isUser
            ? 'rounded-br-md bg-gradient-to-br from-[#1a56db] to-[#1e40af] font-medium text-white'
            : 'rounded-bl-md bg-[#1c2538] text-[#d4dce8]'
        } ${!isUser ? 'whitespace-pre-wrap' : ''}`}
      >
        {message.content}
        {message.isStreaming && !isUser && (
          <span className="inline-block ml-0.5 h-[15px] w-[7px] align-text-bottom animate-pulse bg-[#8bb4f9]" />
        )}
      </div>
    </div>
  );
}
