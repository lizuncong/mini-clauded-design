# Omelette (Claude Design) — Harness 架构设计文档

> 基于 `index-Bey6wlSl.js` / `ProjectPage-isPgCnC2.js` / `inject-script-BwD7T_zc.js` 编译产物逆向分析。
> 所有函数名为压缩后的原始标识符。

---

## 1. 整体架构

Omelette 是 Anthropic 内部的 AI 设计工具，采用 **Fat Client（胖客户端）** 架构：

```
┌─────────────────────────────────────────────────────────────┐
│                     浏览器（前端 harness）                      │
│                                                              │
│  ┌────────────┐  ┌──────────────┐  ┌────────────────────┐   │
│  │ System      │  │ 工具注册表    │  │ Agent Loop         │   │
│  │ Prompt 构建 │  │ Lu (Map)     │  │ _te()              │   │
│  │ Zj()       │  │ ├─ execute   │  │ ├─ 流式 LLM 调用   │   │
│  │ ├─ static  │  │ ├─ enabled()│  │ ├─ 工具调度 Rx()   │   │
│  │ └─ dynamic │  │ ├─ onTurnEnd│  │ ├─ context trim    │   │
│  └────────────┘  │ └─ onMid    │  │ ├─ snip/nudge      │   │
│                  │   streamInt │  │ └─ 流式 UI 渲染     │   │
│                  └──────────────┘  └────────────────────┘   │
│                                                              │
│  ┌────────────┐  ┌──────────────┐  ┌────────────────────┐   │
│  │ Skill 系统  │  │ Streaming    │  │ 项目/文件 CRUD     │   │
│  │ invoke_skill│  │ Components  │  │ Xt (API facade)    │   │
│  │ <skill-md> │  │ scomps 框架  │  │ └─ de() gRPC client│   │
│  └────────────┘  └──────────────┘  └────────────────────┘   │
│                                                              │
│  ┌────────────┐  ┌──────────────┐  ┌────────────────────┐   │
│  │ MCP 集成    │  │ CC Bridge    │  │ 多人协作            │   │
│  │ x0() 获取  │  │ cc_* tools   │  │ aN() 作者映射      │   │
│  │ rte() 调用  │  │ 127.0.0.1   │  │ gte() 消息重建     │   │
│  └────────────┘  └──────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
         │                          │                │
    gRPC: dQ()              直连第三方 API        直连本地进程
         │                          │                │
┌────────┴──────────────────────────┴────────────────┴────────┐
│                         后端服务                              │
│                                                              │
│  /design/v1/design/  ──转发──►  Anthropic Claude API        │
│  (projects/files/turns/telemetry)    (实际 LLM 推理)         │
└──────────────────────────────────────────────────────────────┘
```

**核心设计原则**：前端持有完整的 agent 智能逻辑（prompt、工具、循环），后端仅做两件事：
1. **中转 Claude API**：前端不发直连请求，通过 gRPC/protobuf 转发
2. **项目数据 CRUD**：文件存储、项目元数据、遥测

---

## 2. Agent Loop（`_te()` 函数）

`_te()` 是整个系统的核心，约 400 行压缩代码，实现了一个完整的 tool-use agent 循环。

### 2.1 函数签名

```
async function _te(
  e: string,        // 用户消息文本
  t: string,        // projectId
  n: string,        // projectName
  r: string,        // chatId
  o: ActiveSkill[], // 当前活跃的 skills
  s: Message[],     // 历史消息（持久化存储的）
  a: string,        // 模型 ID（可覆盖）
  c: Todo[],        // 初始 todos
  u: string[],      // 图片路径
  g: DisplayMeta,   // 显示元数据（含标题等）
  A: boolean,       // 是否为重试
): Promise<void>
```

### 2.2 执行流程

