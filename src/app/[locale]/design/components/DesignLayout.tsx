'use client';

import type { ChatMessage, LlmMessage } from '../lib/types';
import type { ChatPanelHandle } from './ChatPanel';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getProject, updateProjectState } from '@/libs/db/projects';
import { useRouter } from '@/libs/i18n/navigation';
import ResizableLayout from '../../../../components/ResizableLayout';
import { fileStore } from '../lib/file-store';
import { ChatPanel } from './ChatPanel';
import { FilePanel } from './FilePanel';
import { Header } from './Header';
import { PreviewPanel } from './PreviewPanel';

export function DesignLayout() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const router = useRouter();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [initialConversation, setInitialConversation] = useState<LlmMessage[]>([]);
  const prevProjectIdRef = useRef<string | null>(null);
  const currentProjectIdRef = useRef<string | null>(null);
  const chatPanelRef = useRef<ChatPanelHandle>(null);

  useEffect(() => {
    if (!projectId) {
      router.replace('/');
    }
  }, [projectId, router]);

  useEffect(() => {
    if (!projectId || projectId === prevProjectIdRef.current) {
      return;
    }
    currentProjectIdRef.current = projectId;

    fileStore.clear();
    setMessages([]);
    setActiveFile(null);
    setInitialConversation([]);

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
        setInitialConversation(state.conversation ?? []);
        if (state.activeFile) {
          setActiveFile(state.activeFile);
        }
      } else {
        chatPanelRef.current?.onSend(requirement);
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
        conversation: chatPanelRef.current?.getConversation() ?? [],
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [messages, activeFile]);

  const handleSelectFile = useCallback((path: string) => {
    setActiveFile(path);
  }, []);

  const handleTogglePreview = useCallback(() => {
    setShowPreview(p => !p);
  }, []);

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
          ref={chatPanelRef}
          messages={messages}
          setMessages={setMessages}
          setActiveFile={setActiveFile}
          initialConversation={initialConversation}
        />
        <FilePanel
          activeFile={activeFile}
          onSelectFile={handleSelectFile}
          onTogglePreview={handleTogglePreview}
          showPreview={showPreview}
        />
        <PreviewPanel activeFile={activeFile} showPreview={showPreview} />
      </ResizableLayout>
    </div>
  );
}
