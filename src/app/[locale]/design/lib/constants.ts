import type { ModelOption } from './types';

export const MODEL_LIST: ModelOption[] = [
  { id: 'glm-4.7-flash', label: 'GLM-4.7-Flash', free: true, context: '200K', output: '128K', desc: '免费模型' },
  { id: 'glm-4.5-flash', label: 'GLM-4.5-Flash', free: true, context: '128K', output: '96K', desc: '免费模型（即将下线）' },
  { id: 'glm-4-flash-250414', label: 'GLM-4-Flash-250414', free: true, context: '128K', output: '16K', desc: '免费模型' },
  { id: 'glm-4.6v-flash', label: 'GLM-4.6V-Flash', free: true, context: '128K', output: '32K', desc: '免费视觉推理' },
  { id: 'glm-4v-flash', label: 'GLM-4V-Flash', free: true, context: '16K', output: '1K', desc: '免费图像理解' },
  { id: 'glm-5.1', label: 'GLM-5.1', context: '200K', output: '128K', desc: '最新旗舰，开源 SOTA' },
  { id: 'glm-5', label: 'GLM-5', context: '200K', output: '128K', desc: '高智能基座' },
  { id: 'glm-5-turbo', label: 'GLM-5-Turbo', context: '200K', output: '128K', desc: '龙虾增强基座' },
  { id: 'glm-4.7', label: 'GLM-4.7', context: '200K', output: '128K', desc: '高智能模型' },
  { id: 'glm-4.7-flashx', label: 'GLM-4.7-FlashX', context: '200K', output: '128K', desc: '轻量高速' },
  { id: 'glm-4.6', label: 'GLM-4.6', context: '200K', output: '128K', desc: '超强性能' },
  { id: 'glm-4.5-air', label: 'GLM-4.5-Air', context: '128K', output: '96K', desc: '高性价比' },
  { id: 'glm-4.5-airx', label: 'GLM-4.5-AirX', context: '128K', output: '96K', desc: '高性价比-极速版' },
  { id: 'glm-4-long', label: 'GLM-4-Long', context: '1M', output: '4K', desc: '超长输入' },
  { id: 'glm-4-flashx-250414', label: 'GLM-4-FlashX-250414', context: '128K', output: '16K', desc: '高速低价' },
  { id: 'glm-5v-turbo', label: 'GLM-5V-Turbo', context: '200K', output: '128K', desc: '多模态 Coding 基座' },
  { id: 'glm-4.6v', label: 'GLM-4.6V', context: '128K', output: '32K', desc: '视觉推理' },
];

export const ZHIPU_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

export const STORAGE_KEYS = {
  API_KEY: 'zhipu_api_key',
  MODEL: 'zhipu_model',
} as const;

export const MAX_TOKENS = 96000;
export const TOKEN_PER_CHAR = 0.3;
export const MAX_TURNS = 100;