```
┌──────────────────────────────────────────────────────────┐
│  1. 初始化阶段                                            │
│  ├─ 检查是否为 follow-up（gN），若是则中断当前循环注入     │
│  ├─ 清理状态（pA, na）                                    │
│  ├─ 竞争锁获取（D2 模式下使用 Kj 获取 turn lock）          │
│  ├─ 创建 AbortController，注册到 gn (activeTurns Map)     │
│  ├─ 等待 MCP 工具列表就绪（tte，最多 3s）                 │
│  └─ 构建上下文（so Map 存储 projectId/signal/chatId）     │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│  2. Prompt 构建                                          │
│  ├─ Zj(b, n, o, true) → { systemPromptStatic,            │
│  │                          systemPromptDynamic,           │
│  │                          userEmailDomain }              │
│  ├─ 注入 <user-email-domain>                              │
│  ├─ 检测多人会话（aN），注入 Multiplayer 指令               │
│  ├─ gte(s) 将存储消息转为 API 消息格式                     │
│  └─ 追加 user 消息（含 <vte> undo 提示 + 图片路径）       │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│  3. 内循环（e: 外层 for(;;) — 每轮推理一次）               │
│  │                                                        │
│  │  ┌────────────────────────────────────────────────┐    │
│  │  │ 3.1 消息处理                                    │    │
│  │  │ ├─ Lg() 加载注入消息                           │    │
│  │  │ ├─ cg() 应用 context guard                    │    │
│  │  │ ├─ Cc() 截断/修剪消息                          │    │
│  │  │ ├─ Wm() 构建工具列表                           │    │
│  │  │ ├─ ra() 裁剪未知工具引用                       │    │
│  │  │ └─ hQ() 组装最终 API 请求参数                   │    │
│  │  └────────────────────────────────────────────────┘    │
│  │                       ▼                                │
│  │  ┌────────────────────────────────────────────────┐    │
│  │  │ 3.2 Token 预算管理                              │    │
│  │  │ ├─ fj() 估算 token 数                          │    │
│  │  │ ├─ hj() 或快速估算获取实际 token 数             │    │
│  │  │ ├─ 如果超出阈值 Fe：                            │    │
│  │  │ │   ├─ 执行 snip 修剪（vj / xj / uj）          │    │
│  │  │ │   ├─ 重新截断消息（Mg）                      │    │
│  │  │ │   └─ 注入 todo reminder                      │    │
│  │  │ └─ _j() 跟踪 token 使用                       │    │
│  │  └────────────────────────────────────────────────┘    │
│  │                       ▼                                │
│  │  ┌────────────────────────────────────────────────┐    │
│  │  │ 3.3 流式 LLM 调用 dQ()                         │    │
│  │  │ ├─ onTokens(qe, ct, Vt) → token 计数更新       │    │
│  │  │ ├─ onTextBlock(idx, text) → 收集文本            │    │
│  │  │ ├─ onToolDelta(idx, name, id, json) →          │    │
│  │  │ │   实时显示工具输入 + executeMidstream          │    │
│  │  │ ├─ onToolBlockStart(idx, name, id) →           │    │
│  │  │ │   UI 显示工具调用开始                         │    │
│  │  │ └─ onToolBlockComplete(idx, call) →             │    │
│  │  │     P(call) 执行工具，返回 tool_result          │    │
│  │  └────────────────────────────────────────────────┘    │
│  │                       ▼                                │
│  │  ┌────────────────────────────────────────────────┐    │
│  │  │ 3.4 响应解析 & 决策                             │    │
│  │  │ ├─ 累加 usage (input/output/cache tokens)      │    │
│  │  │ ├─ 遍历 He.content：                           │    │
│  │  │ │   ├─ "text" → 收集文本                       │    │
│  │  │ │   ├─ "tool_use" → fi=true                    │    │
│  │  │ │   ├─ "server_tool_use" → 服务端工具           │    │
│  │  │ │   ├─ "web_search_tool_result" → 搜索结果     │    │
│  │  │ │   └─ "thinking" → 思考内容                   │    │
│  │  │ ├─ 追加 assistant 消息到 R                      │    │
│  │  │ │                                                │    │
│  │  │ ├─ stop_reason == "end_turn" && 无工具：         │    │
│  │  │ │   └─ 检查 follow-up → 结束或继续              │    │
│  │  │ │                                                │    │
│  │  │ ├─ stop_reason == "end_turn" && 有工具：         │    │
│  │  │ │   ├─ 将 tool_results 追加到 R                │    │
│  │  │ │   └─ break 内循环 → 回到 3.1                 │    │
│  │  │ │                                                │    │
│  │  │ └─ stop_reason == "pause_turn"：                │    │
│  │  │     └─ te=true，继续内循环（不重置 $）           │    │
│  │  └────────────────────────────────────────────────┘    │
│  │                       ▼                                │
│  │  ┌────────────────────────────────────────────────┐    │
│  │  │ 3.5 错误处理 & 重试                             │    │
│  │  │ ├─ m0 + sq → 消息过大，自动压缩后重试           │    │
│  │  │ ├─ iq → MCP schema 被拒，移除该工具重试          │    │
│  │  │ ├─ "Stream ended..." → 响应超长，提示拆分后重试  │    │
│  │  │ └─ 其他 → throw → 外层 catch                    │    │
│  │  └────────────────────────────────────────────────┘    │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### 2.3 LLM API 调用（`dQ()` 函数）

`dQ()` 是流式 RPC 调用，通过 gRPC 连接后端，后端转发至 Claude API。

```
He = await dQ(b, me, r, m, {
  onTokens:    (output, thinking, isThinking) => {...},
  onTextBlock: (idx, text) => {...},
  onToolDelta: (idx, toolName, toolUseId, partialJson) => {...},
  onToolBlockStart: (idx, toolName, toolUseId) => {...},
  onToolBlockComplete: async (idx, toolCall) => {
    // 在这里执行工具，返回 tool_result
    const result = await P(toolCall);
    toolResults.push(result);
  },
});
```

返回值结构：
```
He = {
  content: [{type: "text", text: "..."}, {type: "tool_use", id, name, input}, ...],
  stop_reason: "end_turn" | "pause_turn" | "refusal",
  usage: {
    input_tokens, output_tokens,
    cache_read_input_tokens, cache_creation_input_tokens,
  }
}
```

### 2.4 API 请求组装（`hQ()` 函数）

```
hQ({
  model: J.trueModelId,
  systemPrompt: C,              // 静态部分
  systemSuffix: k + suffix,     // 动态部分
  messages: pe,                 // 裁剪后的消息
  tools: ce,                    // 工具定义列表
  maxTokens: 64000,
  supportsAdaptiveThinking: J.supportsAdaptiveThinking,
  adaptiveEffort: C2(),         // 用户设置的思考深度
})
```

---

## 3. 工具系统

### 3.1 工具注册表（`Lu` Map）

所有工具在初始化时注册到一个全局 Map：

```
const iN = [
  ...S4,   // 核心文件操作工具
  ...k8,   // 视图/展示工具
  ...R8,   // 质量保证工具
  ...t6,   // PPTX 导出工具
  ...s6,   // 外部集成工具（Gemini/ElevenLabs）
  ...w6,   // 第三方连接工具（Figma/GitHub）
  ...F6,   // 上下文管理工具
  ...L6,   // 分叉/验证工具
  ...wq,   // 代码执行工具
  ...Yq,   // 辅助工具
];
const Lu = new Map(iN.map(e => [e.name, e]));
```

### 3.2 工具定义结构

每个工具是一个对象：

```typescript
interface ToolDef {
  name: string;
  description: string;   // 传给模型的描述文本（通常很长，包含使用指南）
  input_schema: {
    type: "object",
    properties: Record<string, JSONSchema>,
    required?: string[],
  };
  enabled?: () => boolean;          // 动态启用/禁用
  execute?: (input, ctx) => string; // 前端执行函数
  executeMidstream?: (partialJson, ctx) => void;  // 流式中预执行
  onMidstreamInterrupt?: (partialJson, ctx) => string; // 中断时生成结果
  onTurnEnd?: (ctx) => void;        // 轮次结束后回调
}
```

### 3.3 工具列表动态构建（`Wm()` 函数）

`Wm({projectId})` 在每轮推理前动态构建工具列表：

```
Wm(projectId):
  1. 过滤 enabled() === true 的内置工具 → map(zz) 转为 API 格式
  2. 如果项目有 Figma 连接 → 追加 wQ (figma tools)
  3. 如果项目有团队设计系统 → 追加 g2 (team DS tools)
  4. 如果有 CC Bridge → 追加 nN (cc_ls/cc_read/cc_grep/cc_copy/back_to_cc)
  5. 如果有 MCP 工具 → 追加 sN() + tool_search_tool_bm25
  6. 移除被禁用的工具（Bb Set）
