'use client';

import type { ChatMessage, LlmMessage } from '../lib/types';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getProject, updateProjectState } from '@/libs/db/projects';
import { useRouter } from '@/libs/i18n/navigation';
import ResizableLayout from '../../../../components/ResizableLayout';
import { runAgent } from '../lib/agent';
import { fileStore } from '../lib/file-store';
import { ChatPanel } from './ChatPanel';
import { FilePanel } from './FilePanel';
import { Header } from './Header';
import { PreviewPanel } from './PreviewPanel';

let msgIdCounter = 0;

function generateId(): string {
  return `msg-${Date.now()}-${String(++msgIdCounter).padStart(4, '0')}`;
}

export function DesignLayout() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const router = useRouter();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const conversationRef = useRef<LlmMessage[]>([]);
  const prevProjectIdRef = useRef<string | null>(null);
  const currentProjectIdRef = useRef<string | null>(null);
  const handleSendRef = useRef<(input: string) => Promise<void> | undefined>(undefined);

  useEffect(() => {
    if (!projectId) {
      router.replace('/');
    }
  }, [projectId, router]);

  const addMessage = useCallback((msg: ChatMessage) => {
    setMessages(prev => [...prev, msg]);
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
    [isRunning, addMessage, updateLastStreaming, finalizeStream],
  );

  useEffect(() => {
    handleSendRef.current = handleSend;
  });

  useEffect(() => {
    if (!projectId || projectId === prevProjectIdRef.current) {
      return;
    }
    currentProjectIdRef.current = projectId;

    fileStore.clear();
    setMessages([]);
    setActiveFile(null);
    conversationRef.current = [];

    getProject(projectId).then((project) => {
      if (!project) {
        return;
      }

      const { state, requirement } = project;

      if (state.files.length > 0) {
        fileStore.setFiles(state.files);
      }

      if (state.messages.length > 0) {
        setMessages(state.messages);
        if (state.activeFile) {
          setActiveFile(state.activeFile);
        }
      } else {
        handleSendRef.current?.(requirement);
      }
    });
  }, [projectId]);

  useEffect(() => {
    if (!currentProjectIdRef.current) {
      return;
    }
    const timer = setTimeout(() => {
      updateProjectState(currentProjectIdRef.current!, {
        messages,
        files: fileStore.getAllFiles(),
        activeFile,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [messages, activeFile]);

  const handleSelectFile = useCallback((path: string) => {
    setActiveFile(path === activeFile ? null : path);
  }, [activeFile]);

  return (
    <div className="design-scrollbar flex h-screen flex-col overflow-hidden bg-[#1a1a2e] font-mono text-[#e0e0e0]">
      <Header />

      <ResizableLayout
        defaultSizes={[420, 260, 500]}
        minSizes={[200, 150, 100]}
        maxSizes={[600, 400, Infinity]}
        style={{ flex: 1, overflow: 'hidden' }}
      >
        <ChatPanel
          messages={messages}
          onSend={handleSend}
          isRunning={isRunning}
        />
        <FilePanel
          activeFile={activeFile}
          onSelectFile={handleSelectFile}
        />
        <PreviewPanel activeFile={activeFile} />
      </ResizableLayout>
    </div>
  );
}
