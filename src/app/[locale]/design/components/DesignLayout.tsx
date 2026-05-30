'use client';

import type { ChatMessage } from '../lib/types';
import type { ChatPanelHandle } from './ChatPanel';
import type { AgentInstance, LlmMessage } from '@/libs/agent-sdk';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createAgent } from '@/libs/agent-sdk';
import { getProject, updateProjectState } from '@/libs/db/projects';
import { useRouter } from '@/libs/i18n/navigation';
import ResizableLayout from '../../../../components/ResizableLayout';
import { getApiKey, getBaseUrl, getModel } from '../../design/lib/model-config';
import { ChatPanel } from './ChatPanel';
import { FilePanel } from './FilePanel';
import { Header } from './Header';
import { PreviewPanel } from './PreviewPanel';

function getAgentConfig() {
  if (typeof window === 'undefined') {
    return { apiKey: '', baseUrl: '', model: '' };
  }
  const baseUrl = getBaseUrl();
  return {
    apiKey: getApiKey(baseUrl),
    baseUrl: baseUrl || 'https://open.bigmodel.cn/api/paas/v4',
    model: getModel(),
  };
}

export function DesignLayout() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const router = useRouter();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [initialConversation, setInitialConversation] = useState<LlmMessage[]>([]);
  const [agent, setAgent] = useState<AgentInstance | null>(null);
  const prevProjectIdRef = useRef<string | null>(null);
  const currentProjectIdRef = useRef<string | null>(null);
  const chatPanelRef = useRef<ChatPanelHandle>(null);
  const agentRef = useRef<AgentInstance | null>(null);

  useEffect(() => {
    const config = getAgentConfig();
    const instance = createAgent(config);
    agentRef.current = instance;
    setAgent(instance);
  }, []);

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

    agentRef.current?.fileStore.clear();
    setMessages([]);
    setActiveFile(null);
    setInitialConversation([]);

    getProject(projectId).then((project) => {
      if (!project) {
        return;
      }

      const { state, requirement } = project;

      if (state.files.length > 0) {
        agentRef.current?.fileStore.setFiles(state.files);
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
        files: agentRef.current?.fileStore.getAllFiles() ?? [],
        activeFile,
        conversation: chatPanelRef.current?.getConversation() ?? [],
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [messages, activeFile]);

  const handleSelectFile = useCallback((path: string) => {
    setActiveFile(path);
  }, []);

  if (!agent) {
    return null;
  }

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
          agent={agent}
          messages={messages}
          setMessages={setMessages}
          setActiveFile={setActiveFile}
          initialConversation={initialConversation}
        />
        <FilePanel
          activeFile={activeFile}
          fileStore={agent.fileStore}
          onSelectFile={handleSelectFile}
        />
        <PreviewPanel activeFile={activeFile} fileStore={agent.fileStore} />
      </ResizableLayout>
    </div>
  );
}