```

### 3.4 工具调度器（`Rx()` 函数）

```
async function Rx(projectId, toolName, input, signal, chatId):
  1. 从 Lu 查找工具注册
  2. 如果工具有 execute → 直接在前端执行
  3. 如果是 Figma 工具（bf 前缀）→ X$(name, input, signal)
  4. 如果是 MCP 工具 → rte(name, input, signal)
  5. 如果是代码执行工具 → d7(name, input, projectId, signal)
  6. 如果是 CC Bridge 工具 → Pee(name, input, projectId, signal)
  7. 否则 → "Unknown tool: ..."
```

### 3.5 工具执行回调（`P` 函数，在 `_te` 内部定义）

```
P = async (toolCall) => {
  vA(chatId, toolCall.name);  // 注册工具到 turn-end hooks

  const result = await Rx(projectId, toolCall.name, toolCall.input, signal, chatId);

  // 特殊处理：__async 异步工具
  if (result.__async) → 启动后台执行，立即返回 placeholder

  // 特殊处理：__image_ref 图片引用
  if (result.__image_ref) → 返回 image_ref content block

  // 正常处理：截断过长结果，发送 tool_result 事件
  nt(chatId, {type: "tool_result", id, tool, result});
  return {type: "tool_result", tool_use_id: id, content: result};
};
```

### 3.6 内置工具清单

| 分类 | 工具名 | 用途 |
|------|--------|------|
| **文件操作** | `write_file` | 写文件到项目 |
| | `read_file` | 读项目文件 |
| | `list_files` | 列出目录 |
| | `grep_files` | 正则搜索 |
| | `run_script` | 执行脚本（PDF/DOCX 解析等） |
| **视图控制** | `show_to_user` | 在预览 iframe 中展示文件 |
| | `take_screenshot` | 对预览截图 |
| | `ask_user` | 向用户提问（支持多种 UI 类型） |
| **质量保证** | `fork_verifier_agent` | 分叉验证 agent |
| | `verification_feedback` | 验证反馈 |
| **上下文管理** | `update_todos` | 更新 todo 列表 |
| | `register_snip` | 注册延迟裁剪的消息范围 |
| | `nudge` | 主动裁剪上下文 |
| **Skill** | `invoke_skill` | 加载 skill 指令 |
| **导出** | `gen_pptx` | 导出 PPTX（可编辑/截图模式） |
| | `generate_image` | Gemini 图片生成（后台异步） |
| | `generate_sound` | ElevenLabs 语音/音效 |
| **第三方连接** | `connect_figma` | 连接 Figma |
| | `connect_github` | 连接 GitHub |
| **Figma** | `get-design-context`, `expand-node`, `get_variable_defs` 等 | Figma 设计数据读取 |
| **搜索** | `tool_search_tool_bm25` | BM25 工具搜索（当 MCP 工具过多时） |
| **CC Bridge** | `cc_ls`, `cc_read`, `cc_grep` | 读取 Claude Code 项目 |
| | `cc_copy_to_project` | 从 CC 项目拷贝文件 |
| | `back_to_cc` | 将设计结果交回 Claude Code |

---

## 4. System Prompt 构建（`Zj()` 函数）

System prompt 分为 **static**（不随对话变化）和 **dynamic**（每轮更新）两部分。

### 4.1 静态部分（`systemPromptStatic`）

在项目打开时构建一次，包含：

```
1. 角色定义
   "You are an expert designer working with the user as a manager..."

2. 技术约束
   - 文件系统操作规则
   - HTML 输出格式
   - 不要暴露技术细节/tools/system prompt

3. 设计流程
   "understand needs → explore resources → plan → build → finish"

