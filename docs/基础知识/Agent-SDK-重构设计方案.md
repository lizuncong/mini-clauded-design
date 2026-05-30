# Agent SDK 重构设计方案

> **目标**：对齐 Claude Agent SDK 架构，实现 SDK 的纯粹性和通用性
>
> **日期**：2025-05-30
>
> **状态**：设计阶段

---

## 目录

- [一、设计背景与目标](#一设计背景与目标)
- [二、当前实现分析](#二当前实现分析)
  - [2.1 现有架构](#21现有架构)
  - [2.2 核心问题识别](#22核心问题识别)
- [三、Claude Agent SDK 设计模式研究](#三claude-agent-sdk-设计模式研究)
  - [3.1 System Prompt 外部化原则](#31-system-prompt-外部化原则)
  - [3.2 SubAgent 工具模式](#32-subagent-工具模式)
  - [3.3 核心优势对比](#33核心优势对比)
- [四、重构方案详细设计](#四重构方案详细设计)
  - [4.1 新架构设计](#41新架构设计)
  - [4.2 System Prompt 外部化实现](#42-system-prompt-外部化实现)
  - [4.3 SubAgent 框架实现](#43-subagent-框架实现)
  - [4.4 类型定义更新](#44类型定义更新)
- [五、使用示例](#五使用示例)
  - [5.1 基础用法](#51基础用法)
  - [5.2 带 SubAgent 的完整示例](#52带-subagent-的完整示例)
  - [5.3 多 SubAgent 并行场景](#53多-subagent-并行场景)
- [六、迁移指南](#六迁移指南)
  - [6.1 Phase 1: 移除内置 System Prompt](#61-phase-1-移除内置-system-prompt)
  - [6.2 Phase 2: 重构为 SubAgent 工具模式](#62-phase-2-重构为-subagent-工具模式)
  - [6.3 Phase 3: 清理和优化](#63-phase-3-清理和优化)
- [七、文件变更清单](#七文件变更清单)
- [八、测试策略](#八测试策略)

---

## 一、设计背景与目标

### 1.1 背景

当前 Agent SDK 实现虽然功能完整，但存在以下问题：

1. **System Prompt 内置**：业务相关的 system prompt 硬编码在 SDK 中
2. **SubAgent 实现不纯粹**：采用直接函数调用模式，而非 LLM 自主决策的工具模式
3. **可扩展性差**：添加新的 subagent 需要修改 SDK 核心代码
4. **上下文污染**：subagent 执行过程中的中间结果混入主对话

### 1.2 目标

对齐 Claude Agent SDK 的设计理念：

✅ **纯粹性**：SDK 只提供基础设施，不包含任何业务逻辑  
✅ **通用性**：同一套 SDK 可支持不同的业务场景  
✅ **智能性**：SubAgent 调用由 LLM 自主决策  
✅ **隔离性**：每个 subagent 有独立的上下文窗口  
✅ **可扩展性**：通过配置即可添加新的 subagent  

---

## 二、当前实现分析

### 2.1 现有架构

```
当前目录结构：
src/libs/agent-sdk/
├── index.ts              # 入口，createAgent()
├── agent.ts              # 核心 agent loop (170行)
├── types.ts              # 类型定义
├── tools.ts              # 工具定义和执行 (197行)
├── file-store.ts         # 文件存储抽象
├── review-agent.ts       # 审查子代理 (195行) ⚠️ 业务逻辑
├── system-prompt.md      # System prompt 内容 ⚠️ 业务逻辑
├── system-prompt.ts      # System prompt 导入 ⚠️ 业务逻辑
└── llm/
    ├── index.ts          # LLM 客户端工厂
    ├── anthropic.ts      # Anthropic API 实现
    ├── openai.ts         # OpenAI API 实现
    └── types.ts          # LLM 类型定义
```

### 2.2 核心问题识别

#### 问题 1：System Prompt 内置

**文件位置**：
- [`system-prompt.md`](../../src/libs/agent-sdk/system-prompt.md) - 业务 prompt 内容
- [`system-prompt.ts`](../../src/libs/agent-sdk/system-prompt.ts) - 导出 prompt
- [`index.ts:29`](../../src/libs/agent-sdk/index.ts#L29) - 使用默认值

```typescript
// 当前实现（❌ 不纯粹）
import { SYSTEM_PROMPT } from './system-prompt';

export function createAgent(config: AgentConfig): AgentInstance {
  const systemPrompt = config.systemPrompt || SYSTEM_PROMPT;  // 有 fallback
  // ...
}
```

**影响**：
- SDK 绑定了特定业务的 prompt
- 无法复用到其他场景（如代码审查、数据分析等）
- 违反单一职责原则

#### 问题 2：SubAgent 直接调用模式

**文件位置**：
- [`tools.ts:76-95`](../../src/libs/agent-sdk/tools.ts#L76-L95) - `visual_review` 工具定义
- [`review-agent.ts`](../../src/libs/agent-sdk/review-agent.ts) - 独立的 agent 实现（195行）

```typescript
// 当前实现（❌ 非 LLM 自主决策）
const reviewTool: ToolDefinition = {
  name: 'visual_review',
  description: '启动全面质量审查子代理...',
  async execute() {
    return runReview();  // 直接函数调用
  },
};
```

**影响**：
- 调用时机由用户或代码显式决定，非 LLM 自主判断
- 上下文不隔离：审查过程的中间消息都暴露给主对话
- 无法并行执行多个 subagent
- 添加新 subagent 需要修改 SDK 代码

---

## 三、Claude Agent SDK 设计模式研究

### 3.1 System Prompt 外部化原则

#### Claude SDK 的做法

```typescript
// Claude Agent SDK 用法
import { query } from '@anthropic-ai/claude-agent-sdk';

const response = query({
  prompt: "Review the authentication module",
  options: {
    // ✅ System prompt 必须外部传入，无默认值
    systemPrompt: "You are a security-focused code reviewer...",
    
    model: 'sonnet',
    allowedTools: ['Read', 'Grep', 'Glob'],
  }
});
```

**核心原则**：
- **SDK 不提供默认 system prompt**
- System prompt 是使用者的责任
- SDK 只负责 agent loop 和工具执行机制

### 3.2 SubAgent 工具模式

#### Claude SDK 的 SubAgent 定义方式

```typescript
// Claude Agent SDK 定义 subagents
agents: {
  'code-reviewer': {
    description: "Expert code reviewer. Use for quality, security reviews.",
    // ↑ 告诉 LLM 何时应该调用这个 subagent
    
    prompt: `You are a code review specialist with expertise in security...
    When reviewing code:
    - Identify security vulnerabilities
    - Check for performance issues...`,
    // ↑ subagent 自己的 system prompt（完全独立于主 agent）
    
    tools: ['Read', 'Grep', 'Glob'],  // 限制可用工具
    model: 'sonnet',                  // 可选模型覆盖
  },
  
  'test-runner': {
    description: "Runs and analyzes test suites.",
    prompt: "You are a test execution specialist...",
    tools: ['Bash', 'Read', 'Grep'],
  }
}
```

#### 调用机制

**LLM 自主决策流程**：

```
用户输入 → 主 Agent 收到请求
           ↓
    LLM 分析任务需求
           ↓
    根据 subagent 的 description 判断是否需要委托
           ↓
    ┌─────────────────────────────────────┐
    │  如果需要 → 自动调用 Task/Agent tool │
    │  参数: {                           │
    │    subagent_type: "code-reviewer",  │
    │    prompt: "审查 auth 模块..."      │
    │  }                                 │
    └─────────────────────────────────────┘
           ↓
    SubAgent 在独立上下文中运行
    （有自己的 system prompt + tools）
           ↓
    只返回最终结果给主 Agent
    （中间过程完全隔离）
```

**关键特性**：

| 特性 | 说明 |
|------|------|
| **自动触发** | LLM 根据 `description` 自动判断，无需人工干预 |
| **上下文隔离** | 每个 subagent 有独立的 context window |
| **工具限制** | 可以限制 subagent 只能使用特定工具 |
| **模型可选** | 不同 subagent 可以使用不同模型（如简单任务用 Haiku） |
| **可并行** | 多个 subagent 可以同时运行 |

### 3.3 核心优势对比

| 维度 | 当前实现 | Claude SDK 模式 | 改进后 |
|------|----------|-----------------|--------|
| **System Prompt** | 内置在 SDK | 外部传入 | ✅ 必须外部传入 |
| **SubAgent 调用** | 显式函数调用 | LLM 自主决策 | ✅ 工具模式 |
| **上下文管理** | 混合在一起 | 独立隔离 | ✅ 隔离 |
| **扩展性** | 改 SDK 代码 | 配置化 | ✅ 配置化 |
| **并行能力** | 不支持 | 支持 | ✅ 支持 |
| **纯粹性** | 包含业务逻辑 | 只提供基础设施 | ✅ 纯粹 |

---

## 四、重构方案详细设计

### 4.1 新架构设计

```
重构后的架构：
┌─────────────────────────────────────────────────────────────┐
│                    Agent SDK (Pure)                         │
│                                                             │
│  核心职责（只做这些）：                                        │
│  ✓ Agent Loop (消息循环、工具调度)                             │
│  ✓ Tool Execution Framework (工具执行框架)                    │
│  ✓ SubAgent Infrastructure (子代理基础设施)                   │
│  ✓ Context Management (上下文管理、snip)                     │
│                                                             │
│  绝对不包含：                                                 │
│  ✗ 业务 System Prompt                                       │
│  ✗ 特定业务逻辑                                               │
│  ✗ 默认配置                                                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
   ┌────────────┐ ┌─────────────┐ ┌────────────────┐
   │ Core Tools │ │ SubAgent    │ │ Type Definitions│
   │ (基础工具)  │ │ Tool        │ │ (类型定义)      │
   │            │ │ (工具模式)   │ │                │
   └────────────┘ └─────────────┘ └────────────────┘
                          │
          ┌───────────────┴───────────────┐
          ▼                               ▼
   ┌──────────────┐              ┌──────────────────┐
   │ 应用层代码     │              │ 业务配置          │
   │ (使用者)      │              │                  │
   │              │              │ • System Prompt  │
   │              │              │ • SubAgents 定义  │
   │              │              │ • Tools 选择      │
   └──────────────┘              └──────────────────┘
```

### 4.2 System Prompt 外部化实现

#### 修改 1：删除内置文件

**删除文件**：
- ❌ `system-prompt.md`
- ❌ `system-prompt.ts`

#### 修改 2：更新类型定义

**文件**：[`types.ts`](../../src/libs/agent-sdk/types.ts)

```typescript
// 修改前 ❌
export type AgentConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
  systemPrompt?: string;  // 可选，有默认值
  maxTokens?: number;
  temperature?: number;
  maxTurns?: number;
};

// 修改后 ✅
export type AgentConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
  systemPrompt: string;  // 必须！无默认值
  maxTokens?: number;
  temperature?: number;
  maxTurns?: number;
  subAgents?: Record<string, SubAgentDefinition>;  // 新增
};
```

#### 修改 3：更新入口文件

**文件**：[`index.ts`](../../src/libs/agent-sdk/index.ts)

```typescript
// 修改前 ❌
import { SYSTEM_PROMPT } from './system-prompt';

export function createAgent(config: AgentConfig): AgentInstance {
  const fileStore = new FileStore();
  const llmClient = createLlmClient(config.apiKey, config.baseUrl);
  const systemPrompt = config.systemPrompt || SYSTEM_PROMPT;  // 有 fallback
  
  // ... 创建 review 工具
  const runReview = async () => { /* ... */ };
  const tools = createTools(fileStore, runReview);  // 传入回调
  
  return { /* ... */ };
}

// 修改后 ✅
export function createAgent(config: AgentConfig): AgentInstance {
  if (!config.systemPrompt) {
    throw new Error('[Agent SDK] systemPrompt is required');
  }
  
  const fileStore = new FileStore();
  const llmClient = createLlmClient(config.apiKey, config.baseUrl);
  const systemPrompt = config.systemPrompt;  // 无 fallback
  
  // 只创建基础工具
  const baseTools = createTools(fileStore);
  
  // 如果有 subagents，添加 subagent 工具
  let tools = baseTools;
  if (config.subAgents && Object.keys(config.subAgents).length > 0) {
    const subAgentTool = createSubAgentTool(
      llmClient,
      fileStore,
      baseTools,
      config.subAgents,
    );
    tools = [...baseTools, subAgentTool];
  }
  
  return {
    fileStore,
    async run(userInput, callbacks, existingMessages = []) {
      return runAgent(
        userInput,
        callbacks,
        llmClient,
        systemPrompt,
        tools,
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

### 4.3 SubAgent 框架实现

#### 新增类型定义

**文件**：[`types.ts`](../../src/libs/agent-sdk/types.ts)

```typescript
/**
 * SubAgent 定义
 * 类似 Claude Agent SDK 的 AgentDefinition
 */
export type SubAgentDefinition = {
  /** 
   * Subagent 名称标识符 
   * 示例: 'visual-reviewer', 'code-reviewer'
   */
  name: string;
  
  /**
   * 描述：告诉主 agent 何时应该使用这个 subagent
   * 这是 LLM 决策的关键依据！
   * 
   * 示例: "视觉设计和代码质量审查专家。当完成主要代码编写后使用。"
   */
  description: string;
  
  /**
   * Subagent 的 System Prompt
   * 定义这个 subagent 的角色、能力和行为准则
   * 完全独立于主 agent 的 system prompt
   */
  prompt: string;
  
  /**
   * 允许使用的工具名列表
   * 如果不提供，继承父 agent 的所有工具
   * 
   * 示例: ['read_file', 'list_files', 'write_file']
   */
  tools?: string[];
  
  /**
   * 模型覆盖
   * 可以为不同 subagent 使用不同模型
   * 例如: 简单任务用 'haiku'，复杂任务用 'sonnet'
   * 
   * 如果不提供，使用父 agent 的模型
   */
  model?: string;
  
  /**
   * 最大轮次限制
   * 防止 subagent 无限循环
   * 默认值: 10
   */
  maxTurns?: number;
};
```

#### 新建 SubAgent 工具文件

**新文件**：`subagent-tool.ts`

```typescript
/**
 * SubAgent 工具实现
 * 
 * 让 LLM 可以通过工具调用方式自主决策使用 subagent
 * 对标 Claude Agent SDK 的 Task/Agent Tool
 */

import type { LlmClient } from './llm';
import type { FileStore } from './file-store';
import type { SubAgentDefinition, ToolDefinition } from './types';
import { runAgent } from './agent';

/**
 * 创建 SubAgent 工具
 * 
 * @param llmClient - LLM 客户端实例
 * @param fileStore - 文件存储实例
 * @param allTools - 所有可用的基础工具
 * @param subAgents - SubAgent 定义映射
 * @returns SubAgent 工具定义
 */
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
          description: 'Detailed instructions for the subagent about what to do. Be specific about goals, scope, and expected output format.',
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
        // 过滤允许使用的工具
        let allowedTools = allTools;
        if (subAgentDef.tools && subAgentDef.tools.length > 0) {
          allowedTools = allTools.filter(t => 
            subAgentDef.tools!.includes(t.name)
          );
          
          // 检查是否有无效的工具名
          const invalidTools = subAgentDef.tools.filter(
            toolName => !allTools.some(t => t.name === toolName)
          );
          if (invalidTools.length > 0) {
            console.warn(`[SubAgent] Warning: Invalid tools specified: ${invalidTools.join(', ')}`);
          }
        }

        // 在全新的上下文中运行 subagent
        const messages = await runAgent(
          prompt,
          {
            onText: () => {},      // 静默执行，不输出到主对话
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
          subAgentDef.prompt,  // 使用 subagent 自己的 system prompt
          allowedTools,
          [],  // 空历史，全新上下文
          {
            model: subAgentDef.model,
            maxTurns: subAgentDef.maxTurns || 10,
          },
        );

        // 提取最终结果（只返回最后一条 assistant 消息）
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

#### 修改基础工具创建

**文件**：[`tools.ts`](../../src/libs/agent-sdk/tools.ts)

```typescript
// 修改前 ❌
export function createTools(
  fileStore: FileStore,
  runReview: () => Promise<string>,  // 接收回调
): ToolDefinition[] {
  const fsTools = [...];  // 文件操作工具
  const reviewTool = { ... };  // 审查工具（包含业务逻辑）
  const snipTool = { ... };    // snip 工具
  
  return [...fsTools, reviewTool, snipTool];
}

// 修改后 ✅
export function createTools(fileStore: FileStore): ToolDefinition[] {
  // 只保留纯粹的文件操作和上下文管理工具
  const fsTools: ToolDefinition[] = [
    write_file_tool,
    read_file_tool,
    list_files_tool,
  ];
  
  const snipTool: ToolDefinition = { ... };
  
  return [...fsTools, snipTool];
  // ❌ 不再包含 visual_review 或其他业务工具
}
```

### 4.4 类型定义更新

**完整类型定义**：[`types.ts`](../../src/libs/agent-sdk/types.ts)

```typescript
export type AgentCallbacks = {
  onText: (text: string) => void;
  onStreamText: (chunk: string) => void;
  onReasoningText?: (chunk: string) => void;
  onToolCall: (name: string, input: Record<string, unknown>) => void;
  onToolResult: (name: string, result: string) => void;
  onDone: (usage: { prompt_tokens: number; completion_tokens: number }) => void;
  onSnip?: (before: number, after: number) => void;
};

export type LlmMessage = {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string | LlmContentBlock[];
  tool_calls?: LlmToolCall[];
  tool_call_id?: string;
};

export type LlmContentBlock =
  | { type: 'text'; text: string }
  | { type: 'tool_use'; id: string; name: string; input: Record<string, unknown> }
  | { type: 'tool_result'; content: string };

export type LlmToolCall = {
  id: string;
  type: 'function';
  function: { name: string; arguments: string };
};

export type ToolDefinition = {
  name: string;
  description: string;
  input_schema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<string>;
};

export type SnipRecord = { fromId: string; toId: string; reason: string };

export type SubAgentDefinition = {
  name: string;
  description: string;
  prompt: string;
  tools?: string[];
  model?: string;
  maxTurns?: number;
};

export type AgentConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
  systemPrompt: string;
  maxTokens?: number;
  temperature?: number;
  maxTurns?: number;
  subAgents?: Record<string, SubAgentDefinition>;
};
```

---

## 五、使用示例

### 5.1 基础用法

最简单的使用方式，不使用 subagent：

```typescript
import { createAgent } from '@/libs/agent-sdk';

const agent = createAgent({
  apiKey: process.env.OPENAI_API_KEY!,
  baseUrl: 'https://api.openai.com/v1',
  model: 'gpt-4o',
  
  // 必须提供 system prompt（无默认值）
  systemPrompt: `
你是一个专业的 UI/UX 设计助手。
你的职责是根据用户需求生成高质量的前端代码。

能力范围：
- HTML/CSS/JavaScript 开发
- React/Vue 组件开发
- 响应式布局设计
- Tailwind CSS 样式编写

工作流程：
1. 理解用户需求
2. 规划组件结构
3. 编写代码并保存到文件
4. 解释关键设计决策
`,
});

const messages = await agent.run('帮我做一个现代化的登录页面', {
  onText: (text) => process.stdout.write(text),
  onStreamText: (chunk) => process.stdout.write(chunk),
  onToolCall: (name, input) => console.log(`🔧 工具调用: ${name}`, input),
  onToolResult: (name, result) => console.log(`✅ 工具结果: ${name}`),
  onDone: (usage) => console.log(`\n完成! Token 使用:`, usage),
});
```

### 5.2 带 SubAgent 的完整示例

模拟当前项目的 UI 设计助手 + 质量审查场景：

```typescript
import { createAgent } from '@/libs/agent-sdk';

const agent = createAgent({
  apiKey: process.env.OPENAI_API_KEY!,
  baseUrl: 'https://api.openai.com/v1',
  model: 'gpt-4o',
  
  systemPrompt: `
你是一个专业的 UI/UX 设计助手，专注于创建高质量的 Web 界面。

## 核心职责
- 根据用户需求生成前端代码（HTML/CSS/React）
- 遵循现代设计最佳实践
- 确保代码质量和视觉一致性

## 工作流程
1. **理解需求**：明确用户的业务场景和设计要求
2. **规划结构**：规划组件层次和数据流
3. **实现代码**：编写高质量的可运行代码
4. **质量保证**：完成后使用 visual-reviewer 进行全面审查

## 设计原则
- 移动优先，响应式设计
- 清晰的视觉层次
- 一致的间距系统（8px 基准）
- 语义化的 HTML 结构
- 可访问性（a11y）支持

## 重要提示
- 当主要代码编写完成后，主动使用 visual-reviewer subagent 进行质量检查
- 不要自己手动审查，让专业的 subagent 来处理
`,
  
  // 定义 subagents
  subAgents: {
    'visual-reviewer': {
      name: 'visual-reviewer',
      description: `
视觉设计和代码质量审查专家。
当满足以下条件时使用：
- 完成了主要的代码编写工作
- 需要全面的视觉设计审查
- 需要代码质量和最佳实践检查
- 用户明确要求进行质量审查

该 subagent 会自动读取项目文件并进行专业级审查。
`.trim(),
      
      prompt: `
你是一个专业的全栈质量审查专家，专注于 Web 前端项目。

## 你的职责
1. 读取项目中的所有相关文件
2. 从多个维度进行全面审查
3. 发现问题后立即修正
4. 返回结构化的审查报告

## 一、视觉设计质量审查

### 1.1 视觉层次
- 字号、字重、颜色是否有 3 层以上对比？
- 标题、正文、辅助文本是否清晰区分？

### 1.2 间距一致性
- 同类元素间距是否统一？
- 是否遵循 8px 基准网格系统？
- 是否有足够的留白？

### 1.3 色彩协调
- 主色与中性色比例是否合理？
- 功能色（成功、警告、错误）使用是否正确？
- 对比度是否符合 WCAG 标准？

### 1.4 交互状态
- 按钮/链接是否有 hover/focus/active 状态？
- 表单元素是否有清晰的反馈？
- 加载态、错误态是否处理？

### 1.5 响应式适配
- 是否使用了合理的断点（sm/md/lg）？
- 移动端体验是否良好？
- 图片和媒体是否响应式？

## 二、代码生成质量审查

### 2.1 组件架构
- 单个文件是否超过 150 行？是否需要拆分？
- 每个组件是否只做一件事？（单一职责）
- Props 设计是否清晰？是否传递了不必要的深层状态？
- 状态管理是否放在正确的层级？

### 2.2 React 最佳实践（如适用）
- Hooks 使用是否正确？依赖数组是否完整？
- 是否存在不必要的重渲染？需要 useMemo/useCallback 吗？
- 列表渲染是否使用了稳定的 key？
- 条件渲染是否合理？

### 2.3 代码可读性
- 变量/函数/组件命名是否语义化？
- 单个函数是否超过 30 行？复杂逻辑是否抽取？
- 是否有必要的注释？避免无意义的注释
- 是否存在魔术数字？应提取为常量

### 2.4 HTML/CSS 质量
- 是否使用语义化标签（header/nav/main/article）？
- 图片是否有 alt？表单是否有 label？
- CSS 是否模块化？是否使用 Tailwind 工具类优先？
- 是否考虑了可访问性（a11y）？

### 2.5 错误处理与健壮性
- 空数据、加载态、错误态是否处理？
- TypeScript 类型定义是否完整？any 使用是否过多？
- 用户输入是否校验？API 数据是否容错？

## 工作流程
1. 使用 list_files 了解项目结构
2. 读取主要入口文件（index.html、App.jsx 或等效文件）
3. 从子组件中挑选 2-3 个最复杂的文件深入阅读
4. 按照上述维度逐一检查
5. 发现问题立即用 write_file 修正
6. 输出结构化审查报告

## 输出格式
\`\`\`
## 审查总结
- 总体评分：X/10
- 主要问题数：N 个
- 已修正问题：M 个

## 发现的问题
### 问题 1：[类别]
- **位置**：文件路径:行号
- **描述**：问题描述
- **严重程度**：高/中/低
- **修正措施**：如何修复的（如果已修复）

## 修改的文件列表
- file1.jsx
- file2.css
...
\`\`\`
`.trim(),
      
      tools: ['read_file', 'list_files', 'write_file'],  // 只允许这些工具
      maxTurns: 8,  // 最多 8 轮
      // model: 'gpt-4o-mini',  // 可选：用更便宜的模型
    },
  },
});

console.log('=== 开始设计会话 ===\n');

const messages = await agent.run(`
帮我设计一个 SaaS 产品的定价页面，要求：

功能需求：
- 展示 3 个定价方案（Basic/Pro/Enterprise）
- 每个方案显示价格、功能列表、CTA 按钮
- Pro 方案需要突出显示（推荐标签）
- 响应式设计（移动端堆叠，桌面端并列）

设计风格：
- 现代、简洁、专业
- 使用渐变色作为背景
- 卡片式布局，带有微妙的阴影
- 清晰的视觉层次
`, {
  onText: (text) => process.stdout.write(text),
  onStreamText: (chunk) => process.stdout.write(chunk),
  onToolCall: (name, input) => {
    if (name === 'subagent') {
      console.log('\n🤖 [SubAgent 调用]', input);
    } else {
      console.log(`\n🔧 [工具] ${name}`, input.path || '');
    }
  },
  onToolResult: (name, result) => {
    if (name === 'subagent') {
      console.log('\n✅ [SubAgent 完成]\n');
      console.log(result.substring(0, 500) + '...');
    } else {
      console.log(`  ✓ ${name} 完成`);
    }
  },
  onDone: (usage) => {
    console.log(`\n\n=== 会话结束 ===`);
    console.log(`Token 使用: ${JSON.stringify(usage, null, 2)}`);
  },
});
```

**预期输出流程**：

```
=== 开始设计会话 ===

[Turn 1] 我来帮你设计一个专业的 SaaS 定价页面...

🔧 [工具] write_file → index.html
  ✓ write_file 完成

🔧 [工具] write_file → styles.css
  ✓ write_file 完成

[Turn 2] 现在让我启动质量审查...

🤖 [SubAgent 调用] {
  subagent_type: "visual-reviewer",
  prompt: "请对这个 SaaS 定价页面进行全面的质量审查..."
}

✅ [SubAgent 完成]
{
  ## 审查总结
  - 总体评分：8.5/10
  - 主要问题数：3 个
  - 已修正问题：3 个
  
  ## 发现的问题
  ### 问题 1：可访问性
  - **位置**：index.html:45
  - **描述**：价格数字缺少 aria-label
  - **严重程度**：中
  - **修正措施**：已添加 aria-label="月费 $XX"
  ...
}

[Turn 3] 质量审查已完成！我发现了 3 个小问题并已全部修正：

1. ✅ 为价格添加了无障碍标签
2. ✅ 优化了移动端的间距
3. ✅ 修正了 CTA 按钮的颜色对比度

所有文件已更新，页面现在符合专业标准！

=== 会话结束 ===
Token 使用: {"prompt_tokens": 12345, "completion_tokens": 6789}
```

### 5.3 多 SubAgent 并行场景

更高级的使用场景，定义多个专业 subagent：

```typescript
const agent = createAgent({
  apiKey: process.env.OPENAI_API_KEY!,
  baseUrl: 'https://api.openai.com/v1',
  model: 'gpt-4o',
  
  systemPrompt: `
你是一个全栈开发项目负责人。
你的任务是协调各个专业领域的工作，确保项目高质量交付。

当遇到以下情况时，委派给对应的 subagent：
- 需要审查代码质量 → code-reviewer
- 需要写测试用例 → test-writer
- 需要性能优化 → performance-expert
- 需要安全审计 → security-auditor
`,
  
  subAgents: {
    'code-reviewer': {
      name: 'code-reviewer',
      description: '代码质量审查专家。检查代码规范、最佳实践、可维护性。',
      prompt: '你是一个严格的代码审查员...\n\n审查重点：\n- 代码规范性\n- 设计模式使用\n- 错误处理\n- ...',
      tools: ['read_file', 'list_files'],
      model: 'gpt-4o-mini',  // 简单任务用便宜模型
    },
    
    'test-writer': {
      name: 'test-writer',
      description: '测试用例编写专家。根据代码自动生成单元测试和集成测试。',
      prompt: '你是一个测试工程师...\n\n测试策略：\n- 单元测试覆盖率 > 80%\n- 边界情况测试\n- Mock 外部依赖\n- ...',
      tools: ['read_file', 'write_file', 'list_files'],
    },
    
    'performance-expert': {
      name: 'performance-expert',
      description: '性能优化专家。分析和优化代码性能瓶颈。',
      prompt: '你是一个性能优化顾问...\n\n优化方向：\n- 渲染性能\n- Bundle 大小\n- API 请求优化\n- ...',
      tools: ['read_file', 'write_file', 'list_files'],
    },
    
    'security-auditor': {
      name: 'security-auditor',
      description: '安全审计专家。检查安全漏洞和合规性问题。',
      prompt: '你是一个安全专家...\n\n审计重点：\n- XSS/CSRF 防护\n- 输入验证\n- 认证授权\n- 数据加密\n- ...',
      tools: ['read_file', 'list_files'],  // 只读权限
    },
  },
});

await agent.run('完成用户认证模块的开发，并进行全面的质量保障', callbacks);
```

**LLM 可能的自主决策流程**：

```
用户: 完成用户认证模块的开发，并进行全面的质量保障

主 Agent 思考:
"这是一个复杂的任务，涉及开发和多个维度的质量保障。
我应该：
1. 先完成核心功能开发
2. 然后依次调用各个专业 subagent"

[执行开发...]

[Turn N] 开发完成，现在启动质量保障流程...

🤖 调用 code-reviewer: "审查 auth 模块的代码质量"
   ↓
   ✅ Code Review 完成，发现 2 个问题已修正

🤖 调用 test-writer: "为 auth 模块编写单元测试"
   ↓
   ✅ 测试已完成，覆盖率 92%

🤂 调用 security-auditor: "审计认证模块的安全性"
   ↓
   ✅ 安全审计通过，发现 1 个中等风险已修复

[返回主 Agent]
"所有质量保障步骤已完成！"
```

---

## 六、迁移指南

### 6.1 Phase 1: 移除内置 System Prompt

**风险等级**：🟢 低  
**预计时间**：30 分钟

#### 步骤 1：备份现有配置

```bash
# 复制现有的 system prompt 内容备用
cp src/libs/agent-sdk/system-prompt.md /tmp/system-prompt-backup.md
```

#### 步骤 2：找到所有使用 SDK 的地方

```bash
# 搜索所有 createAgent 调用
grep -r "createAgent" --include="*.ts" --include="*.tsx" src/
```

预期会在以下位置找到：
- `src/app/[locale]/design/components/DesignLayout.tsx` 或类似位置

#### 步骤 3：更新调用方代码

```typescript
// 修改前 ❌
const agent = createAgent({
  apiKey: config.apiKey,
  baseUrl: config.baseUrl,
  model: config.model,
  // 没有 systemPrompt，使用默认值
});

// 修改后 ✅
const agent = createAgent({
  apiKey: config.apiKey,
  baseUrl: config.baseUrl,
  model: config.model,
  systemPrompt: MY_SYSTEM_PROMPT,  // 必须提供
});
```

#### 步骤 4：删除内置文件

```bash
rm src/libs/agent-sdk/system-prompt.md
rm src/libs/agent-sdk/system-prompt.ts
```

#### 步骤 5：验证

```bash
npm run build
npm run dev
# 测试基本功能正常
```

### 6.2 Phase 2: 重构为 SubAgent 工具模式

**风险等级**：🟡 中等  
**预计时间**：2-3 小时

#### 步骤 1：提取 Review Agent 的 System Prompt

从 [`review-agent.ts`](../../src/libs/agent-sdk/review-agent.ts) 中提取 `REVIEW_SYSTEM_PROMPT`，移动到应用层：

```typescript
// 新建文件: src/app/[locale]/design/lib/reviewer-prompt.ts

export const REVIEWER_PROMPT = `
你是一个专业的全栈质量审查专家...
（原来的 REVIEW_SYSTEM_PROMPT 内容）
`;
```

#### 步骤 2：新建 SubAgent 工具文件

创建 `src/libs/agent-sdk/subagent-tool.ts`（见 4.3 节完整代码）

#### 步骤 3：修改 tools.ts

移除 `visual_review` 工具和 `runReview` 参数：

```typescript
// 修改后的 tools.ts
export function createTools(fileStore: FileStore): ToolDefinition[] {
  const fsTools = [
    write_file_tool,
    read_file_tool,
    list_files_tool,
  ];
  
  const snipTool = { /* ... */ };
  
  return [...fsTools, snipTool];
}
```

#### 步骤 4：修改 index.ts 入口

添加 subagent 支持（见 4.2 节代码）

#### 步骤 5：更新调用方，配置 SubAgent

```typescript
// 在 DesignLayout.tsx 或初始化 SDK 的地方
import { REVIEWER_PROMPT } from './lib/reviewer-prompt';

const agent = createAgent({
  apiKey: config.apiKey,
  baseUrl: config.baseUrl,
  model: config.model,
  systemPrompt: MAIN_SYSTEM_PROMPT,
  
  subAgents: {
    'visual-reviewer': {
      name: 'visual-reviewer',
      description: '视觉设计和代码质量审查专家...',
      prompt: REVIEWER_PROMPT,
      tools: ['read_file', 'list_files', 'write_file'],
      maxTurns: 8,
    },
  },
});
```

#### 步骤 6：删除旧的 review-agent.ts

```bash
rm src/libs/agent-sdk/review-agent.ts
```

#### 步骤 7：测试

```bash
# 手动测试
1. 启动应用
2. 创建一个简单的页面
3. 观察 LLM 是否会自主调用 visual-reviewer
4. 检查审查结果是否正确返回

# 自动测试（如果有）
npm test
```

### 6.3 Phase 3: 清理和优化

**风险等级**：🟢 低  
**预计时间**：1 小时

#### 步骤 1：清理未使用的导入和代码

```bash
# 检查是否有残留引用
grep -r "runReviewAgent" src/
grep -r "SYSTEM_PROMPT" src/
grep -r "visual_review" src/
```

#### 步骤 2：更新导出

```typescript
// index.ts - 更新导出列表
export type { AgentCallbacks, AgentConfig, LlmMessage, ToolDefinition, SubAgentDefinition };
export { type DesignFile, FileStore };

// 不再导出 SYSTEM_PROMPT
```

#### 步骤 3：添加 JSDoc 注释

为新添加的类型和函数添加完整的文档注释

#### 步骤 4：更新 README（如有）

如果在 SDK 目录有 README，更新使用示例

#### 步骤 5：Git 提交

```bash
git add .
git commit -m "refactor(sdk): align with Claude Agent SDK architecture

- Remove built-in system prompt (must be provided externally)
- Implement subagent tool mode (LLM-driven delegation)
- Add context isolation for subagents
- Improve extensibility through configuration

BREAKING CHANGE: systemPrompt is now required in AgentConfig"
```

---

## 七、文件变更清单

### 删除的文件（3个）

| 文件 | 原因 |
|------|------|
| `system-prompt.md` | 业务 prompt 不应在 SDK 中 |
| `system-prompt.ts` | 导入内置 prompt 的桥梁 |
| `review-agent.ts` | 旧的非工具式 subagent 实现 |

### 修改的文件（4个）

| 文件 | 变更内容 |
|------|----------|
| [`types.ts`](../../src/libs/agent-sdk/types.ts) | 添加 `SubAgentDefinition` 类型；`systemPrompt` 改为必填；添加 `subAgents` 字段 |
| [`tools.ts`](../../src/libs/agent-sdk/tools.ts) | 移除 `visual_review` 工具；移除 `runReview` 参数 |
| [`index.ts`](../../src/libs/agent-sdk/index.ts) | 移除内置 prompt 导入；添加 subagent 工具创建逻辑；添加参数校验 |
| `DesignLayout.tsx`（或其他调用方） | 提供 `systemPrompt`；可选配置 `subAgents` |

### 新增的文件（1个）

| 文件 | 说明 |
|------|------|
| `subagent-tool.ts` | SubAgent 工具实现（~150行） |

### 应用层新增（示例）

| 文件 | 说明 |
|------|------|
| `lib/main-prompt.ts` | 主 agent 的 system prompt |
| `lib/reviewer-prompt.ts` | Visual reviewer subagent 的 prompt |

---

## 八、测试策略

### 8.1 单元测试

```typescript
// __tests__/subagent-tool.test.ts

import { createSubAgentTool } from '../subagent-tool';
import { createMockLlmClient, createMockFileStore } from './mocks';

describe('SubAgent Tool', () => {
  it('should execute subagent with correct prompt', async () => {
    const tool = createSubAgentTool(
      mockLlmClient,
      mockFileStore,
      mockBaseTools,
      {
        'test-agent': {
          name: 'test-agent',
          description: 'Test agent',
          prompt: 'You are a test agent',
        },
      }
    );

    const result = await tool.execute({
      subagent_type: 'test-agent',
      prompt: 'Do something',
    });

    expect(result).toContain('completed');
  });

  it('should reject unknown subagent type', async () => {
    const tool = createSubAgentTool(/* ... */);

    const result = await tool.execute({
      subagent_type: 'non-existent',
      prompt: 'Test',
    });

    expect(result).toContain('Unknown subagent type');
  });

  it('should filter tools based on subagent config', async () => {
    // 测试工具过滤逻辑
  });
});
```

### 8.2 集成测试

```typescript
// __tests__/integration.test.ts

describe('Agent SDK Integration', () => {
  it('should require systemPrompt', () => {
    expect(() => createAgent({
      apiKey: 'test',
      baseUrl: 'http://test',
      model: 'test',
      // 缺少 systemPrompt
    })).toThrow('systemPrompt is required');
  });

  it('should work with subagents', async () => {
    const agent = createAgent({
      apiKey: 'test',
      baseUrl: 'http://test',
      model: 'test',
      systemPrompt: 'Test prompt',
      subAgents: {
        'tester': {
          name: 'tester',
          description: 'Test',
          prompt: 'Test agent',
        },
      },
    });

    expect(agent).toBeDefined();
    expect(typeof agent.run).toBe('function');
  });
});
```

### 8.3 E2E 测试（手动）

- [ ] 基础功能：创建 agent 并运行简单任务
- [ ] SubAgent 调用：观察 LLM 是否能自主决定调用 subagent
- [ ] 上下文隔离：确认 subagent 的中间输出不会出现在主对话
- [ ] 错误处理：测试无效的 subagent 类型、网络错误等场景
- [ ] 性能：对比重构前后的响应时间和 token 消耗

---

## 附录：参考资料

- [Claude Agent SDK 官方文档 - Subagents](https://code.claude.com/docs/en/agent-sdk/subagents)
- [Claude Agent SDK 官方文档 - Modifying System Prompts](https://code.claude.com/docs/en/agent-sdk/modifying-system-prompts)
- [Claude Code Subagents 文档](https://docs.claude.com/en/docs/claude-code/sub-agents)
- [DeepResearch Agent 示例（中文）](https://juejin.cn/post/7582776967817838592)

---

## 版本历史

| 版本 | 日期 | 作者 | 变更内容 |
|------|------|------|----------|
| v1.0 | 2025-05-30 | AI Assistant | 初始版本，完整设计方案 |

---

> 💡 **提示**：本文档是设计文档，实施前建议先进行技术评审和 PoC 验证。
