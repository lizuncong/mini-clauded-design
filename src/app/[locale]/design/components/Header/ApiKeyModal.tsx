'use client';

import { useState } from 'react';
import { getApiKey, hasApiKey, setApiKey } from '../../lib/llm';

export function ApiKeyModal() {
  const isConnected = hasApiKey();
  const [isOpen, setIsOpen] = useState(false);
  const [keyInput, setKeyInput] = useState(() => getApiKey());

  const handleOpen = () => {
    setKeyInput(getApiKey());
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setApiKey(keyInput.trim());
    handleClose();
  };

  const handleCancel = () => {
    setKeyInput(getApiKey());
    handleClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  return (
    <>
      <div className="flex items-center gap-2.5">
        <button
          onClick={handleOpen}
          className="cursor-pointer rounded-md border border-[#334466] bg-transparent px-3.5 py-1.5 text-xs text-[#aaa] transition-all duration-150 outline-none hover:border-[#8bb4f9] hover:text-[#8bb4f9]"
        >
          API Key
        </button>
        <div
          className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-200 ${isConnected ? 'bg-[#7ec699]' : 'bg-[#f56c6c]'}`}
          title={isConnected ? '已连接' : '未连接'}
        />
      </div>

      {isOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/75"
          onClick={handleBackdropClick}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              handleCancel();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal
            aria-label="设置 API Key"
            tabIndex={-1}
            className="w-[480px] max-w-[90vw] rounded-xl border border-solid border-[#334466] bg-[#1a2744] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <h2 className="mb-2.5 text-base font-semibold text-[#e0e0e0]">设置智谱 AI API Key</h2>
            <p className="mb-3.5 text-xs leading-relaxed text-[#888]">
              请输入你的智谱 AI API Key。前往
              {' '}
              <a
                href="https://open.bigmodel.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8bb4f9] underline transition-colors hover:text-[#a0c4ff]"
              >
                open.bigmodel.cn
              </a>
              {' '}
              注册并获取。Key 将保存在浏览器本地存储中。
            </p>
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleConfirm();
                }
              }}
              placeholder="请输入 API Key..."
              className="w-full rounded-md border border-solid border-[#334466] bg-[#0f1929] px-3 py-2.5 text-[13px] text-[#e0e0e0] transition-colors outline-none focus:border-[#8bb4f9]"
            />
            <div className="mt-4.5 flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="cursor-pointer rounded-md border-none bg-[#334466] px-4.5 py-1.75 text-[13px] text-[#ccc] transition-colors outline-none hover:bg-[#445577]"
              >
                取消
              </button>
              <button
                onClick={handleConfirm}
                className="cursor-pointer rounded-md border-none bg-[#8bb4f9] px-4.5 py-1.75 text-[13px] font-bold text-[#1a1a2e] transition-colors outline-none hover:bg-[#a0c4ff]"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