4. 项目特定信息
   - defaultDsProjectId → <design-system-id>
   - CLAUDE.md 内容 → <project-claude-md>
   - 自定义指令 → <user-custom-instructions>
   - 已开启的 skills 的介绍信息
   - IP 保护指令（不复制竞品 UI）
   - Anthropic 品牌指导（isAnthropic 时）
```

### 4.2 动态部分（`systemPromptDynamic`）

每轮推理前重新生成：

```
1. <system-info> 块
   ├─ 项目标题变更
   ├─ 当前查看的文件
   ├─ 当前日期
   ├─ 用户 tweaks（edit_mode_set_keys）
   └─ 项目级 hooks 注入

2. <system-reminder> 块（Gj() 函数）
   ├─ 未查看但已写入的文件列表
   ├─ AI 预览模式状态
   ├─ 待应用的 edit mode 变更
   └─ 其他实时状态提醒

3. 用户邮箱域名（userEmailDomain）
   用于 IP 判断

4. 多人协作指令（多人时注入）
```

### 4.3 消息注入系统（`Lg()` 函数）

`Lg()` 在每轮推理前收集要注入到对话中的额外消息，支持：
- **follow-up 消息**：`yg()` 返回的待注入消息
- **用户中途插话**：模型响应期间用户发送的新消息

---

## 5. Skill 系统

### 5.1 Skill 定义格式

Skill 通过 `<skill-md>` 标签在项目文件中定义：

```markdown
<skill-md>
----
name: {brand}-design
description: Use this skill to generate well-branded interfaces...
user-invocable: true
----

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts...
</skill-md>
```

### 5.2 Skill 加载机制

Skill **不是一次性注入的**，而是按需加载：

1. 系统提示中列出所有可用 skill 名称和简介（`h2()` 获取）
2. 当用户请求匹配某个 skill 时，模型调用 `invoke_skill` 工具
3. `invoke_skill` 的执行函数将 skill 的完整 prompt 注入到对话中
4. 注入后，模型的后续响应会遵循该 skill 的指导

### 5.3 内置 Skill 清单

| Skill 名称 | 用途 |
|-----------|------|
| Animated video | 时间轴动画、逐帧序列、播放控制 |
| Interactive prototype | 可交互原型设计 |
| Make a deck | PPT 演示文稿 |
| Frontend design | 前端设计指导（美学方向） |
| Make tweakable | 可调参数设计（TweaksPanel） |
| Create design system | 设计系统创建 |
| Codebase design | 基于代码库的设计 |

### 5.4 Skill 与设计系统的关系

- 项目可绑定一个设计系统（`defaultDsProjectId`）
- 设计系统本身是一个 Omelette 项目，包含组件库、颜色 token、字体等
- Skill 加载后，agent 可以 `cc_copy_to_project` 从 Claude Code 项目拉取真实组件
- 也可以从设计系统项目读取资产

---

## 6. 上下文管理

核心设计理念：**让模型自己决定丢什么，而不是系统盲目截断**。三层防线：Prompt Caching → Snip（模型主导）→ Sanitize（安全兜底）。

```
┌─────────────────────────────────────────────────────────┐
│  第一层：Prompt Caching（省钱）                            │
│  ├─ system prompt static → 不缓存                        │
│  ├─ system prompt dynamic → ephemeral cache              │
│  ├─ 最后 2 条 user 消息 → ephemeral cache                │
│  └─ 目标：减少多轮 tool-use 循环中的重复 token 计算       │
├─────────────────────────────────────────────────────────┤
│  第二层：Snip（模型主导的延迟裁剪）                         │
│  ├─ 模型注册 snip → 只标记不删除                           │
│  ├─ token 超阈值 → 批量执行已注册的 snip                   │
│  ├─ nudge 注入 → 如果模型不合作，系统提醒                  │
│  └─ fallback trims → 兜底：系统强制从尾部裁剪               │
├─────────────────────────────────────────────────────────┤
│  第三层：Sanitize（安全兜底）                               │
│  ├─ 消息交替修复（相邻同角色插入占位）                      │
│  ├─ 孤儿 tool_call/tool_result 修复                      │
│  ├─ thinking block 剥离                                   │
│  ├─ 超大消息丢弃                                          │
│  └─ 空内容替换为 [empty]                                  │
└─────────────────────────────────────────────────────────┘
```

### 6.1 消息 ID 系统

每条 user 消息自动附加 `[id:mNNNN]` 标签（如 `[id:m0003]`），作为 snip 系统的寻址基础。系统 prompt 中明确告知模型这一约定：

> Each user message carries an `[id:mNNNN]` tag. When a phase of work is complete, use the `snip` tool with those IDs to mark that range for removal.

### 6.2 Token 预算（`fj()` / `hj()` / `z$()`）

- **maxTokens**: 64000（硬限制）
- 每轮推理前通过 `fj()` 估算当前 token 数
- 实际 token 数通过 `hj()` 从 API 获取（带缓存，避免重复计算）
- `z$(modelId)` 获取每个模型的 token 阈值（不同模型不同）
- `_j(chatId, tokenCount, trimThreshold)` 记录每轮的 token 使用，供下次估算参考
- `Sj(tokenCount, trimThreshold)` 保存历史记录用于下次快速估算

### 6.3 Prompt Caching（`fQ()` + `Mg()`）

通过 `cache_control: {type: "ephemeral"}` 标记缓存断点，减少多轮 tool-use 循环中的重复 token 计算。

**`fQ()` — System Prompt 缓存**

```
fQ(staticPrompt, dynamicSuffix):
  return [
    {type: "text", text: At(staticPrompt, Na)},       // 不缓存
    {type: "text", text: At(dynamicSuffix, Na),         // 缓存
         cache_control: {type: "ephemeral"}}
  ]
