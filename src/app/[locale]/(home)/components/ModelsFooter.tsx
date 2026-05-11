'use client';

import { MODEL_LIST } from '../../design/lib/constants';

export function ModelsFooter() {
  return (
    <footer className="border-t border-[#2a2a4a] px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-4 text-center text-sm font-medium text-[#888]">
          支持的模型
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MODEL_LIST.map((model) => {
            return (
              <div
                key={model.id}
                className="rounded-lg border border-[#334466] bg-[#1a2744] p-3"
              >
                <div className="mb-1 text-sm font-medium text-[#e0e0e0]">
                  {model.label}
                </div>
                <div className="text-xs text-[#666]">
                  {model.id}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 rounded-lg border border-[#334466] bg-[#1a2744] p-4">
          <p className="mb-3 text-xs leading-relaxed text-[#888]">
            我正在智谱大模型开放平台 BigModel.cn 上打造 AI 应用，智谱新一代旗舰模型 GLM-5 已上线，在推理、代码、智能体综合能力达到开源模型 SOTA 水平，通过我的邀请链接注册即可获得 2000 万 Tokens 大礼包，期待和你一起在 BigModel 上畅享卓越模型能力：
          </p>
          <a
            href="https://www.bigmodel.cn/invite?icode=bd9BFQh%2BZyy3SF8%2FpibGeHHEaazDlIZGj9HxftzTbt4%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8bb4f9] hover:text-[#a8c8ff] hover:underline"
          >
            点击注册领取大礼包
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-[#555]">
          所有模型由智谱 AI (Zhipu AI) 提供支持
        </p>
      </div>
    </footer>
  );
}
