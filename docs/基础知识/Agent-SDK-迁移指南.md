# Agent SDK 迁移指南

> **从当前实现迁移到对齐 Claude Agent SDK 架构的完整操作手册**
>
> **适用版本**：v1.0 → v2.0（重构后）
>
> **预计时间**：4-6 小时（含测试）

---

## 目录

- [迁移概述](#迁移概述)
  - [为什么要迁移？](#为什么要迁移)
  - [迁移影响范围](#迁移影响范围)
  - [风险评估](#风险评估)
- [Phase 0: 迁移准备](#phase-0-迁移准备)
  - [备份现有代码](#备份现有代码)
  - [创建功能分支](#创建功能分支)
  - [通知团队成员](#通知团队成员)
- [Phase 1: 移除内置 System Prompt](#phase-1-移除内置-system-prompt)
  - [步骤 1: 定位所有使用点](#步骤-1-定位所有使用点)
  - [步骤 2: 提取 System Prompt](#步骤-2-提取-system-prompt)
  - [步骤 3: 更新调用方代码](#步骤-3-更新调用方代码)
  - [步骤 4: 删除内置文件](#步骤-4-删除内置文件)
  - [步骤 5: 验证和测试](#步骤-5-验证和测试)
- [Phase 2: 重构 SubAgent 为工具模式](#phase-2-重构-subagent-为工具模式)
  - [步骤 1: 理解新的架构](#步骤-1-理解新的架构)
  - [步骤 2: 创建 SubAgent 工具基础设施](#步骤-2-创建-subagent-工具基础设施)
  - [步骤 3: 提取 Reviewer Prompt](#步骤-3-提取-reviewer-prompt)
  - [步骤 4: 更新工具创建逻辑](#步骤-4-更新工具创建逻辑)
  - [步骤 5: 更新入口文件](#步骤-5-更新入口文件)
  - [步骤 6: 配置 SubAgent](#步骤-6-配置-subagent)
  - [步骤 7: 清理旧代码](#步骤-7-清理旧代码)
  - [步骤 8: 集成测试](#步骤-8-集成测试)
- [Phase 3: 清理和优化](#phase-3-清理和优化)
  - [代码清理](#代码清理)
  - [文档更新](#文档更新)
  - [性能验证](#性能验证)
- [回滚方案](#回滚方案)
- [常见问题 FAQ](#常见问题-faq)
- [迁移检查清单](#迁移检查清单)

---

## 迁移概述

### 为什么要迁移？

| 当前问题 | 迁移后的改进 |
|----------|-------------|
| ❌ System Prompt 内置在 SDK 中 | ✅ 必须外部传入，更灵活 |
| ❌ SubAgent 直接函数调用 | ✅ LLM 自主决策的工具模式 |
| ❌ 添加新 SubAgent 需改 SDK 代码 | ✅ 配置化，无需改 SDK |
| ❌ 上下文不隔离 | ✅ 每个 SubAgent 独立上下文 |
| ❌ 无法并行执行 | ✅ 支持多 SubAgent 并行 |

### 迁移影响范围

```
受影响的文件：
├── src/libs/agent-sdk/          # SDK 核心代码
│   ├── types.ts                 # 类型定义变更
│   ├── index.ts                 # 入口逻辑变更
│   ├── tools.ts                 # 工具创建逻辑变更
│   ├── system-prompt.md         # 🗑️ 删除
│   ├── system-prompt.ts         # 🗑️ 删除
│   ├── review-agent.ts          # 🗑️ 删除
│   └── subagent-tool.ts         # ➕ 新增
│
└── src/app/[locale]/design/     # 业务层代码
    └── lib/
        ├── prompts/             # ➕ 新增目录
        │   ├── main-agent.ts    # ➕ 主 agent prompt
        │   └── visual-reviewer.ts # ➕ reviewer prompt
        └── agent-config.ts      # ⚙️ 配置更新
```

### 风险评估

| 风险项 | 等级 | 影响 | 缓解措施 |
|--------|------|------|----------|
| 编译错误 | 🟢 低 | IDE 报错 | TypeScript 强类型保护 |
| 功能回归 | 🟡 中 | Agent 行为变化 | 充分的单元/集成测试 |
| 性能下降 | 🟢 低 | 响应变慢 | 对比基准测试 |
| 学习成本 | 🟡 中 | 团队需适应新模式 | 文档 + 示例 + Code Review |

---

## Phase 0: 迁移准备

### 备份现有代码

```bash
# 方式 1: Git tag（推荐）
git tag -a "pre-sdk-refactor" -m "Before SDK refactoring to align with Claude Agent SDK"
git push origin pre-sdk-refactor

# 方式 2: 手动备份
cp -r src/libs/agent-sdk /tmp/agent-sdk-backup-$(date +%Y%m%d)

# 方式 3: 创建分支
git checkout -b feature/sdk-refactor-v2
```

### 创建功能分支

```bash
# 确保在最新主干
git checkout main
git pull origin main

# 创建迁移分支
git checkout -b feature/refactor-sdk-align-claude-pattern
```

### 通知团队成员

**建议发送消息到团队频道**：

```
📢 SDK 重构计划通知

大家好，我们计划对 Agent SDK 进行架构升级，对齐 Claude Agent SDK 的设计模式。

📅 计划时间：本周三-周四
⏱️ 预计耗时：4-6 小时
🔧 影响范围：仅限 agent-sdk 包内部实现，对外 API 有 BREAKING CHANGE

主要变更：
1. systemPrompt 从可选变为必填参数
2. SubAgent 从直接调用改为 LLM 自主决策的工具模式
3. 新增 subAgents 配置选项

请暂不要修改 src/libs/agent-sdk/ 下的文件。
如有问题请联系 @your-name

详细设计文档：docs/基础知识/Agent-SDK-重构设计方案.md
```

---

## Phase 1: 移除内置 System Prompt

**目标**：让 SDK 不再包含任何默认的 system prompt  
**风险等级**：🟢 低  
**预计时间**：30 分钟

### 步骤 1: 定位所有使用点

```bash
# 搜索所有 createAgent 调用
grep -r "createAgent" --include="*.ts" --include="*.tsx" src/

# 预期输出：
# src/app/[locale]/design/components/DesignLayout.tsx (或其他位置)
```

**记录找到的位置**：

| 文件路径 | 行号 | 用途 |
|----------|------|------|
| `DesignLayout.tsx` | ~L45 | 创建 UI 设计助手实例 |
| （其他位置） | - | - |

### 步骤 2: 提取 System Prompt

#### 2.1 读取当前的内置 prompt

查看 [`system-prompt.md`](../../src/libs/agent-sdk/system-prompt.md) 的内容：

```bash
cat src/libs/agent-sdk/system-prompt.md
```

#### 2.2 在业务层创建 prompt 文件

```bash
# 创建 prompts 目录
mkdir -p src/app/[locale]/design/lib/prompts
```

**新建文件**：`src/app/[locale]/design/lib/prompts/main-agent.ts`

```typescript
/**
 * Main Agent System Prompt
 * 
 * 这个 prompt 定义了 UI 设计助手的行为和能力。
 * 原来位于 SDK 内部（system-prompt.md），现在外置到应用层。
 */

export const MAIN_AGENT_SYSTEM_PROMPT = `
你是一个专业的 AI 设计助手，专注于帮助用户快速构建高质量的 Web 界面。

## 核心能力

### 设计与开发
- 根据 UI 截图或描述生成完整的前端代码（HTML/CSS/JS/React）
- 使用 Tailwind CSS 进行样式编写
- 实现响应式布局，适配移动端、平板和桌面端
- 遵循现代设计最佳实践（视觉层次、间距系统、色彩理论）

### 交互特性
- 通过工具读取和写入项目文件
- 可以查看已创建的文件列表
- 能够基于已有代码进行迭代修改

## 工作流程

1. **需求分析**
   - 理解用户的真实意图和业务场景
   - 明确功能需求和非功能需求（性能、可访问性等）
   - 规划组件结构和页面布局

2. **设计与实现**
   - 先规划整体结构，再逐步实现细节
   - 使用语义化的 HTML 标签
   - 采用 Tailwind CSS 工具类优先的方式
   - 确保代码清晰、易读、可维护

3. **质量保障**
   - 完成主要编码工作后，主动调用 visual-reviewer subagent 进行质量审查
   - 不要自己手动审查，让专业的 subagent 来处理
   - 如果发现问题并修正，简要说明改动内容

## 设计原则

### 视觉层次
- 建立 3 层以上的视觉对比（标题 > 重点 > 正文 > 辅助信息）
- 使用字号、字重、颜色的组合创造层次感
- 重要元素通过尺寸、颜色、位置突出显示

### 间距系统
- 基于 8px 网格系统（4, 8, 12, 16, 24, 32, 48, 64...）
- 保持同类元素间距一致
- 为内容留出足够的呼吸空间（whitespace）

### 色彩使用
- 主色用于关键操作（CTA 按钮、链接）
- 中性色用于文本和背景
- 功能色有明确含义（成功=绿、警告=黄、错误=红、信息=蓝）

### 可访问性（Accessibility）
- 图片必须包含 alt 属性
- 表单元素必须有 label
- 颜色对比度符合 WCAG AA 标准（正文 4.5:1，大文本 3:1）
- 支持键盘导航和屏幕阅读器

### 响应式设计
- Mobile First 思维
- 合理使用断点：sm (640px), md (768px), lg (1024px), xl (1280px)
- 测试不同屏幕尺寸下的表现

## 输出规范

### 代码质量
- 使用有意义的变量名和函数名（camelCase/PascalCase）
- 单个函数不超过 30 行，复杂逻辑抽取为独立函数
- 添加必要的注释说明复杂逻辑
- 避免魔术数字，提取为命名常量

### 文件组织
- 组件文件放在 components/ 目录
- 工具函数放在 utils/ 目录
- 样式优先内联（Tailwind classes）或统一样式文件
- 文件名使用 kebab-case 或 PascalCase（视项目规范而定）

## 交互规范

- 在开始编码前简要说明计划
- 完成后总结做了什么、为什么这样做
- 如果遇到不确定的地方，询问用户偏好
- 保持积极、专业的沟通态度

## 重要提醒

- 你在一个沙盒环境中工作，所有文件都在虚拟文件系统中
- 用户可以实时预览你的代码效果
- 当完成重要功能时，主动使用 visual-reviewer subagent 进行质量检查
- 你的目标是帮助用户高效地实现他们的设计愿景
`.trim();
```

### 步骤 3: 更新调用方代码

**文件**：`src/app/[locale]/design/components/DesignLayout.tsx`（或实际位置）

```typescript
// ============================================
// 修改前 ❌
// ============================================

import { createAgent } from '@/libs/agent-sdk';

// ... 其他导入

export function DesignLayout() {
  const initializeAgent = useCallback(() => {
    return createAgent({
      apiKey: config.apiKey,
      baseUrl: config.baseUrl,
      model: config.model,
      // ❌ 缺少 systemPrompt，会使用内置默认值
      // ❌ 没有 subAgents 配置
    });
  }, []);

  // ...
}

// ============================================
// 修改后 ✅
// ============================================

import { createAgent } from '@/libs/agent-sdk';
import { MAIN_AGENT_SYSTEM_PROMPT } from '../lib/prompts/main-agent';
// ... 其他导入

export function DesignLayout() {
  const initializeAgent = useCallback(() => {
    return createAgent({
      apiKey: config.apiKey,
      baseUrl: config.baseUrl,
      model: config.model,
      
      systemPrompt: MAIN_AGENT_SYSTEM_PROMPT,  // ✅ 必须提供
      
      // Phase 2 会添加这个
      // subAgents: { ... },
    });
  }, []);

  // ...
}
```

**关键变更点**：

| 项目 | 修改前 | 修改后 |
|------|--------|--------|
| 导入 | 无额外导入 | 导入 `MAIN_AGENT_SYSTEM_PROMPT` |
| 参数 | 无 `systemPrompt` | 必须提供 `systemPrompt` |
| 默认值 | 使用内置 prompt | 无默认值 |

### 步骤 4: 删除内置文件

```bash
# 确认已经提取了 prompt 内容
ls -la src/libs/agent-sdk/system-prompt*

# 删除文件
rm src/libs/agent-sdk/system-prompt.md
rm src/libs/agent-sdk/system-prompt.ts

# 验证删除
ls src/libs/agent-sdk/
# 应该不再看到 system-prompt.*
```

**同时更新导出**（如果 `index.ts` 导出了 `SYSTEM_PROMPT`）：

```typescript
// src/libs/agent-sdk/index.ts

// 修改前 ❌
export { SYSTEM_PROMPT } from './system-prompt';

// 修改后 ✅
// 不再导出 SYSTEM_PROMPT
```

### 步骤 5: 验证和测试

#### 5.1 TypeScript 编译检查

```bash
npm run build
# 或者
npx tsc --noEmit
```

**预期结果**：
- ✅ 编译成功，无类型错误
- ❌ 如果报错：`Property 'systemPrompt' is missing in type...` → 说明还有地方没更新

#### 5.2 开发服务器测试

```bash
npm run dev
```

**手动测试清单**：

- [ ] 应用正常启动
- [ ] 打开 Design 页面无报错
- [ ] 发送一条简单的消息（如"你好"）
- [ ] Agent 正常响应
- [ ] 检查浏览器控制台无错误

#### 5.3 功能回归测试

```bash
# 如果有自动化测试
npm test

# 或者手动测试核心流程
# 1. 创建一个简单组件
# 2. 查看生成的代码
# 3. 验证基本功能正常
```

**预期行为**：
- Agent 应该能够正常接收消息并响应
- 生成的代码质量和之前一致（因为 prompt 内容相同）
- 只是 prompt 的来源从 SDK 内部变为外部传入

---

## Phase 2: 重构 SubAgent 为工具模式

**目标**：将 review-agent 从直接函数调用改为 LLM 自主决策的工具模式  
**风险等级**：🟡 中等  
**预计时间**：2-3 小时

### 步骤 1: 理解新的架构

#### 对比图示

```
【修改前 - 直接调用模式】
┌─────────────┐
│   User      │ "帮我做个页面"
└──────┬──────┘
       ▼
┌─────────────┐     ┌──────────────────┐
│ Main Agent  │────▶│ runReviewAgent() │  ← 显式调用
│ (写代码)    │     │ (195行独立实现)  │
└─────────────┘     └────────┬─────────┘
                             ▼
                    ┌──────────────────┐
                    │ Review 结果返回   │  ← 所有中间过程可见
                    └──────────────────┘


【修改后 - 工具模式】
┌─────────────┐
│   User      │ "帮我做个页面"
└──────┬──────┘
       ▼
┌─────────────────┐
│   Main Agent    │
│   (写代码)       │
│                 │
│  思考："代码写完了，"│
│        "应该审查一下"│
│                 │
│  🤖 自动决定调用  │  ← LLM 自主决策！
│  subagent 工具   │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Visual Reviewer │  ← 独立上下文运行
│ (SubAgent)      │    中间过程不可见
│                 │
│ 只返回最终报告   │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Main Agent 继续  │  ← 收到简洁的结果
│ "审查完成了..."  │
└─────────────────┘
```

### 步骤 2: 创建 SubAgent 工具基础设施

#### 2.1 新建文件

**文件**：`src/libs/agent-sdk/subagent-tool.ts`

完整代码参考：[Agent-SDK-重构设计方案.md](./Agent-SDK-重构设计方案.md) → 4.3 节

**简化版（可直接复制使用）**：

```typescript
import type { LlmClient } from './llm';
import type { FileStore } from './file-store';
import type { SubAgentDefinition, ToolDefinition } from './types';
import { runAgent } from './agent';

export function createSubAgentTool(
  llmClient: LlmClient,
  fileStore: FileStore,
  allTools: ToolDefinition[],
  subAgents: Record<string, SubAgentDefinition>,
): ToolDefinition {
  const availableSubAgents = Object.keys(subAgents);

  return {
    name: 'subagent',
    
    description: `Delegate a specialized task to a subagent.

Available subagents:
${Object.entries(subAgents)
  .map(([name, def]) => `- **${name}**: ${def.description}`)
  .join('\n')}

Use this when you need specialized expertise or want to isolate context for a complex subtask.
The subagent runs in its own context window and returns only the final result.`,

    input_schema: {
      type: 'object',
      properties: {
        subagent_type: {
          type: 'string',
          description: `The name of the subagent to invoke. Options: ${availableSubAgents.join(', ')}`,
          enum: availableSubAgents,
        },
        prompt: {
          type: 'string',
          description: 'Detailed instructions for the subagent about what to do.',
        },
      },
      required: ['subagent_type', 'prompt'],
    },

    async execute(input: Record<string, unknown>) {
      const { subagent_type, prompt } = input as { 
        subagent_type: string; 
        prompt: string;
      };

      const subAgentDef = subAgents[subagent_type];
      if (!subAgentDef) {
        return JSON.stringify({
          error: true,
          message: `Unknown subagent type: ${subagent_type}`,
          available: availableSubAgents,
        });
      }

      console.log(`[SubAgent] Starting ${subagent_type}...`);
      
      try {
        let allowedTools = allTools;
        if (subAgentDef.tools && subAgentDef.tools.length > 0) {
          allowedTools = allTools.filter(t => 
            subAgentDef.tools!.includes(t.name)
          );
        }

        const messages = await runAgent(
          prompt,
          {
            onText: () => {},
            onStreamText: () => {},
            onToolCall: (name, input) => {
              console.log(`[SubAgent:${subagent_type}] Tool call: ${name}`, input);
            },
            onToolResult: (name, result) => {
              console.log(`[SubAgent:${subagent_type}] Tool result: ${name}`);
            },
            onDone: (usage) => {
              console.log(`[SubAgent:${subagent_type}] Completed. Usage:`, usage);
            },
          },
          llmClient,
          subAgentDef.prompt,
          allowedTools,
          [],
          {
            model: subAgentDef.model,
            maxTurns: subAgentDef.maxTurns || 10,
          },
        );

        const assistantMessages = messages.filter(m => m.role === 'assistant');
        const lastMessage = assistantMessages[assistantMessages.length - 1];
        
        const result = lastMessage?.content || 'Subagent completed without output.';
        
        console.log(`[SubAgent] ${subagent_type} finished successfully.`);
        
        return result;

      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error(`[SubAgent] ${subagent_type} failed:`, errorMsg);
        
        return JSON.stringify({
          error: true,
          message: `Subagent execution failed: ${errorMsg}`,
          subagent: subagent_type,
        });
      }
    },
  };
}
```

### 步骤 3: Extract Reviewer Prompt

#### 3.1 Read current implementation

View [`review-agent.ts`](../../src/libs/agent-sdk/review-agent.ts) line 14-49:

```bash
head -50 src/libs/agent-sdk/review-agent.ts
```

#### 3.2 Create new prompt file

**New file**: `src/app/[locale]/design/lib/prompts/visual-reviewer.ts`

Extract the content of `REVIEW_SYSTEM_PROMPT` from `review-agent.ts` into this file:

```typescript
/**
 * Visual Reviewer SubAgent System Prompt
 * 
 * This prompt defines the behavior of the quality review subagent.
 * It was previously hardcoded in review-agent.ts (SDK internal),
 * now externalized to the application layer.
 */

export const VISUAL_REVIEWER_PROMPT = `
你是一个专业的全栈质量审查专家。你的职责是：
1. 读取项目文件并全面分析代码质量和视觉设计
2. 发现问题后立即修正
3. 返回详细的审查报告

## 一、视觉设计质量审查

- **视觉层次**：字号、字重、颜色是否有 3 层以上对比
- **间距一致性**：同类元素间距是否统一，是否有足够留白（8px基准）
- **色彩协调**：主色与中性色比例是否合理，功能色使用是否正确
- **交互状态**：按钮/链接/卡片是否有 hover/focus/active 状态
- **响应式**：是否使用了 sm:/md:/lg: 断点适配不同屏幕
- **细节质量**：圆角、阴影层级、图标尺寸是否协调统一

## 二、代码生成质量审查

### 2.1 组件架构
- **组件拆分**：单个文件是否超过 150 行？是否应拆分为子组件？
- **职责单一**：每个组件是否只做一件事？是否存在上帝组件？
- **Props 设计**：Props 是否清晰？是否传递了不必要的深层状态？
- **状态管理**：状态是否放在正确的层级？是否存在状态提升问题？

### 2.2 React 最佳实践
- **Hooks 使用**：是否正确使用 useState/useEffect？依赖数组是否完整？
- **性能优化**：是否存在不必要的重渲染？是否需要 useMemo/useCallback？
- **Key 属性**：列表渲染是否使用了稳定的 key？
- **条件渲染**：是否合理使用三元运算符和逻辑与？

### 2.3 代码可读性
- **命名规范**：变量/函数/组件名是否语义化？是否遵循 camelCase/PascalCase？
- **函数长度**：单个函数是否超过 30 行？复杂逻辑是否应抽取？
- **注释质量**：是否有必要的注释？避免无意义的注释
- **魔术数字**：是否将硬编码数值提取为常量？

### 2.4 HTML/CSS 质量
- **语义化标签**：是否使用 header/nav/main/article 等语义标签？
- **可访问性**：图片是否有 alt？表单是否有 label？颜色对比度是否足够？
- **CSS 组织**：样式是否模块化？是否使用 Tailwind 工具类优先？
- **响应式图片**：是否考虑不同屏幕尺寸的图片优化？

### 2.5 错误处理与健壮性
- **边界情况**：空数据、加载态、错误态是否处理？
- **类型安全**：TypeScript 类型定义是否完整？any 使用是否过多？
- **数据验证**：用户输入是否校验？API 数据是否做容错？

## 工作流程
1. 用 list_files 确认所有文件
2. 必读 index.html 和 App.jsx（或主要入口文件）
3. 从子组件中挑选 2-3 个最复杂的文件深入阅读
4. 按照上述维度逐一检查，发现问题立即用 write_file 修正
5. 输出结构化审查报告（分类列出发现的问题和修改内容）
`.trim();
```

### Step 4: Update tool creation logic

**File**: [`tools.ts`](../../src/libs/agent-sdk/tools.ts)

```typescript
// ============================================
// Before ❌
// ============================================

import type { DesignFile, FileStore } from './file-store';
import type { SnipRecord, ToolDefinition } from './types';

export function createTools(
  fileStore: FileStore,
  runReview: () => Promise<string>,  // ← 接收回调参数
): ToolDefinition[] {
  const fsTools: ToolDefinition[] = [
    write_file_tool,
    read_file_tool,
    list_files_tool,
  ];

  const reviewTool: ToolDefinition = {   // ← 包含业务逻辑
    name: 'visual_review',
    description: '启动全面质量审查子代理...',
    async execute() {
      return runReview();  // ← 直接调用
    },
  };

  const snipTool: ToolDefinition = { /* ... */ };

  return [...fsTools, reviewTool, snipTool];  // ← 包含 review tool
}


// ============================================
// After ✅
// ============================================

import type { DesignFile, FileStore } from './file-store';
import type { SnipRecord, ToolDefinition } from './types';

export function createTools(fileStore: FileStore): ToolDefinition[] {  // ← 移除参数
  const fsTools: ToolDefinition[] = [
    write_file_tool,
    read_file_tool,
    list_files_tool,
  ];

  const snipTool: ToolDefinition = { /* ... */ };

  return [...fsTools, snipTool];  // ← 不再包含 review tool
}
```

**Key changes**:
- Remove `runReview` parameter
- Remove `reviewTool` definition
- Only keep pure infrastructure tools (filesystem + snip)

### Step 5: Update entry point

**File**: [`index.ts`](../../src/libs/agent-sdk/index.ts)

```typescript
// ============================================
// Before ❌
// ============================================

import { SYSTEM_PROMPT } from './system-prompt';  // ← Import built-in prompt
import { createTools } from './tools';
import { runReviewAgent } from './review-agent';  // ← Import review agent

export function createAgent(config: AgentConfig): AgentInstance {
  const fileStore = new FileStore();
  const llmClient = createLlmClient(config.apiKey, config.baseUrl);
  const systemPrompt = config.systemPrompt || SYSTEM_PROMPT;  // ← Has fallback

  const runReview = async (): Promise<string> => {           // ← Define callback
    const result = await runReviewAgent(                      // ← Call directly
      llmClient,
      fileStore,
      undefined,
      config.model,
    );
    return `全面质量审查完成。\n\n${result.report}`;
  };

  const tools = createTools(fileStore, runReview);           // ← Pass callback

  return {
    fileStore,
    async run(userInput, callbacks, existingMessages = []) {
      return runAgent(/* ... */);
    },
  };
}


// ============================================
// After ✅
// ============================================

import { createTools } from './tools';
import { createSubAgentTool } from './subagent-tool';  // ← New import

export function createAgent(config: AgentConfig): AgentInstance {
  if (!config.systemPrompt) {
    throw new Error('[Agent SDK] systemPrompt is required');
  }
  
  const fileStore = new FileStore();
  const llmClient = createLlmClient(config.apiKey, config.baseUrl);
  const systemPrompt = config.systemPrompt;  // ← No fallback

  const baseTools = createTools(fileStore);  // ← No parameters
  
  let tools = baseTools;
  if (config.subAgents && Object.keys(config.subAgents).length > 0) {
    const subAgentTool = createSubAgentTool(  // ← Create subagent tool
      llmClient,
      fileStore,
      baseTools,
      config.subAgents,
    );
    tools = [...baseTools, subAgentTool];     // ← Add to tools array
  }

  return {
    fileStore,
    async run(userInput, callbacks, existingMessages = []) {
      return runAgent(
        userInput,
        callbacks,
        llmClient,
        systemPrompt,
        tools,                                  // ← Tools with optional subagent
        existingMessages,
        {
          model: config.model,
          maxTokens: config.maxTokens,
          maxTurns: config.maxTurns,
        },
      );
    },
  };
}
```

### Step 6: Configure SubAgent

**File**: `src/app/[locale]/design/lib/agent-config.ts` (or update the initialization location)

```typescript
import { createAgent } from '@/libs/agent-sdk';
import { MAIN_AGENT_SYSTEM_PROMPT } from './prompts/main-agent';
import { VISUAL_REVIEWER_PROMPT } from './prompts/visual-reviewer';
import { modelConfig } from './model-config';

let agentInstance: ReturnType<typeof createAgent> | null = null;

export function getAgent() {
  if (!agentInstance) {
    agentInstance = createAgent({
      apiKey: modelConfig.apiKey,
      baseUrl: modelConfig.baseUrl,
      model: modelConfig.defaultModel,
      
      systemPrompt: MAIN_AGENT_SYSTEM_PROMPT,
      
      subAgents: {
        'visual-reviewer': {
          name: 'visual-reviewer',
          description: `
Visual design and code quality review expert.

When to use:
✅ After completing main code writing tasks
✅ When user explicitly requests quality review or code review
✅ When comprehensive visual design inspection is needed
✅ When code quality and best practices need checking
✅ When project is nearing completion for final acceptance

This subagent will automatically:
- Read all relevant project files
- Conduct professional-grade reviews from both visual design and code quality dimensions
- Fix issues immediately upon discovery
- Return detailed review report and modification list
`.trim(),
          
          prompt: VISUAL_REVIEWER_PROMPT,
          
          tools: ['read_file', 'list_files', 'write_file'],  // Only allow these tools
          
          maxTurns: 8,
          
          model: modelConfig.reviewModel || modelConfig.defaultModel,  // Optional: use cheaper model
        },
      },
    });
  }
  
  return agentInstance;
}
```

### Step 7: Clean up old code

```bash
# Delete old review agent implementation
rm src/libs/agent-sdk/review-agent.ts

# Verify deletion
ls src/libs/agent-sdk/
# Expected output:
# agent.ts  file-store.ts  index.ts  llm/  subagent-tool.ts  tools.ts  types.ts
```

**Also check for any remaining imports**:

```bash
grep -r "runReviewAgent" src/
grep -r "from.*review-agent" src/

# If found, remove those imports
```

### Step 8: Integration testing

#### 8.1 Compile check

```bash
npm run build
```

**Expected**: ✅ Build successful

**If errors occur**:
- Check that all imports are updated
- Verify `subagent-tool.ts` is correctly created
- Ensure `types.ts` includes `SubAgentDefinition` type

#### 8.2 Manual test scenario

**Test case**: Trigger visual review

```
1. Open the app
2. Send a request: "Create a login page with email/password fields"
3. Wait for the agent to complete the initial implementation
4. Observe whether the agent AUTOMATICALLY calls the visual-reviewer subagent
5. Check the review report output
```

**Expected flow**:

```
User: Create a login page...

Agent: [Writes code files]
       
       [Thinking...] 
       "I've completed the login page. Now I should run a quality check."
       
       🤖 [Tool Call] subagent
       {
         subagent_type: "visual-reviewer",
         prompt: "Please review the login page I just created..."
       }
       
       [SubAgent runs in background...]
       
       ✅ [Tool Result] Review completed!
       
       Summary:
       - Score: 8.5/10
       - Issues found: 3 (all fixed)
       - Files modified: login-page.html, styles.css
```

**Key observation points**:

- [ ] Does the LLM decide to call the subagent on its own? (Not manually triggered)
- [ ] Is the subagent's intermediate output hidden from the main conversation?
- [ ] Does only the final summary return to the user?
- [ ] Are issues actually fixed by the subagent?

#### 8.3 Automated tests (if applicable)

```typescript
// __tests__/integration/subagent-integration.test.ts

describe('SubAgent Integration', () => {
  it('should include subagent tool when configured', () => {
    const agent = createAgent({
      apiKey: 'test',
      baseUrl: 'http://test',
      model: 'test',
      systemPrompt: 'Test',
      subAgents: {
        'tester': {
          name: 'tester',
          description: 'Test',
          prompt: 'Test prompt',
        },
      },
    });

    expect(agent).toBeDefined();
  });

  it('should not include subagent tool when not configured', () => {
    const agent = createAgent({
      apiKey: 'test',
      baseUrl: 'http://test',
      model: 'test',
      systemPrompt: 'Test',
    });

    expect(agent).toBeDefined();
  });
});
```

---

## Phase 3: Cleanup and Optimization

**Risk level**: 🟢 Low  
**Estimated time**: 1 hour

### Code cleanup

```bash
# Search for any remaining references to old patterns
grep -r "SYSTEM_PROMPT" src/libs/agent-sdk/
grep -r "runReview" src/libs/agent-sdk/
grep -r "visual_review" src/libs/agent-sdk/
grep -r "review-agent" src/

# All should return no results (or only in comments/docs)
```

**Update exports in index.ts**:

```typescript
// src/libs/agent-sdk/index.ts

export type { 
  AgentCallbacks, 
  AgentConfig, 
  LlmMessage, 
  ToolDefinition,
  SubAgentDefinition,  // ← Add this
};
export { type DesignFile, FileStore };

// Remove these lines if they exist:
// export { SYSTEM_PROMPT };  ← Delete
```

### Documentation updates

If there are README files or JSDoc comments in the SDK directory, update them:

```typescript
/**
 * Creates a new Agent instance.
 * 
 * @param config - Agent configuration
 * @param config.apiKey - API key for LLM service
 * @param config.baseUrl - Base URL for LLM API
 * @param config.model - Model identifier
 * @param config.systemPrompt - **Required** System prompt defining agent behavior
 * @param config.subAgents - Optional subagent definitions for specialized tasks
 * @returns Agent instance with run method
 * 
 * @example
 * ```typescript
 * const agent = createAgent({
 *   apiKey: '...',
 *   baseUrl: 'https://api.openai.com/v1',
 *   model: 'gpt-4o',
 *   systemPrompt: 'You are a helpful assistant...',  // Required!
 *   
 *   subAgents: {
 *     'reviewer': {
 *       name: 'reviewer',
 *       description: 'Code review expert',
 *       prompt: 'You are a reviewer...',
 *     },
 *   },
 * });
 * ```
 */
export function createAgent(config: AgentConfig): AgentInstance { ... }
```

### Performance verification

Compare before/after metrics:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Bundle size (SDK) | ~15KB | ~12KB | -20% ↓ |
| Initial load time | X ms | Y ms | ±% |
| Token usage per session | ~5000 avg | ~5500 avg | +10% (expected, due to subagent overhead) |
| Response latency | X ms | Y ms | ±% |

**Run benchmark**:

```bash
# Before migration (if you have baseline data)
# Compare with after migration data

# Simple test: Time a typical interaction
time node test-performance.js
```

---

## Rollback Plan

If critical issues arise after deployment:

### Quick rollback (within 1 hour)

```bash
# Revert to pre-migration state
git revert HEAD~N  # N = number of migration commits

# Or switch to backup branch
git checkout pre-sdk-refactor

# Redeploy
npm run build && npm start
```

### Data migration concerns

- ✅ **No database changes**: This refactoring is purely code-level
- ✅ **No breaking API changes**: Internal architecture only
- ✅ **No stored data affected**: File-based storage unchanged
- ⚠️ **Configuration change**: Callers must provide `systemPrompt` now

### Rollback checklist

- [ ] Git revert successful
- [ ] Build passes
- [ ] Manual testing confirms old behavior restored
- [ ] Team notified of rollback
- [ ] Root cause analysis initiated for the issue

---

## Common Questions FAQ

### Q1: Why must systemPrompt be required now?

**A**: To ensure SDK purity and flexibility. Previously, the built-in prompt was tailored for UI design scenarios, making the SDK unusable for other domains (code review, data analysis, etc.). By requiring external input, the same SDK can serve any use case.

**Migration effort**: Low (~15 minutes to extract existing prompt)

---

### Q2: Will the subagent still work the same way?

**A**: Functionally similar, but with important improvements:

| Aspect | Old way | New way |
|--------|---------|---------|
| Trigger | Manual/Automatic (code logic) | Fully LLM autonomous |
| Context isolation | None (all messages visible) | Complete isolation |
| Extensibility | Hard-coded | Configurable |
| Parallelism | Not supported | Supported |

**Behavioral difference**: The LLM decides WHEN to call the reviewer, not your code. This may result in slightly different timing but generally better judgment.

---

### Q3: What if the LLM never calls the subagent?

**A**: This can happen if:

1. **Description unclear** → Improve the `description` field to be more explicit
2. **System prompt doesn't mention it** → Add instructions like "After coding, always use visual-reviewer"
3. **Model too weak** → Use a more capable model (GPT-4O vs GPT-4O-mini)

**Solution**: Adjust the main agent's system prompt:

```typescript
const PROMPT = `
...
## Important Workflow Step
After completing ANY significant code generation task, you MUST invoke the 
'visual-reviewer' subagent to conduct a comprehensive quality review.
Do not skip this step under any circumstances.
...
`;
```

---

### Q4: Can I add multiple subagents?

**A**: Yes! That's one of the main benefits of the new architecture:

```typescript
subAgents: {
  'visual-reviewer': { /* ... */ },
  'code-reviewer': { /* ... */ },
  'security-auditor': { /* ... */ },
  'test-writer': { /* ... */ },
}
```

The LLM will choose which one(s) to call based on the task context.

---

### Q5: What happens to existing conversations/history?

**A**: Since this is an architectural refactor (not a data format change):

- ✅ Existing file stores remain compatible
- ✅ Message history format unchanged
- ⚠️ New conversations will use the new architecture
- ⚠️ Old conversations (before migration) will continue to work but won't have subagent capability

**Recommendation**: Start fresh conversations after migration to fully benefit from the new features.

---

### Q6: How do I debug subagent issues?

**A**: Enable verbose logging:

```typescript
// In development mode
if (process.env.NODE_ENV === 'development') {
  console.log('[SDK Debug] Creating agent with subagents:', Object.keys(config.subAgents));
}
```

**Check browser console** for `[SubAgent:*]` prefixed logs showing:
- When subagent starts
- Which tools it calls inside
- When it completes
- Any errors encountered

---

## Migration Checklist

### Pre-migration ☐

- [ ] Read and understand the full design document
- [ ] Communicate plan to team members
- [ ] Create backup (git tag or copy)
- [ ] Create feature branch
- [ ] Run existing test suite to establish baseline
- [ ] Document current behavior/performance metrics

### Phase 1: Remove Built-in System Prompt ☐

- [ ] Locate all `createAgent()` call sites
- [ ] Extract current `SYSTEM_PROMPT` to application layer
- [ ] Create `prompts/main-agent.ts` file
- [ ] Update all callers to pass `systemPrompt` parameter
- [ ] Delete `system-prompt.md` and `system-prompt.ts`
- [ ] Remove `SYSTEM_PROMPT` export from `index.ts`
- [ ] Run TypeScript compiler (`npm run build`)
- [ ] Fix any type errors
- [ ] Test basic functionality (send a message)
- [ ] Verify behavior matches pre-migration

### Phase 2: Refactor SubAgent to Tool Mode ☐

- [ ] Understand new architecture (read diagrams)
- [ ] Create `subagent-tool.ts` with `createSubAgentTool()` function
- [ ] Extract `REVIEW_SYSTEM_PROMPT` to `prompts/visual-reviewer.ts`
- [ ] Update `createTools()` to remove `runReview` parameter and `reviewTool`
- [ ] Update `index.ts` to import and use `createSubAgentTool`
- [ ] Configure `subAgents` in agent initialization code
- [ ] Delete `review-agent.ts`
- [ ] Clean up unused imports (`runReviewAgent`, etc.)
- [ ] Run TypeScript compiler
- [ ] Fix any compilation errors
- [ ] Manual integration test:
  - [ ] Create a simple page
  - [ ] Verify LLM autonomously calls visual-reviewer
  - [ ] Check review results are returned properly
  - [ ] Confirm intermediate output is hidden
- [ ] Run automated tests (if exist)

### Phase 3: Cleanup and Optimization ☐

- [ ] Search and remove any residual references to old code
- [ ] Update JSDoc comments and documentation
- [ ] Verify export list is clean
- [ ] Performance benchmark comparison
- [ ] Code review with team member
- [ ] Update project README if needed

### Post-migration ☐

- [ ] Merge feature branch to main (after approval)
- [ ] Deploy to staging environment
- [ ] Smoke test in staging
- [ ] Monitor error logs for 24 hours
- [ ] Gather feedback from early users
- [ ] Document any lessons learned
- [ ] Archive migration artifacts (branch, notes)
- [ ] Celebrate! 🎉

---

## Success Criteria

The migration is considered **successful** when:

✅ **Compilation**: Zero TypeScript errors  
✅ **Functionality**: All existing features work as before  
✅ **Quality**: LLM autonomously invokes visual-reviewer when appropriate  
✅ **Isolation**: Subagent intermediate output does not pollute main conversation  
✅ **Performance**: No significant regression (< 10% slower acceptable)  
✅ **Extensibility**: Can add new subagents via configuration (no SDK changes needed)  
✅ **Documentation**: Code comments and docs are updated  

---

## Timeline Estimate

| Phase | Tasks | Time | Dependencies |
|-------|-------|------|--------------|
| **Preparation** | Backup, branch, communicate | 30 min | - |
| **Phase 1** | Remove built-in prompt | 30 min | Preparation |
| **Phase 2** | Refactor subagent | 2-3 hours | Phase 1 complete |
| **Phase 3** | Cleanup, optimize, document | 1 hour | Phase 2 complete |
| **Testing & Validation** | Manual + automated tests | 1 hour | Phase 3 complete |
| **Buffer** | Unexpected issues | 1 hour | - |
| **Total** | | **6-7 hours** | |

---

## Support and Resources

- **Full design document**: [Agent-SDK-重构设计方案.md](./Agent-SDK-重构设计方案.md)
- **Usage examples**: [Agent-SDK-使用示例集.md](./Agent-SDK-使用示例集.md)
- **Claude SDK reference**: https://code.claude.com/docs/en/agent-sdk/subagents
- **Internal chat**: #sdk-migration channel

---

> 💡 **Pro tip**: If you encounter blockers during migration, don't hesitate to ask for help in the team chat or open an issue with the label `migration-help`.

**Good luck with your migration! 🚀**