```

动态部分标记为 ephemeral cache，因为每轮变化但跨轮复用率高。

**`Mg()` — 消息尾部缓存**

将最后 2 条 user 消息的最后 content block 标记为 ephemeral cache。这样在 tool-use 循环中，包含最新 tool_result 的消息可以被缓存。

### 6.4 Snip 系统（延迟裁剪）

Snip 的核心设计是**注册-执行分离**：模型尽早注册（不丢失上下文），系统在需要空间时批量执行。

#### 6.4.1 注册阶段（模型驱动）

模型调用 `snip` 工具，传入消息 ID 范围：

```json
{"from_id": "m0003", "to_id": "m0007", "reason": "exploration done"}
```

工具的 `execute()` 调用 `wj(chatId, fromId, toId, reason)`，只做**注册不删除**，返回 `"Snip registered (N queued)."`。

系统 prompt 引导模型：
- 每个工作块完成后立即注册 snip
- snip 静默执行，不告知用户（除非一次性裁剪了大量内容）
- 推荐的 snip 候选：已解决的探索、已完成的工具操作中间步骤、已被后续版本取代的草稿

#### 6.4.2 执行阶段（系统触发）

在 agent loop 每轮推理前（`_te()` 内部），执行 token 预算检查：

```
Fe = z$(model)                           // 获取该模型的 token 阈值
ft = fj({...})                            // 估算当前 token 数

if (ft.canSkip):
    Dt = ft.estimated                    // 快速路径：跳过实际计算
else:
    Dt = await hj(me, signal)            // 慢路径：调 API 获取实际 token 数

if (Dt > Fe):                            // 超出阈值！
    Ye = vj(R, chatId)                   // 尝试执行已注册的 snip

    if (Ye.snipsApplied > 0):
        xj(Ye, "threshold")              // 有 snip 被执行，记录遥测
    else:                                // 没有可用的 snip！
        k2(chatId) === 0 && Bj()        // 注入 nudge 提醒
        uj(R, Dt, chatId, model)        // 系统强制 fallback 裁剪

    Qj(chatId)                           // 执行其他清理
```

#### 6.4.3 裁剪结果

被裁剪的消息被替换为占位符（通过 `gj(count)` 生成），不保留任何原文：

```
<dropped_messages count="5">
  The preceding 5 messages were removed from the transcript
  to fit the context window.
</dropped_messages>
```

### 6.5 Nudge 机制（`Bj()` / `k2()` / `uj()`）

当 token 超阈值但**没有已注册的 snip 可用**时：

1. `Bj()` 向对话注入一条系统提示，提醒模型需要注册 snip
2. `k2(chatId)` 追踪每个 chatId 的 fallback trim 次数
3. 如果模型连续多轮不注册 snip，`uj()` 直接从消息尾部强制裁剪

这是"先礼后兵"策略：先给模型机会自主决策，不合作才系统强制。

### 6.6 消息修剪（`dj()` 函数）

当单条消息过长时进行内容级修剪：

```
dj(message, maxLen):
  ├─ image / image_url / image_ref → <trimmed_image />
  ├─ thinking / redacted_thinking → null（删除）
  ├─ text 超过 maxLen → 截断 + "<trimmed>" 后缀
  └─ content 为数组 → 递归处理每个 block，过滤 null
```

- 图片引用不丢弃，只是替换为标记（后续 tool_use 中仍可引用路径）
- thinking block 被完全删除（节省大量 token）
- 文本截断时附加 `<trimmed>` 标记，告知模型内容被截断

### 6.7 消息清洗管线（`Cc()` 函数）

在发送给 API 之前，消息经过 4 步自愈清洗，修复因裁剪、中断、follow-up 注入导致的格式不一致：

**`aq()` — 清除孤儿标签**

正则移除残留的 `<orphaned_tool_call>` / `<orphaned_tool_result>` 标签。

**`lq()` — 修复 Tool Block 一致性**

- `server_tool_use` 缺少对应 `tool_result` → 转为 `<orphaned_tool_call>` 文本（截断 input 至 120 字符）
- `tool_result` 缺少对应 `tool_use` → 转为 `<orphaned_tool_result>` 文本
- `tool_use` 的 input 为 null 或非对象 → 重置为 `{}`
- 尾部 assistant 消息的 server_tool_use 不在最终 tool_result 中 → 也转为文本

**`dq()` — Unicode 修复**

修复 lone surrogate 字符（不成对的 UTF-16 代理项），确保消息可以被安全编码传输。

**`gq()` — 空内容清理**

- 空字符串内容 → 替换为 `[empty]`
- 消息整体为空 → 替换为 `[empty]`
- 避免发送空消息导致 API 拒绝

### 6.8 Thinking Block 处理

**`gQ()` — 重试时剥离**

当遇到 thinking block 相关错误（通过 `m0()` 检测消息内容）时，从所有 assistant 消息中剥离 `thinking` / `redacted_thinking` block 后重试：

```javascript
function gQ(messages) {
  for (const msg of messages) {
    if (msg.role !== "assistant") continue;
    msg.content = msg.content.filter(
      block => block.type !== "thinking" && block.type !== "redacted_thinking"
    );
  }
}
```

**`AQ()` — 追加前过滤**

在将模型响应追加到消息列表前，过滤掉 thinking block，避免它们在后续轮次中累积消耗 token。

### 6.9 未知工具引用裁剪（`ra()` 函数）

当工具列表变化（如 MCP 工具增减），历史消息中可能引用了已不存在的工具。`ra(messages, toolNameSet)` 清理 `tool_search_tool_result` 中指向已移除工具的引用，避免 API 报错。

### 6.10 Todo Reminder（`PB()` 函数）

当有未完成的 todo 时，注入系统提示提醒模型：

```
<todo_reminder>
You have 2 outstanding todo(s):
  1. Implement responsive layout
  2. Add dark mode toggle
