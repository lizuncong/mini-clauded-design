'use client';

import type { ChatMessage, LlmMessage } from '../lib/types';
import { useCallback, useRef, useState } from 'react';
import { runAgent } from '../lib/agent';
import { ApiKeyModal } from './ApiKeyModal';
import { ChatPanel } from './ChatPanel';
import { FilePanel } from './FilePanel';
import { PreviewPanel } from './PreviewPanel';
import { ResizeHandle } from './ResizeHandle';
import { TopBar } from './TopBar';

let msgIdCounter = 0;

function generateId(): string {
  return `msg-${Date.now()}-${String(++msgIdCounter).padStart(4, '0')}`;
}

export function DesignLayout() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [showApiModal, setShowApiModal] = useState(false);
  const [chatWidth, setChatWidth] = useState(420);
  const [fileWidth, setFileWidth] = useState(260);
  const messagesRef = useRef<ChatMessage[]>([]);
  const conversationRef = useRef<LlmMessage[]>([]);

  const addMessage = useCallback((msg: ChatMessage) => {
    setMessages(prev => [...prev, msg]);
    messagesRef.current = [...messagesRef.current, msg];
  }, []);

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
  }, []);

  const finalizeStream = useCallback(() => {
    setMessages(prev =>
      prev.map(m => (m.isStreaming ? { ...m, isStreaming: false } : m)),
    );
  }, []);

  const handleSend = useCallback(
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

      try {
        await runAgent(input, {
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
          onToolCall(name: string, inputArgs: Record<string, unknown>) {
            finalizeStream();
            currentStreamId = '';
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
    [isRunning, addMessage, updateLastStreaming, finalizeStream],
  );

  const handleSelectFile = useCallback((path: string) => {
    setActiveFile(path === activeFile ? null : path);
  }, [activeFile]);

  const handleChatResize = useCallback((deltaX: number) => {
    setChatWidth(w => Math.max(200, w + deltaX));
  }, []);

  const handleFileResize = useCallback((deltaX: number) => {
    setFileWidth(w => Math.max(150, w + deltaX));
  }, []);

  return (
    <div className="design-scrollbar flex h-screen flex-col overflow-hidden bg-[#1a1a2e] font-mono text-[#e0e0e0]">
      <TopBar onApiKeyClick={() => setShowApiModal(true)} />

      <div className="flex flex-1 overflow-hidden">
        <div style={{ width: chatWidth, minWidth: 200 }} className="shrink-0 overflow-hidden">
          <ChatPanel
            messages={messages}
            onSend={handleSend}
            isRunning={isRunning}
          />
        </div>

        <ResizeHandle onResize={handleChatResize} />

        <div style={{ width: fileWidth, minWidth: 150 }} className="shrink-0 overflow-hidden">
          <FilePanel
            activeFile={activeFile}
            onSelectFile={handleSelectFile}
          />
        </div>

        <ResizeHandle onResize={handleFileResize} />

        <PreviewPanel activeFile={activeFile} />
      </div>

      <ApiKeyModal isOpen={showApiModal} onClose={() => setShowApiModal(false)} />

      <style jsx global>
        {`
        .design-scrollbar ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .design-scrollbar ::-webkit-scrollbar-track {
          background: transparent;
        }
        .design-scrollbar ::-webkit-scrollbar-thumb {
          background: #334455;
          border-radius: 3px;
        }
        .design-scrollbar ::-webkit-scrollbar-thumb:hover {
          background: #445566;
        }
      `}
      </style>
    </div>
  );
}
