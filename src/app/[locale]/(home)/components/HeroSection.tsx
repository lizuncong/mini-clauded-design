'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createProject } from '@/libs/db/projects';
import { useRouter } from '@/libs/i18n/navigation';
import { hasApiKey } from '../../design/lib/model-config';

export function HeroSection() {
  const router = useRouter();
  const [requirement, setRequirement] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [showSettingHint, setShowSettingHint] = useState(false);

  const handleGenerate = async () => {
    if (!requirement.trim()) {
      return;
    }

    if (!hasApiKey()) {
      setShowSettingHint(true);
      return;
    }

    setShowSettingHint(false);
    setIsCreating(true);
    try {
      const project = await createProject(requirement.trim());
      router.push(`/design?projectId=${project.id}`);
    } catch (error) {
      console.error('创建项目失败:', error);
      setIsCreating(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-[#e0e0e0]">
        创造你的下一个设计项目
      </h2>
      <p className="mb-8 text-center text-sm text-[#888]">
        描述你的需求，AI 将帮你完成设计和开发
      </p>
      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <textarea
          value={requirement}
          onChange={(e) => {
            setRequirement(e.target.value);
            if (showSettingHint) {
              setShowSettingHint(false);
            }
          }}
          placeholder="描述你的需求... 例如：帮我创建一个用户登录页面，包含用户名、密码输入框和登录按钮"
          className="h-32 w-full resize-none rounded-lg border border-[#334466] bg-[#1a2744] px-4 py-3 text-sm text-[#e0e0e0] placeholder:text-[#666] focus:border-[#8bb4f9] focus:outline-none"
        />
        {showSettingHint && (
          <div className="flex items-center gap-2 rounded-lg border border-[#f59e0b]/30 bg-[#f59e0b]/5 px-4 py-2.5 text-xs text-[#f59e0b]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            请先在
            <Link
              href="/settings"
              className="font-medium text-[#8bb4f9] underline transition-colors hover:text-[#a0c4ff]"
            >
              设置页
            </Link>
            配置 API Key 和模型
          </div>
        )}
        <button
          onClick={handleGenerate}
          disabled={!requirement.trim() || isCreating}
          className="cursor-pointer rounded-lg bg-[#059669] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#047857] disabled:cursor-not-allowed disabled:bg-[#334466] disabled:text-[#888]"
        >
          {isCreating ? '创建中...' : '开始生成'}
        </button>
      </div>
    </section>
  );
}