</todo_reminder>
```

触发时机：每轮推理前通过 `PB(bc(r))` 检查，如果存在未完成项，将 reminder 注入到对应消息位置（通过 `yc(r, {msgIdx, reminderText})`）。

### 6.11 完整流程时序

```
用户发消息
  │
  ▼
_te() agent loop 启动
  │
  ├─ 构建消息列表 R（历史 + 新消息）
  ├─ fQ() 组装 system prompt（带 cache_control）
  ├─ Mg() 标记最后 2 条 user 消息为 cache
  │
  ├──── 推理循环 ────────────────────┐
  │                                 │
  │  fj() 估算 token 数             │
  │  hj() 实际 token 数（如需）      │
  │         │                       │
  │  超阈值？                        │
  │    ├─ Yes →                     │
  │    │  vj() 执行已注册 snip      │
  │    │  有 snip？                 │
  │    │    ├─ Yes → 裁剪，继续      │
  │    │    └─ No → Bj() 注入 nudge │
  │    │            + uj() 强制裁剪  │
  │    │            + Qj() 清理      │
  │    └─ No → 继续                 │
  │                                │
  │  Cc() 4步清洗消息               │
  │  ra() 清理过期工具引用           │
  │  Wm() 动态构建工具列表          │
  │  hQ() 组装最终 API 请求         │
  │  dQ() 流式调用 LLM              │
  │  解析响应（过滤 thinking）      │
  │  P() 执行工具                   │
  │  追加 tool_result 到 R          │
  │                                │
  └──────── 循环 ─────────────────┘
```

### 6.12 关键函数索引

| 函数 | 职责 |
|------|------|
| `fQ()` | 组装 system prompt（带 cache_control） |
| `Mg()` | 标记消息尾部为 ephemeral cache |
| `fj()` | 估算当前 token 数（快速路径） |
| `hj()` | 从 API 获取实际 token 数（慢路径） |
| `z$()` | 获取模型对应的 token 阈值 |
| `wj()` | 注册一个 snip（不删除） |
| `vj()` | 批量执行所有已注册 snip |
| `xj()` | 遥测记录 snip 执行 |
| `Bj()` | 注入 nudge 提醒模型裁剪 |
| `k2()` | 追踪 fallback trim 次数 |
| `uj()` | 系统强制 fallback 裁剪 |
| `Qj()` | 执行其他清理逻辑 |
| `_j()` | 记录每轮 token 使用 |
| `Sj()` | 保存 token 历史供估算 |
| `dj()` | 单条消息内容修剪 |
| `Cc()` | 4步消息清洗管线 |
| `ra()` | 清理过期工具引用 |
| `gQ()` | 重试时剥离 thinking block |
| `AQ()` | 追加前过滤 thinking block |
| `m0()` | 检测 thinking block 相关错误 |
| `gj()` | 生成 `<dropped_messages>` 占位文本 |
| `PB()` | 生成 todo reminder 文本 |
| `yc()` | 在指定消息位置注入 reminder |

---

## 7. 流式组件（Streaming Components / scomps）

### 7.1 概念

scomp = Streamable Component，是一个文件对：
- `Name.sc.html` — 声明式模板（可以逐字符到达）
- `Name.sc.js` — 逻辑类（必须完整到达）

### 7.2 运行时架构

```
┌──────────────────────────────────────────┐
│  Host Page (Omelette harness)            │
│  ├─ 检测 .sc.html/.sc.js 文件写入         │
│  ├─ 通过 iframe 注入更新                  │
│  └─ __fastModeScompUpdate() 桥接         │
│         │                                │
│         ▼  postMessage                    │
│  ┌──────────────────────────────────┐    │
│  │  Preview iframe                   │    │
│  │  ├─ scomps.js runtime            │    │
│  │  ├─ __scompsRegistry            │    │
│  │  ├─ __updateComponentHtml()      │    │
│  │  ├─ __updateComponentJs()        │    │
│  │  └─ React 渲染                   │    │
│  └──────────────────────────────────┘    │
└──────────────────────────────────────────┘
```

### 7.3 流式更新流程

```
1. Agent 写入 ComponentA.sc.html（通过 write_file）
2. Host 检测文件变更事件
3. 提取 HTML/JS 内容
4. 调用 iframe 中的 __fastModeScompUpdate(name, kind, content, streaming)
5. streaming=true 时：
   ├─ 设置 entry.fetched = true（阻止磁盘回读）
   ├─ 添加 .sc-streaming-html CSS 类（启用过渡动画）
   └─ 实时更新 HTML
6. streaming=false 时（JS 或最终 HTML）：
   ├─ 移除 .sc-streaming-html 类
   └─ 完整渲染
