'use client';

import type { ModelOption } from '../design/lib/types';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  getApiKey,
  getBaseUrl,
  getModel,
  MODEL_LIST,
  setApiKey,
  setBaseUrl,
  setModel,
} from '../design/lib/model-config';

const BASE_URL_OPTIONS = [
  {
    label: '智谱 AI (ZhipuAI)',
    value: 'https://open.bigmodel.cn/api/paas/v4',
  },
  {
    label: 'OpenAI',
    value: 'https://api.openai.com/v1',
  },
  {
    label: '自定义 URL',
    value: '',
  },
];

export default function SettingsPage() {
  const [apiKey, setApiKeyState] = useState('');
  const [baseUrl, setBaseUrlState] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [keyVisible, setKeyVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const currentBaseUrl = getBaseUrl();
    setBaseUrlState(currentBaseUrl);
    setSelectedModel(getModel());
    setApiKeyState(getApiKey(currentBaseUrl));
    setMounted(true);
  }, []);

  const handleApiKeyChange = useCallback((value: string) => {
    setApiKeyState(value);
    setApiKey(value.trim());
  }, []);

  const handleBaseUrlChange = useCallback((value: string) => {
    const oldBaseUrl = baseUrl;
    setBaseUrlState(value);
    setBaseUrl(value.trim());

    if (value.trim() !== oldBaseUrl) {
      const newApiKey = getApiKey(value.trim());
      setApiKeyState(newApiKey);
    }
  }, [baseUrl]);

  const handleModelSelect = useCallback((modelId: string) => {
    setSelectedModel(modelId);
    setModel(modelId);
  }, []);

  const currentModel = MODEL_LIST.find(m => m.id === selectedModel);

  return (
    <div className="design-scrollbar flex h-screen flex-col overflow-y-auto bg-[#1a1a2e] font-mono text-[#e0e0e0]">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-[#2a2a4a] bg-[#0f1929] px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 text-xs text-[#888] transition-colors hover:text-[#e0e0e0]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            返回
          </Link>
          <div className="h-5 w-px bg-[#334466]" />
          <h1 className="text-sm font-bold tracking-tight">
            <span className="text-[#8bb4f9]">设置</span>
          </h1>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl space-y-8 px-6 py-8">
        <section>
          <h2 className="mb-4 text-sm font-semibold text-[#8bb4f9]">API 配置</h2>
          <div className="space-y-4 rounded-lg border border-[#2a2a4a] bg-[#0f1929] p-5">
            <div>
              <label htmlFor="base-url" className="mb-1.5 block text-xs text-[#888]">Base URL</label>
              <select
                id="base-url"
                value={BASE_URL_OPTIONS.find(o => o.value === baseUrl) ? baseUrl : (baseUrl ? 'custom' : '')}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    handleBaseUrlChange('');
                  } else {
                    handleBaseUrlChange(e.target.value);
                  }
                }}
                className="w-full rounded-md border border-solid border-[#334466] bg-[#1a2744] px-3 py-2 text-xs text-[#e0e0e0] transition-colors outline-none focus:border-[#8bb4f9]"
              >
                {BASE_URL_OPTIONS.map(option => (
                  <option key={option.value || 'custom'} value={option.value || 'custom'}>
                    {option.label}
                    {option.value ? ` - ${option.value}` : ''}
                  </option>
                ))}
              </select>
              {mounted && (!baseUrl || !BASE_URL_OPTIONS.find(o => o.value === baseUrl)) && (
                <input
                  type="text"
                  value={!BASE_URL_OPTIONS.find(o => o.value === baseUrl) ? baseUrl : ''}
                  onChange={e => handleBaseUrlChange(e.target.value)}
                  placeholder="请输入自定义 Base URL..."
                  className="mt-2 w-full rounded-md border border-solid border-[#334466] bg-[#1a2744] px-3 py-2 text-xs text-[#e0e0e0] transition-colors outline-none focus:border-[#8bb4f9]"
                />
              )}
              <p className="mt-1 text-[11px] text-[#666]">
                包含
                {' '}
                <code className="rounded bg-[#1a2744] px-1 py-0.5">/chat/completions</code>
                {' '}
                的完整路径会自动识别为 OpenAI 兼容接口，否则作为 Anthropic 兼容处理
              </p>
            </div>
            <div>
              <label htmlFor="api-key" className="mb-1.5 block text-xs text-[#888]">API Key</label>
              <div className="relative">
                <input
                  id="api-key"
                  type="text"
                  value={apiKey}
                  onChange={e => handleApiKeyChange(e.target.value)}
                  placeholder="请输入 API Key..."
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  className="w-full rounded-md border border-solid border-[#334466] bg-[#1a2744] py-2 pr-10 pl-3 text-xs text-[#e0e0e0] transition-colors outline-none focus:border-[#8bb4f9]"
                />
                <button
                  onClick={() => setKeyVisible(!keyVisible)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[#888] transition-colors hover:text-[#e0e0e0]"
                  title={keyVisible ? '隐藏' : '显示'}
                >
                  {keyVisible
                    ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )
                    : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                </button>
              </div>
              <p className="mt-1 text-[11px] text-[#666]">
                Key 将保存在浏览器本地存储中，不会上传到服务器
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#8bb4f9]">模型选择</h2>
            {currentModel && (
              <span className="rounded-md border border-[#334466] bg-[#0f1929] px-2.5 py-1 text-[11px] text-[#888]">
                当前：
                <span className="text-[#8bb4f9]">{currentModel.label}</span>
              </span>
            )}
          </div>
          <div className="overflow-hidden rounded-lg border border-[#2a2a4a]">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#2a2a4a] bg-[#0d1525]">
                  <th className="px-4 py-2.5 text-left font-medium text-[#888]">模型名称</th>
                  <th className="hidden px-4 py-2.5 text-left font-medium text-[#888] md:table-cell">描述</th>
                  <th className="px-4 py-2.5 text-center font-medium text-[#888]">上下文</th>
                  <th className="px-4 py-2.5 text-center font-medium text-[#888]">最大输出</th>
                  <th className="px-4 py-2.5 text-center font-medium text-[#888]">操作</th>
                </tr>
              </thead>
              <tbody>
                {MODEL_LIST.map((model: ModelOption) => {
                  const isSelected = model.id === selectedModel;
                  return (
                    <tr
                      key={model.id}
                      className={`border-b border-[#1e2d4a] transition-colors ${
                        isSelected
                          ? 'bg-[#1a2744]'
                          : 'bg-[#0f1929] hover:bg-[#141f33]'
                      }`}
                    >
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${isSelected ? 'text-[#8bb4f9]' : 'text-[#e0e0e0]'}`}>
                            {model.label}
                          </span>
                          {model.free && (
                            <span className="rounded border border-[#7ec699]/30 bg-[#7ec699]/10 px-1 py-0.5 text-[10px] text-[#7ec699]">
                              免费
                            </span>
                          )}
                          <span className="text-[11px] text-[#666] md:hidden">{model.desc}</span>
                        </div>
                      </td>
                      <td className="hidden px-4 py-2.5 text-[#888] md:table-cell">{model.desc}</td>
                      <td className="px-4 py-2.5 text-center text-[#aaa]">{model.context || '—'}</td>
                      <td className="px-4 py-2.5 text-center text-[#aaa]">{model.output || '—'}</td>
                      <td className="px-4 py-2.5 text-center">
                        <button
                          onClick={() => handleModelSelect(model.id)}
                          className={`cursor-pointer rounded-md border px-3 py-1 text-[11px] transition-all duration-150 outline-none ${
                            isSelected
                              ? 'border-[#8bb4f9] bg-[#8bb4f9]/10 text-[#8bb4f9]'
                              : 'border-[#334466] bg-transparent text-[#888] hover:border-[#8bb4f9] hover:text-[#8bb4f9]'
                          }`}
                        >
                          {isSelected ? '已选择' : '选择'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
