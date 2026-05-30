'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { ChatMessage } from '../../lib/types';
import type { AgentCallbacks, AgentInstance, LlmMessage } from '@/libs/agent-sdk';
import { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
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
  agent: AgentInstance;
  messages: ChatMessage[];
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  setActiveFile: Dispatch<SetStateAction<string | null>>;
  initialConversation?: LlmMessage[];
};

export const ChatPanel = function ChatPanel(
  { ref, agent, messages, setMessages, setActiveFile, initialConversation }: ChatPanelProps & { ref?: React.RefObject<ChatPanelHandle | null> },
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
      const fileWriteSet = new Set<string>();

      try {
        const callbacks: AgentCallbacks = {
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
            if (name === 'write_file' && inputArgs.path) {
              fileWriteSet.add(inputArgs.path as string);
            }
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
            const fileList = [...fileWriteSet];
            if (fileList.length > 0) {
              setActiveFile(fileList[fileList.length - 1]!);
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
        };

        conversationRef.current = await agent.run(input, callbacks, conversationRef.current);
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
    [isRunning, agent, addMessage, updateLastStreaming, updateLastThinking, collapseThinking, finalizeStream, setActiveFile],
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
    <section className="flex h-full min-w-[200px] flex-col border-r border-[#1e293b] bg-[#0f172a]">
      <div className="flex items-center gap-2.5 border-b border-[#1e293b] bg-[#1e293b]/50 px-4 py-3.5 backdrop-blur-sm">
        <div className="relative">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          </span>
        </div>
        <span className="text-[14px] font-semibold tracking-wide text-[#f1f5f9]">对话</span>
      </div>

      <div ref={scrollRef} className="design-scrollbar flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-[#0f172a] to-[#0c1322] p-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 ring-1 ring-[#3b82f6]/30">
              <svg className="h-8 w-8 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <p className="max-w-[280px] text-center text-sm leading-relaxed text-[#64748b]">
              描述你想要的界面设计或功能需求
            </p>
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
              <div className="w-full rounded-lg bg-[#1e293b]/60 px-3 py-2 text-center">
                <p className="text-[11.5px] leading-relaxed text-[#64748b]">{msg.content}</p>
              </div>
            )}
            {msg.type === 'done' && (
              <div className="relative w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6]/10 to-transparent" />
                <div className="relative border-t border-dashed border-[#334155] bg-[#1e293b]/40 px-3 py-2 text-center backdrop-blur-sm">
                  <p className="text-[11.5px] font-medium text-[#60a5fa]">{msg.content}</p>
                </div>
              </div>
            )}
            {msg.type === 'error' && (
              <div className="w-full rounded-lg border border-[#ef4444]/30 bg-[#ef4444]/10 px-3 py-2.5 shadow-lg shadow-red-500/10">
                <p className="text-[12.5px] leading-relaxed font-medium text-[#fca5a5]">{msg.content}</p>
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

      <div className="relative border-t border-[#1e293b] bg-gradient-to-t from-[#0f172a] via-[#0f172a]/98 to-[#0f172a]/95 p-4 backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent" />
        <div className="flex items-end gap-2.5">
          <div className="group/input relative flex-1">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3b82f6]/20 via-[#2563eb]/20 to-[#1d4ed8]/20 opacity-0 blur-xl transition-opacity duration-300 group-focus-within/input:opacity-100" />
            <textarea
              ref={textareaRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onInput={handleTextareaInput}
              placeholder="描述你想要的界面设计或功能需求..."
              disabled={isRunning}
              rows={1}
              className="relative max-h-[160px] min-h-[52px] w-full resize-none rounded-2xl border border-[#334155]/80 bg-[#1e293b]/90 px-4 py-3.5 text-[14px] leading-relaxed text-[#f1f5f9] shadow-lg shadow-black/20 transition-all duration-200 outline-none placeholder:text-[#64748b] focus:border-[#3b82f6]/50 focus:bg-[#1e293b] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08),0_8px_32px_-8px_rgba(0,0,0,0.5)] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={isRunning || !input.trim()}
            className="group/btn relative flex h-[52px] w-[52px] flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] active:scale-95 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] transition-all duration-200 group-hover/btn:brightness-110 group-disabled/btn:brightness-75" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30" />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] opacity-0 blur-xl transition-all duration-300 group-hover/btn:opacity-40 group-hover/btn:blur-2xl" />
            <svg className="relative z-10 h-5 w-5 text-white transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-disabled/btn:translate-x-0 group-disabled/btn:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-[#475569]">
          按 Enter 发送 · Shift + Enter 换行
        </p>
      </div>
    </section>
  );
};