```

### 7.4 CSS 过渡

```css
.sc-streaming-html, .sc-streaming-html * {
  transition:
    background-color 200ms ease,
    color 200ms ease,
    border-color 200ms ease,
    /* ... 20+ 属性 */
}
```

流式中的元素有平滑过渡效果，完成后回到正常渲染。

### 7.5 占位机制

当组件被引用但尚未到达时，渲染占位符：

```
<Placeholder name="Card" hintSize="100%,60px" streaming={true} />
```

---

## 8. 中断与恢复机制

### 8.1 用户中断（`Rte()` 函数）

```
Rte(chatId):
  1. Qx(chatId) → 处理 midstream interrupt
     ├─ 找到正在进行的工具调用
     ├─ 调用 onMidstreamInterrupt 生成结果
     └─ 将 partialToolUse + toolResult 追加到消息
  2. abort() → 取消当前 AbortController
  3. 从 gn (activeTurns) 移除
  4. Rb(chatId) → 调用所有注册工具的 onTurnEnd
```

### 8.2 Midstream Interrupt

部分工具支持流式中断（如代码执行工具）：

```
当用户在工具执行过程中点击停止：
  1. Oz(toolDef) 检查工具是否支持中断
  2. 如果支持 → onMidstreamInterrupt(partialJson, ctx) 生成部分结果
  3. 将 partialToolUse + toolResult 追加到对话
  4. 创建新 AbortController，继续循环
```

### 8.3 错误恢复

| 错误类型 | 处理方式 |
|---------|---------|
| 消息过大（m0 + sq） | 自动压缩后重试 |
| MCP schema 被拒（iq） | 移除该工具，重新构建工具列表后重试 |
| 流超时（"Stream ended..."） | 提示模型拆分后重试，最多 2 次 |
| refusal | 检查 follow-up，有则继续，无则报错 |
| abort | 构造中断消息后退出 |

---

## 9. MCP 集成

### 9.1 工具发现（`x0()` 函数）

```
x0({force: boolean}):
  1. de().mcpListTools({clientSessionId}) → 获取所有 MCP server 的工具
  2. 解码 inputSchema（Uint8Array → JSON）
  3. 按服务器名去重（qee）
  4. 存入 Oa (serverTools Map)
  5. 返回活跃的服务器列表
```

### 9.2 工具名称编码

MCP 工具名编码为 `{serverName}__{toolName}`（`Sb = "__"` 分隔符），解析通过 `oN()` 函数。

### 9.3 工具调用（`rte()` 函数）

```
rte(encodedName, input, signal):
  1. oN(encodedName) → 解析出 server + toolName
  2. de().mcpCallTool({serverId, toolName, arguments, clientSessionId})
  3. 解码结果（Uint8Array → JSON）
  4. 检查 isError 标志
  5. 发送遥测事件
  6. 返回结果
