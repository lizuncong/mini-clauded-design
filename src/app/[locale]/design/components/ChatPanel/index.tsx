'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { ChatMessage, LlmMessage } from '../../lib/types';
import { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { runAgent } from '../../lib/agent';
import { fileStore } from '../../lib/file-store';
import { ChatBubble } from './ChatBubble';
import { ThinkingCard } from './ThinkingCard';
import { ToolCard } from './ToolCard';

let msgIdCounter = 0;

function generateId(): string {
  return `msg-${Date.now()}-${String(++msgIdCounter).padStart(4, '0')}`;
}
export type ChatPanelHandle = {
  onSend: (input: string) => Promise<void>;
  getConversation: () => LlmMessage[];
};

type ChatPanelProps = {
  messages: ChatMessage[];
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  setActiveFile: Dispatch<SetStateAction<string | null>>;
  initialConversation?: LlmMessage[];
};

export const ChatPanel = function ChatPanel(
  { ref, messages, setMessages, setActiveFile, initialConversation }: ChatPanelProps & { ref?: React.RefObject<ChatPanelHandle | null> },
) {
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const conversationRef = useRef<LlmMessage[]>(initialConversation ?? []);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const addMessage = useCallback((msg: ChatMessage) => {
    setMessages(prev => [...prev, msg]);
  }, [setMessages]);

  const updateLastStreaming = useCallback((content: string) => {
    setMessages((prev) => {
      const updated = [...prev];
      for (let i = updated.length - 1; i >= 0; i--) {
        const item = updated[i];
        if (item?.type === 'assistant' && item?.isStreaming) {
          updated[i] = {
            id: item.id,
            type: item.type,
            content: item.content + content,
            isStreaming: true,
            timestamp: item.timestamp,
          };
          break;
        }
      }
      return updated;
    });
  }, [setMessages]);

  const updateLastThinking = useCallback((content: string) => {
    setMessages((prev) => {
      const updated = [...prev];
      for (let i = updated.length - 1; i >= 0; i--) {
        const item = updated[i];
        if (item?.type === 'thinking' && item?.isStreaming) {
          updated[i] = {
            id: item.id,
            type: 'thinking',
            content: item.content + content,
            isStreaming: true,
            timestamp: item.timestamp,
          };
          break;
        }
      }
      return updated;
    });
  }, [setMessages]);

  const collapseThinking = useCallback(() => {
    setMessages(prev =>
      prev.map(m => (m.type === 'thinking' && m.isStreaming ? { ...m, isStreaming: false } : m)),
    );
  }, [setMessages]);

  const finalizeStream = useCallback(() => {
    setMessages(prev =>
      prev
        .map(m => (m.isStreaming ? { ...m, isStreaming: false } : m))
        .filter(m => !(m.type === 'assistant' && !m.content.trim())),
    );
  }, [setMessages]);

  const onSend = useCallback(
    async (input: string) => {
      if (isRunning) {
        return;
      }
      setIsRunning(true);

      addMessage({
        id: generateId(),
        type: 'user',
        content: input,
        timestamp: Date.now(),
      });

      let currentStreamId = '';
      let currentThinkingId = '';

      try {
        conversationRef.current = await runAgent(input, {
          onText(text: string) {
            addMessage({
              id: generateId(),
              type: 'system',
              content: text,
              timestamp: Date.now(),
            });
          },
          onStreamText(chunk: string) {
            if (!currentStreamId) {
              currentStreamId = generateId();
              collapseThinking();
              addMessage({
                id: currentStreamId,
                type: 'assistant',
                content: '',
                isStreaming: true,
                timestamp: Date.now(),
              });
            }
            updateLastStreaming(chunk);
          },
          onReasoningText(chunk: string) {
            if (!currentThinkingId) {
              currentThinkingId = generateId();
              addMessage({
                id: currentThinkingId,
                type: 'thinking',
                content: '',
                isStreaming: true,
                timestamp: Date.now(),
              });
            }
            updateLastThinking(chunk);
          },
          onToolCall(name: string, inputArgs: Record<string, unknown>) {
            finalizeStream();
            currentStreamId = '';
            currentThinkingId = '';
            addMessage({
              id: generateId(),
              type: 'tool-call',
              content: '',
              toolName: name,
              toolArgs: JSON.stringify(inputArgs),
              timestamp: Date.now(),
            });
          },
          onToolResult(name: string, result: string) {
            addMessage({
              id: generateId(),
              type: 'tool-result',
              content: result,
              toolName: name,
              timestamp: Date.now(),
            });
          },
          onDone(usage: { prompt_tokens: number; completion_tokens: number }) {
            finalizeStream();
            currentStreamId = '';
            addMessage({
              id: generateId(),
              type: 'done',
              content: `完成 (输入: ${usage.prompt_tokens} tokens, 输出: ${usage.completion_tokens} tokens)`,
              timestamp: Date.now(),
            });
            const files = fileStore.getAllFiles();
            const indexHtml = files.find(f => f.path === 'index.html');
            if (indexHtml) {
              setActiveFile('index.html');
            }
          },
          onSnip(before: number, after: number) {
            addMessage({
              id: generateId(),
              type: 'system',
              content: `[上下文裁剪] ${before} 条消息 → ${after} 条`,
              timestamp: Date.now(),
            });
          },
        }, conversationRef.current);
      } catch (err) {
        finalizeStream();
        addMessage({
          id: generateId(),
          type: 'error',
          content: err instanceof Error ? err.message : String(err),
          timestamp: Date.now(),
        });
      }

      setIsRunning(false);
    },
    [isRunning, addMessage, updateLastStreaming, updateLastThinking, collapseThinking, finalizeStream, setActiveFile],
  );
  useImperativeHandle(ref, () => ({
    onSend,
    getConversation: () => conversationRef.current,
  }), [onSend]);

  useEffect(() => {
    if (initialConversation && initialConversation.length > 0) {
      conversationRef.current = initialConversation;
    }
  }, [initialConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isRunning) {
      return;
    }
    onSend(trimmed);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (!el) {
      return;
    }
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  return (
    <section className="flex h-full min-w-[200px] flex-col border-r border-[#2a2a4a] bg-[#0f1219]">
      <div className="flex items-center gap-2 border-b border-[#1e2a3e] bg-[#141b2d] px-4.5 py-3.5">
        <span className="h-1.75 w-1.75 rounded-full bg-[#7ec699]" />
        <span className="text-[13px] font-semibold text-[#8bb4f9]">对话</span>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center py-16 text-sm text-[#4a5a6e]">
            描述你想要的界面设计或功能需求
          </div>
        )}
        {messages.map(msg => (
          <div key={msg.id}>
            {(msg.type === 'user' || msg.type === 'assistant') && (
              <ChatBubble message={msg} />
            )}
            {msg.type === 'tool-call' && (
              <ToolCard
                type="call"
                name={msg.toolName || ''}
                content={msg.toolArgs || ''}
              />
            )}
            {msg.type === 'tool-result' && (
              <ToolCard
                type="result"
                name={msg.toolName || ''}
                content={msg.content}
              />
            )}
            {msg.type === 'system' && (
              <p className="text-center text-[11.5px] text-[#4a5a6e]">{msg.content}</p>
            )}
            {msg.type === 'done' && (
              <p className="border-t border-dashed border-[#1e2a3e] pt-1 text-center text-[11.5px] text-[#58a6ff]">
                {msg.content}
              </p>
            )}
            {msg.type === 'error' && (
              <div className="mx-auto max-w-[88%] rounded-xl border border-solid border-[rgba(220,53,69,0.2)] bg-[rgba(220,53,69,0.12)] px-3.5 py-2 text-xs text-[#f56c6c]">
                {msg.content}
              </div>
            )}
            {msg.type === 'thinking' && (
              <ThinkingCard
                message={msg}
                onToggleExpand={() => {
                  setMessages(prev => prev.map(m =>
                    m.id === msg.id ? { ...m, isExpanded: !m.isExpanded } : m,
                  ));
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-end gap-2 border-t border-[#1e2a3e] bg-[#0a0e17] p-3.5">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleTextareaInput}
          placeholder="描述你想要的界面设计或功能需求，例如：帮我制作一个响应式的个人博客首页..."
          disabled={isRunning}
          rows={1}
          className="max-h-[160px] min-h-[48px] flex-1 resize-none rounded-xl border border-[#243049] bg-[#151c2c] px-3.5 py-3 text-[13.5px] leading-relaxed text-[#e0e0e0] transition-all duration-200 outline-none placeholder:text-[#3a4a5e] focus:border-[#4a7dcc] focus:shadow-[0_0_0_3px_rgba(74,125,204,0.15)] disabled:opacity-50"
        />
        <button
          onClick={handleSend}
          disabled={isRunning || !input.trim()}
          className="cursor-pointer rounded-xl bg-gradient-to-br from-[#1a56db] to-[#1e40af] px-5 py-3 text-[13.5px] font-semibold whitespace-nowrap text-white transition-all duration-150 outline-none hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(26,86,219,0.35)] active:translate-y-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none"
        >
          发送
        </button>
      </div>
    </section>
  );
};