```

### 9.4 刷新机制

- 初始化时自动加载（`ete()` 惰性触发）
- 窗口聚焦时强制刷新（`Cae()` 注册 focus 事件监听）
- 请求有 3 秒超时保护

---

## 10. Claude Code Bridge

### 10.1 连接建立

- Claude Code 启动 Omelette 时，将连接信息存入 `sessionStorage("omelette.ccbridge")`
- 包含 `{port, token, projectId, context: {cwd, prompt}}`

### 10.2 Bridge 工具

| 工具 | 实现 |
|------|------|
| `cc_ls` | `fetch(http://127.0.0.1:{port}/ls)` |
| `cc_read` | `fetch(http://127.0.0.1:{port}/read)` |
| `cc_grep` | `fetch(http://127.0.0.1:{port}/grep)` |
| `cc_copy_to_project` | 读 CC 文件 → 写入 Omelette 项目 |
| `back_to_cc` | 收集所有文件 → base64 → 通过 `/back_to_cc` 端点交回 |

### 10.3 生命周期

1. 检测 `sessionStorage` 中有 CC bridge 数据 → 生成 `cc_bridge_handoff` 系统消息
2. 模型使用 cc_* 工具探索 CC 项目代码
3. `back_to_cc` 被调用后，bridge 关闭，`sessionStorage` 清除
4. 模型不再能使用 cc_* 工具

---

## 11. 多人协作

### 11.1 消息存储格式

每条消息包含 `authorAccountUuid` 和 `authorName`，用于识别发送者。

### 11.2 消息重建（`gte()` 函数）

```
gte(storedMessages):
  1. aN() → 构建参与者 Map（accountUuid → displayName）
  2. 如果多人参与 → 在用户消息前加 `[Name]: ` 前缀
  3. 处理 tool_call / tool_result 对
  4. 处理 user_interjection（工具执行期间的用户插话）
  5. 处理 server_side 工具（web search 等）
```

### 11.3 Multiplayer 注入

当检测到多个参与者时，注入：

```
# Multiplayer session

This conversation has multiple human participants (Alice, Bob).
User messages may be prefixed with the author's name in square brackets
where the author is known. Treat each person's requests distinctly
and address them by name where it helps.
```

---

## 12. 项目数据持久化

### 12.1 离线优先策略

项目数据缓存在内存中（`Ut` Map），通过以下策略同步到服务端：

```
┌──────────────────────────────────────────┐
│  内存缓存 (Ut Map)                        │
│  key: projectId                           │
│  value: {                                 │
│    data: ProjectData,                     │
│    dirty: boolean,                        │
│    editGen: number,                       │
│    dirtyGen: number,                      │
│  }                                        │
└─────────────────┬────────────────────────┘
                  │
    ┌─────────────┼──────────────┐
    │             │              │
    ▼             ▼              ▼
 定时轮询      页面隐藏        手动刷新
 (5s-60s)    (visibilitychange) (Yc调用)
    │             │              │
    ▼             ▼              ▼
 PUT /design/v1/design/projects/{id}/data
```

### 12.2 冲突处理

- `Ge.Aborted` → 检测并发写入冲突，重新对齐
- `Ge.ResourceExhausted` → 指数退避重试
- `Ge.Unauthenticated` → 多次失败后标记为 terminal
- `Ge.InvalidArgument`（stale blob）→ 标记为 terminal

### 12.3 页面卸载保底

```
window.addEventListener("pagehide", () => Zx(true));
// sendBeacon 方式发送脏数据
```

---

## 13. 遥测系统

### 13.1 批量发送

```
Lx = {
  sessionId: crypto.randomUUID(),
  queue: [],         // 最多 100 条
  flush: async () => {
    // 每次最多发送 10 条
    // 通过 gRPC: de().trackEvent()
  }
}
```

### 13.2 关键事件

| 事件 | 触发时机 |
|------|---------|
| `session_start` | 页面加载 |
| `design.figma_tools` | Figma 工具首次加载 |
| `design.mcp_tool_schema_rejected` | MCP 工具 schema 被模型拒绝 |
| `design.mcp_tool_result` | MCP 工具调用结果 |
| `chat_tab_new/switch/delete` | 聊天标签操作 |
| `sync_aborted_realign` | 并发写入冲突 |
| `team_design_system_finish` | 团队设计系统操作完成 |

---

## 14. 事件系统

### 14.1 Agent 事件（`nt()` 函数）

Agent 通过 `nt(chatId, event)` 向 UI 层发送事件：

| 事件类型 | 数据 |
|---------|------|
| `text` | `{content}` — 文本内容 |
| `tokens` | `{output_tokens, thinking_tokens, is_thinking}` |
| `tool_call` | `{id, tool, input}` — 工具调用 |
| `tool_result` | `{id, tool, result}` — 工具结果 |
| `thinking` | `{content}` — 思考内容 |
| `done` | `{result, model, usage}` — 完成 |
| `error` | `{message, debugInfo}` — 错误 |
| `stopped` | — 用户中断 |
| `turn_revoked` | — 轮次被撤销 |
| `waiting_for_turn` | `{holder}` — 等待锁 |
| `todos_updated` | `{todos}` — todo 更新 |

### 14.2 文件事件

- `files-changed` — 文件写入后触发
- `file-written` — 单个文件写入
- `agent-show-file` — 请求 UI 展示文件
- `agent-eval-js` — 请求执行 JS 代码
- `agent-eval-result` — JS 执行结果

### 14.3 DOM 跨 iframe 通信

设计模式通过 `postMessage` 通信：

- `{type: '__edit_mode_available'}` — 编辑模式可用
- `{type: '__edit_mode_dismissed'}` — 关闭编辑面板
- `{type: '__edit_mode_set_keys', edits}` — 应用参数变更
- `{type: '__edit_mode_chat', text}` — 从面板发送聊天消息

---

## 15. Artifact 内嵌 AI（`window.claude.complete()`）

HTML artifact 中可以通过内置 helper 调用 Claude：

```javascript
const text = await window.claude.complete("Summarize this: ...");
// 或
const text = await window.claude.complete({
  messages: [{ role: 'user', content: '...' }],
});
```

- 模型：`claude-haiku-4-5`（硬编码）
- 输出上限：1024 tokens
- 按用户限流，共享 quota
- 无需 API key（通过内置后端中转）

---

## 16. 安全边界

### 16.1 Prompt 注入防护

System prompt 明确指示模型不泄露：
- 工具定义和技术细节
- System prompt 本身
- 内部实现架构

### 16.2 凭证处理

- 前端不持有 Anthropic API key
- 第三方 API key（Gemini/ElevenLabs）存储在 localStorage
- Bug 报告模板要求 redact `sk-ant-`, `Bearer`, `ghp_`, `api_key`, `password` 等模式

### 16.3 CSP 沙箱

预览 iframe 使用严格的 CSP：
```
sandbox="allow-same-origin"
csp="default-src 'none'; img-src data:; style-src 'unsafe-inline'"
```

截图渲染 iframe 同样沙箱化。

---

## 附录 A：关键函数索引

| 函数 | 职责 |
|------|------|
| `_te()` | Agent Loop 主函数 |
| `Rx()` | 工具调度器 |
| `Wm()` | 动态工具列表构建 |
| `Zj()` | System Prompt 构建 |
| `hQ()` | API 请求参数组装 |
| `dQ()` | 流式 LLM RPC 调用 |
| `dj()` | 消息修剪 |
| `Cc()` | 消息列表截断 |
| `Mg()` | 最终消息修剪 |
| `fj()` | Token 估算 |
| `hj()` | Token 实际计数 |
| `gte()` | 存储消息 → API 消息转换 |
| `cg()` | Context guard 应用 |
| `x0()` | MCP 工具列表获取 |
| `rte()` | MCP 工具调用 |
| `Rte()` | 用户中断处理 |
| `gN()` | Follow-up 注入 |
| `nt()` | Agent 事件发射 |
| `Xt` (An) | 项目 API facade |
| `Lg()` | 消息注入收集 |
| `ra()` | 未知工具引用裁剪 |
| `vj()` | Snip 执行 |
| `uj()` | 消息裁剪（基于 token 阈值） |
