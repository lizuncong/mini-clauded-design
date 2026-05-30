# Agent SDK 使用示例集

> 本文档提供重构后 Agent SDK 的完整使用示例
>
> 所有示例均基于对齐 Claude Agent SDK 后的新架构

---

## 目录

- [示例 1：最简用法（无 SubAgent）](#示例-1最简用法无-subagent)
- [示例 2：UI 设计助手 + 质量审查（单 SubAgent）](#示例-2ui-设计助手--质量审查单-subagent)
- [示例 3：全栈开发多 SubAgent 协作](#示例-3全栈开发多-agent-协作)
- [示例 4：动态 SubAgent 配置](#示例-4动态-subagent-配置)
- [示例 5：与现有项目集成（Next.js）](#示例-5与现有项目集成nextjs)

---

## 示例 1：最简用法（无 SubAgent）

**适用场景**：简单的代码生成、文本处理等不需要子代理的任务

### 完整代码

```typescript
/**
 * 示例 1: 基础 Agent 使用
 * 
 * 特点：
 * - 只使用基础工具（文件读写）
 * - 无 subagent
 * - System prompt 必须外部传入
 */

import { createAgent } from '@/libs/agent-sdk';

async function basicExample() {
  const agent = createAgent({
    apiKey: process.env.OPENAI_API_KEY!,
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o',
    
    systemPrompt: `
你是一个前端开发助手。
你的职责是根据用户需求生成高质量的前端代码。

能力范围：
- HTML5 / CSS3 / JavaScript (ES6+)
- React 组件开发
- Tailwind CSS 样式编写
- 响应式布局设计

工作原则：
1. 先理解需求，再规划结构
2. 代码要清晰、可维护
3. 遵循最佳实践和设计规范
4. 注释关键逻辑
`,
  });

  console.log('🚀 开始生成代码...\n');

  const messages = await agent.run(
    '创建一个响应式的导航栏组件，包含 logo、菜单链接、登录按钮',
    {
      onText: (text) => process.stdout.write(text),
      onStreamText: (chunk) => process.stdout.write(chunk),
      onToolCall: (name, input) => {
        console.log(`\n🔧 [工具调用] ${name}`);
        if ('path' in input) {
          console.log(`   文件: ${input.path}`);
        }
      },
      onToolResult: (name, result) => {
        const preview = result.length > 100 
          ? result.substring(0, 100) + '...' 
          : result;
        console.log(`   ✅ 完成: ${preview}`);
      },
      onDone: (usage) => {
        console.log(`\n\n📊 Token 使用统计:`);
        console.log(`   输入 tokens: ${usage.prompt_tokens}`);
        console.log(`   输出 tokens: ${usage.completion_tokens}`);
      },
    }
  );

  return messages;
}

basicExample()
  .then(() => console.log('\n✨ 完成!'))
  .catch(console.error);
```

### 运行方式

```bash
# 保存为 examples/basic-usage.ts
npx ts-node examples/basic-usage.ts
```

### 预期输出

```
🚀 开始生成代码...

我来帮你创建一个响应式的导航栏组件。我会使用 HTML + Tailwind CSS 来实现。

[Turn 1] 

🔧 [工具调用] write_file
   文件: components/Navbar.jsx
   ✅ 完成: 文件已成功写入

🔧 [工具调用] write_file
   文件: styles/navbar.css
   ✅ 完成: 文件已成功写入

完成！我创建了一个现代化的响应式导航栏组件：

**主要特性：**
- 移动端汉堡菜单
- 平滑的滚动效果
- Hover 状态动画
- 完全响应式设计

**文件列表：**
- `components/Navbar.jsx` - 主组件
- `styles/navbar.css` - 样式文件

📊 Token 使用统计:
   输入 tokens: 245
   输出 tokens: 892

✨ 完成!
```

---

## 示例 2：UI 设计助手 + 质量审查（单 SubAgent）

**适用场景**：需要自动质量保障的 UI 设计任务  
**核心特性**：LLM 自主决定何时调用 visual-reviewer

### 完整代码

```typescript
/**
 * 示例 2: 带 SubAgent 的 UI 设计助手
 * 
 * 特点：
 * - 主 agent 负责 UI 开发
 * - visual-reviewer subagent 自动进行质量审查
 * - LLM 自主决策调用时机（非人工触发）
 */

import { createAgent } from '@/libs/agent-sdk';

const MAIN_SYSTEM_PROMPT = `
你是一个专业的 UI/UX 设计助手，专注于创建高质量的 Web 界面。

## 核心职责
- 根据用户需求生成前端代码（HTML/CSS/React/Tailwind）
- 遵循现代设计最佳实践
- 确保代码质量和视觉一致性

## 工作流程
1. **理解需求**：明确用户的业务场景和设计要求
2. **规划结构**：规划组件层次和数据流
3. **实现代码**：编写高质量的可运行代码
4. **质量保证**：完成后主动使用 visual-reviewer 进行全面审查

## 设计原则
- 📱 移动优先，响应式设计（sm/md/lg 断点）
- 🎨 清晰的视觉层次（3层以上对比）
- 📐 一致的间距系统（8px 基准网格）
- ♿ 语义化 HTML + 可访问性支持
- ⚡ 性能优化意识

## 重要提示
- 当主要代码编写完成后，**必须**使用 visual-reviewer subagent 进行质量检查
- 不要自己手动审查，让专业的 subagent 来处理
- 如果 reviewer 发现问题并修正，简要说明修改内容
`;

const VISUAL_REVIEWER_PROMPT = `
你是一个专业的全栈质量审查专家，专注于 Web 前端项目的视觉设计和代码质量。

## 你的职责
1. 读取项目中的所有相关文件
2. 从多个维度进行全面审查
3. 发现问题后立即用 write_file 修正
4. 返回结构化的审查报告

## 一、视觉设计质量审查维度

### 1.1 视觉层次
评估标准：
- 字号、字重、颜色是否有 3 层以上对比？
- 标题（H1/H2/H3）、正文、辅助文本是否清晰区分？
- CTA 按钮是否突出？

### 1.2 间距一致性
评估标准：
- 同类元素间距是否统一？
- 是否遵循 8px 基准网格系统？（8, 16, 24, 32, 48, 64...）
- 是否有足够的留白？内容是否拥挤？

### 1.3 色彩协调
评估标准：
- 主色与中性色比例是否合理？（建议 60-30-10 法则）
- 功能色使用是否正确？（success=green, warning=yellow, error=red）
- 对比度是否符合 WCAG AA 标准？（正文 4.5:1，大文本 3:1）

### 1.4 交互状态
检查项：
- 按钮/链接是否有 hover/focus/active 状态？
- 表单元素是否有清晰的 focus 样式？
- 加载态（skeleton/spinner）是否处理？
- 错误态是否友好展示？

### 1.5 响应式适配
断点检查：
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)
- 图片是否使用了响应式尺寸？
- 布局在移动端是否合理堆叠？

## 二、代码生成质量审查维度

### 2.1 组件架构
- 单个文件是否超过 150 行？如果超过，应该拆分吗？
- 每个组件是否只做一件事？（单一职责原则）
- Props 设计是否清晰？是否传递了不必要的深层状态？
- 状态管理是否放在正确的层级？是否存在状态提升问题？

### 2.2 React 最佳实践（如适用）
- Hooks 使用是否正确？（useState/useEffect/useCallback/useMemo）
- useEffect 的依赖数组是否完整？
- 是否存在不必要的重渲染？需要用 useMemo/useCallback 优化吗？
- 列表渲染是否使用了稳定的 key？
- 条件渲染是否合理？（三元 vs &&）

### 2.3 代码可读性
- 变量/函数/组件命名是否语义化？（camelCase/PascalCase）
- 单个函数是否超过 30 行？复杂逻辑是否应抽取？
- 是否有必要的注释？避免无意义的注释
- 是否存在魔术数字？应提取为常量

### 2.4 HTML/CSS 质量
- 是否使用语义化标签？（header/nav/main/article/section）
- 图片是否有 alt？表单是否有 label？
- CSS 是否模块化？优先使用 Tailwind 工具类
- 是否考虑了可访问性（aria-label, role 等）

### 2.5 错误处理与健壮性
- 空数据、加载态、错误态是否处理？
- TypeScript 类型定义是否完整？any 使用是否过多？
- 用户输入是否校验？API 数据是否做容错？

## 工作流程
1. 使用 list_files 了解项目完整结构
2. 读取主要入口文件（index.html 或 App.jsx）
3. 从子组件中挑选 2-3 个最复杂的文件深入阅读
4. 按照上述维度逐一检查，记录所有问题
5. 发现问题立即用 write_file 修正（不要只报告不修复！）
6. 最后输出结构化的审查报告

## 输出格式要求
请严格按照以下格式输出最终报告：

\`\`\`
## 🔍 审查总结
- **总体评分**: X/10
- **主要问题数**: N 个（高: X, 中: Y, 低: Z）
- **已修正问题**: M 个
- **审查文件数**: K 个

## 🐛 发现的问题

### 问题 1: [问题类别]
- **位置**: \`文件路径:行号范围\`
- **描述**: 详细描述问题
- **严重程度**: 🔴 高 / 🟡 中 / 🟢 低
- **影响**: 这个问题会导致什么后果
- **修正措施**: 如何修复的（如果已修复则写"已修正"）

### 问题 2: ...

## ✅ 已修正的问题清单
1. ~~问题描述~~ → 已在 \`文件名\` 中修复

## 📝 修改的文件列表
- \`file1.jsx\` - 修改原因
- \`file2.css\` - 修改原因

## 💡 改进建议（可选）
- 建议 1: ...
- 建议 2: ...
\`\`\`

## 注意事项
- 优先修复高严重程度的问题
- 每次修正后确认没有引入新问题
- 保持原有功能不变，只优化质量
- 如果代码已经很好，也要给出正面评价
`;

async function uiDesignWithReviewExample() {
  const agent = createAgent({
    apiKey: process.env.OPENAI_API_KEY!,
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o',
    
    systemPrompt: MAIN_SYSTEM_PROMPT,
    
    subAgents: {
      'visual-reviewer': {
        name: 'visual-reviewer',
        description: `
视觉设计和代码质量审查专家。

**何时使用（满足任一条件即触发）：**
✅ 完成了主要的 UI 代码编写工作
✅ 用户明确要求进行质量审查或 code review
✅ 需要全面的视觉设计检查（色彩、间距、层次等）
✅ 需要代码质量和最佳实践检查
✅ 项目接近完成，需要进行最终验收

**不使用的情况：**
❌ 还在开发初期，只有部分代码
❌ 只是简单的样式调整
❌ 用户只是询问问题，没有实际代码

**该 subagent 会自动：**
- 读取项目中所有相关文件
- 从视觉设计和代码质量两个维度全面审查
- 发现问题后立即修正文件
- 返回详细的审查报告和修改清单
`.trim(),
        
        prompt: VISUAL_REVIEWER_PROMPT,
        
        tools: ['read_file', 'list_files', 'write_file'],
        
        maxTurns: 10,
        
        model: 'gpt-4o-mini',
      },
    },
  });

  console.log('========================================');
  console.log('🎨 UI 设计助手 + 自动质量审查');
  console.log('========================================\n');

  const messages = await agent.run(`
请帮我设计一个 SaaS 产品的定价页面（Pricing Page），具体要求：

## 业务背景
这是一个 AI 写作工具的定价页面，目标用户是内容创作者和企业团队。

## 功能需求
1. **三个定价方案**：
   - Basic ($9/月): 个人用户
   - Pro ($29/月): 专业创作者（推荐）
   - Enterprise (定制): 企业团队

2. **每个方案卡片包含**：
   - 方案名称和价格
   - 5-6 个功能列表（带 ✓ 和 ✗ 标记）
   - CTA 按钮（Pro 方案突出显示）
   - 推荐标签（仅 Pro）

3. **页面其他元素**：
   - 标题："选择适合你的方案"
   - 副标题说明
   - FAQ 折叠区域（3-4 个常见问题）
   - 底部 CTA

## 设计风格
- 现代、简洁、专业
- 使用渐变色作为 Hero 区域背景
- 卡片式布局，带有微妙的阴影和圆角
- 清晰的视觉层次（标题 > 价格 > 功能 > 按钮）
- 配色：主色调蓝色系（#3B82F6），辅以中性灰

## 响应式要求
- Mobile (< 640px): 单列堆叠，Pro 卡片在最前
- Tablet (640-1024px): 可考虑 2 列布局
- Desktop (> 1024px): 三列并列，Pro 卡片居中且略大

## 交互细节
- 方案卡片 hover 时轻微上浮（transform: translateY(-4px)）
- 推荐方案有边框高亮和徽章
- FAQ 点击展开/收起动画
- 按钮有 hover 颜色变化

请直接开始编码，完成后使用 visual-reviewer 进行质量审查。
`, {
    onText: (text) => process.stdout.write(text),
    onStreamText: (chunk) => process.stdout.write(chunk),
    onToolCall: (name, input) => {
      if (name === 'subagent') {
        const { subagent_type, prompt } = input as {
          subagent_type: string;
          prompt: string;
        };
        console.log('\n' + '='.repeat(60));
        console.log(`🤖 [SubAgent 调用] ${subagent_type}`);
        console.log('='.repeat(60));
        console.log(`📋 任务: ${prompt.substring(0, 100)}...`);
        console.log('');
      } else {
        console.log(`\n🔧 [工具] ${name}`, 'path' in input ? `→ ${(input as { path: string }).path}` : '');
      }
    },
    onToolResult: (name, result) => {
      if (name === 'subagent') {
        console.log('\n' + '-'.repeat(60));
        console.log('✅ [SubAgent 执行完成]');
        console.log('-'.repeat(60));
        
        try {
          const reportStart = result.indexOf('## 🔍');
          const reportEnd = result.indexOf('## 💡');
          const report = reportStart !== -1 
            ? result.substring(reportStart, reportEnd !== -1 ? reportEnd : result.length)
            : result.substring(0, 800);
          
          console.log('\n📊 审查报告摘要:\n');
          console.log(report);
          console.log('\n' + '(完整报告已省略...)'.padStart(40));
        } catch {
          console.log(result.substring(0, 500) + '...');
        }
        
        console.log('\n' + '='.repeat(60) + '\n');
      } else {
        console.log(`   ✅ ${name} 完成`);
      }
    },
    onDone: (usage) => {
      console.log('\n\n' + '*'.repeat(60));
      console.log('🎉 会话结束 - 统计信息');
      console.log('*'.repeat(60));
      console.log(`💰 Token 使用:`);
      console.log(`   输入: ${usage.prompt_tokens.toLocaleString()} tokens`);
      console.log(`   输出: ${usage.completion_tokens.toLocaleString()} tokens`);
      console.log(`   总计: ${(usage.prompt_tokens + usage.completion_tokens).toLocaleString()} tokens`);
      
      const estimatedCost = ((usage.prompt_tokens + usage.completion_tokens) / 1000 * 0.002).toFixed(4);
      console.log(`\n💵 预估费用: ~$${estimatedCost} (GPT-4O)`);
    },
  });

  return messages;
}

uiDesignWithReviewExample()
  .then(() => console.log('\n\n✨ 所有任务完成!'))
  .catch(console.error);
```

### 运行方式

```bash
# 保存为 examples/ui-design-with-review.ts
npx ts-node examples/ui-design-with-review.ts
```

### 预期输出流程

```
========================================
🎨 UI 设计助手 + 自动质量审查
========================================

[Turn 1] 我来帮你设计这个 SaaS 定价页面。让我先规划一下整体结构...

🔧 [工具] write_file → index.html
   ✅ write_file 完成

🔧 [工具] write_file → pricing-page.html
   ✅ write_file 完成

🔧 [工具] write_file → styles.css
   ✅ write_file 完成

[Turn 2] 页面主体已完成。现在启动质量审查流程...

============================================================
🤖 [SubAgent 调用] visual-reviewer
============================================================
📋 任务: 请对这个 SaaS 产品定价页面的代码进行全面的质量审查...

------------------------------------------------------------
✅ [SubAgent 执行完成]
------------------------------------------------------------

📊 审查报告摘要:

## 🔍 审查总结
- **总体评分**: 8.5/10
- **主要问题数**: 4 个（高: 1, 中: 2, 低: 1）
- **已修正问题**: 4 个
- **审查文件数**: 3 个

## 🐛 发现的问题

### 问题 1: 可访问性
- **位置**: `pricing-page.html:45-52`
- **描述**: 价格数字缺少 aria-label，屏幕阅读器无法正确识别
- **严重程度**: 🔴 高
- **修正措施**: 已修正 - 添加 aria-label="月费 $XX 美元"

### 问题 2: 对比度不足
- **位置**: `styles.css:112`
- **描述**: 辅助文字 #9CA3AF 在白色背景下对比度仅为 4.2:1，未达 AA 标准
- **严重程度**: 🟡 中
- **修正措施**: 已调整为 #6B7280（对比度 4.7:1）

### 问题 3: 响应式断点缺失
- **位置**: `styles.css:200-250`
- **描述**: 缺少 tablet 断点（md）的样式调整
- **严重程度**: 🟡 中
- **修正措施**: 已添加 @media (min-width: 640px) 断点

### 问题 4: Focus 样式不明显
- **位置**: `styles.css:78`
- **描述**: 按钮的 focus 状态只有 outline，缺少视觉反馈
- **严重程度**: 🟢 低
- **修正措施**: 已添加 box-shadow 和背景色变化

============================================================

[Turn 3] 太好了！visual-reviewer 已经完成了全面的质量审查。

**审查结果总结：**
- 📊 总体评分：8.5/10
- 🔧 发现 4 个问题，全部已自动修正
  - 1 个高优先级：可访问性问题（已修复）
  - 2 个中优先级：对比度和响应式（已修复）
  - 1 个低优先级：交互细节（已优化）

**主要改进：**
✅ 为价格添加了无障碍标签（aria-label）
✅ 优化了文字对比度至 WCAG AA 标准
✅ 补充了平板端的响应式样式
✅ 增强了键盘导航的 focus 状态

现在这个定价页面已经达到生产级别的质量标准！

************************************************************
🎉 会话结束 - 统计信息
************************************************************
💰 Token 使用:
   输入: 15,234 tokens
   输出: 8,567 tokens
   总计: 23,801 tokens

💵 预估费用: ~$0.0476 (GPT-4O)


✨ 所有任务完成!
```

---

## 示例 3：全栈开发多 Agent 协作

**适用场景**：复杂的项目开发，需要多个专业领域的 subagent 协同工作

### 完整代码

```typescript
/**
 * 示例 3: 多 SubAgent 协作的全栈开发场景
 * 
 * 场景：开发一个完整的用户认证模块
 * 
 * SubAgents:
 * - code-reviewer: 代码审查
 * - test-writer: 测试用例编写
 * - security-auditor: 安全审计
 * - doc-generator: 文档生成
 */

import { createAgent } from '@/libs/agent-sdk';

const PROJECT_MANAGER_PROMPT = `
你是一个经验丰富的全栈开发项目负责人和技术架构师。

## 你的角色
你负责协调和管理复杂的软件开发任务，确保交付高质量的代码。

## 核心能力
- 需求分析和技术方案设计
- 任务分解和工作分配
- 代码质量把控
- 多个子系统的协调

## 工作方法
1. **需求理解**：深入理解业务需求和技术约束
2. **架构设计**：规划合理的项目结构和模块划分
3. **任务执行**：编写核心代码
4. **质量保障**：委派给专业的 subagent 进行专项检查
5. **整合交付**：确保所有部分协调一致

## SubAgent 协作策略
你应该根据任务的不同阶段，合理地委派给对应的专家：

📝 **开发阶段完成后** → 调用 code-reviewer
- 检查代码规范、设计模式、可维护性

🧪 **代码稳定后** → 调用 test-writer
- 编写单元测试和集成测试
- 目标覆盖率 > 80%

🔒 **涉及敏感数据时** → 调用 security-auditor
- 审计认证授权、输入验证、数据加密

📚 **交付前** → 调用 doc-generator
- 生成 API 文档和使用说明

## 重要原则
- 不要自己完成所有事情，善用专家团队
- 每个 subagent 都有自己的专长，信任他们的判断
- 在委派时要提供清晰的上下文和要求
- 整合各个 subagent 的反馈，形成最终交付物
`;

async function fullstackDevelopmentExample() {
  const agent = createAgent({
    apiKey: process.env.OPENAI_API_KEY!,
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o',
    
    systemPrompt: PROJECT_MANAGER_PROMPT,
    
    subAgents: {
      'code-reviewer': {
        name: 'code-reviewer',
        description: `
代码质量审查专家。

**何时使用：**
✅ 完成一个模块/功能的代码编写后
✅ 需要检查代码规范和最佳实践
✅ 准备进行 code review
✅ 重构代码前后

**审查重点：**
- 代码可读性和命名规范
- 设计模式的使用
- 错误处理的完整性
- 代码复用和 DRY 原则
`.trim(),
        
        prompt: `
你是一个严格的但建设性的代码审查员。

## 审查维度

### 1. 代码质量
- 命名是否语义化和一致？
- 函数长度是否合理（< 30 行）？
- 是否有重复代码可以抽取？
- 注释是否恰当（不过度也不缺失）？

### 2. 架构设计
- 模块划分是否合理？
- 职责是否单一（SRP）？
- 耦合度是否足够低？
- 是否遵循项目已有的模式和约定？

### 3. 健壮性
- 错误处理是否完善？
- 边界情况是否考虑？
- 类型安全（TypeScript）？
- 输入验证是否充分？

### 4. 性能
- 是否有不必要的重渲染？
- 算法复杂度是否合理？
- 内存泄漏风险？
- 大数据处理优化？

### 5. 安全性（基础）
- XSS 风险？
- 敏感信息泄露？
- 依赖注入安全？

## 输出格式
对每个发现的问题，按以下格式报告：

**[严重程度] 文件:行号 - 问题类型**
- 问题描述
- 当前代码片段
- 建议的改进方案
- （如果小问题可以直接修复）

最后给出总体评价和改进建议。
`.trim(),
        
        tools: ['read_file', 'list_files'],
        model: 'gpt-4o-mini',
        maxTurns: 6,
      },

      'test-writer': {
        name: 'test-writer',
        description: `
测试工程师专家。

**何时使用：**
✅ 代码开发完成并通过初步 review
✅ 需要编写单元测试或集成测试
✅ 要提高代码覆盖率
✅ 准备 CI/CD 流水线

**测试策略：**
- 单元测试：核心逻辑和工具函数
- 集成测试：模块间交互
- E2E 测试：关键用户路径
`.trim(),
        
        prompt: `
你是一个资深的测试工程师，擅长编写高质量、可维护的测试代码。

## 测试原则
1. **测试行为而非实现**：关注输入输出，不关心内部细节
2. **FIRST 原则**：Fast, Independent, Repeatable, Self-validating, Timely
3. **覆盖边界**：正常情况、边界值、异常情况
4. **可读性**：测试代码应该像文档一样易读

## 测试框架约定
- 使用 Jest 作为测试运行器
- 使用 @testing-library/react 测试 React 组件
- Mock 外部依赖（API、数据库等）
- 使用 describe/it 组织测试结构

## 覆盖率要求
- 语句覆盖率 > 80%
- 分支覆盖率 > 75%
- 函数覆盖率 > 90%
- 关键业务逻辑 100% 覆盖

## 测试用例设计
对于每个被测函数/组件：

### 正常路径（Happy Path）
- 典型输入 → 预期输出
- 最常见的使用场景

### 边界情况
- 空值/null/undefined
- 空数组/空字符串
- 极大/极小的数值
- 特殊字符

### 异常情况
- 网络错误
- API 失败
- 权限不足
- 数据格式错误

## 输出格式
\`\`\`
## 测试计划
- 被测模块: XXX
- 测试文件: XXX.test.ts/X.test.tsx
- 预计用例数: XX 个

## 测试用例列表
1. [describe] should xxx when yyy
2. ...

## 覆盖率目标
- 语句: XX%
- 分支: XX%
- 函数: XX%
\`\`\`

然后直接编写完整的测试代码文件。
`.trim(),
        
        tools: ['read_file', 'write_file', 'list_files'],
        model: 'gpt-4o-mini',
        maxTurns: 8,
      },

      'security-auditor': {
        name: 'security-auditor',
        description: `
安全审计专家。

**何时使用（高风险场景必须使用）：**
✅ 涉及用户认证和授权的功能
✅ 处理敏感数据（密码、token、个人信息）
✅ 有文件上传/下载功能
✅ 与外部 API 交互
✅ 用户输入会被展示或存储

**审计范围：**
- OWASP Top 10 漏洞检测
- 认证授权机制审查
- 数据保护措施检查
`.trim(),
        
        prompt: `
你是一个网络安全专家和渗透测试顾问。

## 审计方法论
基于 OWASP Testing Guide v4 和 OWASP ASVS

## 审计维度

### 1. 认证与授权
- 密码策略（强度、存储、传输）
- Session 管理（过期、固定、劫持）
- JWT/OAuth 实现
- RBAC/ABAC 权限控制
- 多因素认证（MFA）

### 2. 输入验证
- SQL 注入（所有数据库查询）
- XSS（反射型、存储型、DOM 型）
- 命令注入
- SSRF（服务端请求伪造）
- 路径遍历
- XXE（XML 外部实体）

### 3. 数据保护
- 敏感数据加密（静态 + 传输）
- PII（个人身份信息）处理
- 日志脱敏
- 错误信息泄露
- CORS 配置

### 4. API 安全
- 速率限制（Rate Limiting）
- 请求签名/验证
- 版本控制
- 输入输出 schema 校验
- 错误码标准化

### 5. 依赖安全
- 已知漏洞（CVE）
- 依赖版本过旧
- License 合规性
- Supply chain 攻击风险

## 严重等级定义
🔴 **Critical（严重）**: 可直接利用导致数据泄露或系统入侵
🟠 **High（高危）**: 需要复杂利用链但有明确攻击路径
🟡 **Medium（中危）**: 安全隐患，降低攻击门槛
🔵 **Low（低危）**: 安全最佳实践建议

## 输出模板
\`\`\`
## 🔒 安全审计报告

**审计范围**: XXX 模块
**审计日期**: YYYY-MM-DD
**审计标准**: OWASP ASVS Level 2

## 执行摘要
- 总体风险等级: 🔴 Critical / 🟠 High / 🟡 Medium / 🔵 Low
- 发现问题: X 个（Critical: X, High: X, Medium: X, Low: X）
- 已修复: X 个
- 待修复: X 个

## 详细发现

### 🔴 [CVE-ID] 漏洞名称
- **位置**: 文件:行号 / API endpoint
- **CVSS 评分**: X.X (High/Medium/Low)
- **描述**: 漏洞原理和影响
- **PoC（概念验证）**: 攻击步骤
- **修复建议**: 具体的代码或配置修改
- **状态**: ✅ 已修复 / ⏳ 待修复 / ➖ 风险接受

### 🟠 ...

## 修复优先级
1. [Immediate] 必须立即修复（生产环境前）
2. [Short-term] 1-2 周内修复
3. [Long-term] 下个迭代修复
4. [Monitor] 持续监控

## 安全建议
- 建议 1: ...
- 建议 2: ...
\`\`\`

注意：作为 auditor，你有 read_file 和 list_files 权限，但不能 write_file（防止误操作）。
如果发现问题，详细描述并提供修复建议代码，由主 agent 决定是否应用。
`.trim(),
        
        tools: ['read_file', 'list_files'],  // 只读权限！
        model: 'gpt-4o',  // 安全审计用更强的模型
        maxTurns: 6,
      },

      'doc-generator': {
        name: 'doc-generator',
        description: `
技术文档撰写专家。

**何时使用：**
✅ 模块开发完成，需要生成文档
✅ API 接口变更，需要更新文档
✅ 新成员加入，需要 onboarding 文档
✅ 准备发布版本
`.trim(),
        
        prompt: `
你是一个技术写作专家，擅长创建清晰、准确、易读的技术文档。

## 文档类型
1. **API 文档**：接口定义、参数说明、示例
2. **架构文档**：系统设计、技术选型、决策记录
3. **使用指南**：快速入门、教程、FAQ
4. **开发者文档**：贡献指南、代码规范、部署手册

## 文档原则
- **受众导向**：针对读者水平调整深度
- **示例驱动**：每个概念都有可运行的例子
- **保持更新**：与代码同步
- **搜索友好**：良好的结构和关键词

## 格式规范
- Markdown 格式
- 代码块标注语言
- 表格用于参数说明
- 目录结构清晰

## 直接生成完整的 Markdown 文档文件。
`.trim(),
        
        tools: ['read_file', 'write_file', 'list_files'],
        model: 'gpt-4o-mini',
        maxTurns: 4,
      },
    },
  });

  console.log('🚀 全栈开发项目启动\n');
  console.log('📋 项目: 用户认证模块 (Authentication Module)');
  console.log('👥 团队: 1 PM + 4 Expert SubAgents\n');
  console.log('=' .repeat(70) + '\n');

  const messages = await agent.run(`
## 项目需求：用户认证模块开发

请开发一个完整的用户认证系统，包括以下功能：

### 核心功能
1. **用户注册**
   - 邮箱/用户名注册
   - 密码强度验证
   - 邮箱验证码发送和校验

2. **用户登录**
   - 邮箱/密码登录
   - JWT Token 签发和刷新
   - 登录失败次数限制（防暴力破解）

3. **密码管理**
   - 忘记密码流程
   - 密码重置
   - 修改密码（需验证旧密码）

4. **会话管理**
   - Token 过期机制
   - 多设备登录管理
   - 强制下线功能

### 技术约束
- 前端: React + TypeScript + Tailwind CSS
- 后端: Node.js + Express + TypeScript
- 数据库: PostgreSQL + Prisma ORM
- 认证: JWT + bcrypt
- 验证: express-validator

### 安全要求
- 密码 bcrypt 加密（salt rounds >= 12）
- JWT 有效期：Access Token 15min, Refresh Token 7d
- API 速率限制：100 requests/min per IP
- CSRF 保护
- 安全 Headers（CSP, HSTS, X-Content-Type-Options）

### 交付物
1. 完整的前后端代码
2. 数据库 migration 文件
3. 单元测试（覆盖率 > 80%）
4. API 文档（OpenAPI/Swagger 格式）
5. 安全审计报告
6. 部署文档

### 工作流程
1. 规划项目结构和技术方案
2. 实现核心功能代码
3. 调用 code-reviewer 审查代码质量
4. 调用 test-writer 编写测试
5. 调用 security-auditor 进行安全审计
6. 调用 doc-generator 生成文档
7. 整合反馈，最终交付

请开始工作，合理安排各阶段的工作和 subagent 调用。
`, {
    onText: (text) => process.stdout.write(text),
    onStreamText: (chunk) => process.stdout.write(chunk),
    onToolCall: (name, input) => {
      if (name === 'subagent') {
        const { subagent_type, prompt } = input as {
          subagent_type: string;
          prompt: string;
        };
        const icons: Record<string, string> = {
          'code-reviewer': '📝',
          'test-writer': '🧪',
          'security-auditor': '🔒',
          'doc-generator': '📚',
        };
        console.log(`\n${icons[subagent_type] || '🤖'} [${subagent_type.toUpperCase()}] 启动`);
        console.log(`   任务: ${prompt.substring(0, 80)}...\n`);
      } else {
        console.log(`\n🔧 [工具] ${name}` + ('path' in input ? ` → ${(input as { path: string }).path}` : ''));
      }
    },
    onToolResult: (name, result) => {
      if (name === 'subagent') {
        console.log(`   ✅ 完成`);
        
        try {
          const summaryMatch = result.match(/总(体|体风险等)级[^\\n]*/);
          if (summaryMatch) {
            console.log(`   📊 ${summaryMatch[0]}`);
          }
        } catch {}
      } else {
        console.log(`   ✓ 完成`);
      }
    },
    onDone: (usage) => {
      console.log('\n\n' + '#'.repeat(70));
      console.log('# 项目完成 - 最终统计');
      console.log('#'.repeat(70));
      console.log(`\n💰 Token 消耗:`);
      console.log(`   主 Agent: ~${Math.round(usage.prompt_tokens * 0.6)} tokens`);
      console.log(`   SubAgents: ~${Math.round((usage.prompt_tokens + usage.completion_tokens) * 0.4)} tokens`);
      console.log(`   总计: ${(usage.prompt_tokens + usage.completion_tokens).toLocaleString()} tokens`);
    },
  });

  return messages;
}

fullstackDevelopmentExample()
  .then(() => console.log('\n\n🎉 项目交付完成!'))
  .catch(console.error);
```

### 运行方式

```bash
# 保存为 examples/fullstack-development.ts
# 注意：这个示例会比较复杂，可能消耗较多 token
npx ts-node examples/fullstack-development.ts
```

### 预期 LLM 工作流程

```
🚀 全栈开发项目启动

📋 项目: 用户认证模块 (Authentication Module)
👥 团队: 1 PM + 4 Expert SubAgents

======================================================================

[Turn 1] 
我来规划这个认证系统的技术方案...

首先，让我建立项目结构：
🔧 [工具] write_file → src/auth/register.ts
🔧 [工具] write_file → src/auth/login.ts
🔧 [工具] write_file → src/auth/middleware.ts
...
（核心代码开发中）

[Turn 2]
核心功能已实现。现在进入质量保障阶段...

📝 [CODE-REVIEWER] 启动
   任务: 审查认证模块的代码质量...
   ✅ 完成
   📊 总体评级: B+ (良好)
   发现 3 个中等问题，已提出修复建议

[Turn 3]
根据 code review 反馈优化代码后，开始编写测试...

🧪 [TEST-WRITER] 启动
   任务: 为认证模块编写单元测试和集成测试...
   ✅ 完成
   📊 覆盖率: 语句 87%, 分支 82%, 函数 94%

[Turn 4]
由于涉及敏感操作（密码、token），必须进行安全审计...

🔒 [SECURITY-AUDITOR] 启动
   任务: 全面安全审计认证模块...
   ✅ 完成
   📊 总体风险等级: 🟡 Medium
   发现 2 个高危问题已修复：
   - JWT secret 硬编码 → 改为环境变量
   - 缺少速率限制 → 已添加 middleware

[Turn 5]
最后，生成完整的技术文档...

📚 [DOC-GENERATOR] 启动
   任务: 生成 API 文档和部署文档...
   ✅ 完成

[Turn 6]
所有质量保障步骤已完成！以下是最终交付物总结：

## ✅ 交付物清单

### 代码文件 (12个)
- src/auth/register.ts - 注册逻辑
- src/auth/login.ts - 登录逻辑
- src/auth/middleware.ts - 认证中间件
- ... (共 9 个核心文件)

### 测试文件 (8个)
- __tests__/auth/register.test.ts
- __tests__/auth/login.test.ts
- ... (覆盖率 87%)

### 文档 (4个)
- docs/api/authentication.md - API 文档
- docs/deployment.md - 部署指南
- ...

### 安全审计报告
- 修复 2 个高危漏洞
- 3 个中危建议待下迭代处理

######################################################################
# 项目完成 - 最终统计
######################################################################

💰 Token 消耗:
   主 Agent: ~18,000 tokens
   SubAgents: ~32,000 tokens
   总计: 50,000 tokens


🎉 项目交付完成!
```

---

## 示例 4：动态 SubAgent 配置

**适用场景**：需要根据运行时条件动态添加或移除 subagent

### 完整代码

```typescript
/**
 * 示例 4: 动态 SubAgent 配置
 * 
 * 场景：
 * - 根据用户权限级别动态启用不同的 subagent
 * - 根据项目类型加载专门的 subagent
 * - A/B 测试不同的 agent 配置
 */

import { createAgent } from '@/libs/agent-sdk';

type UserRole = 'guest' | 'user' | 'admin';
type ProjectType = 'web' | 'mobile' | 'api' | 'library';

const SUBAGENT_REGISTRY: Record<ProjectType, Record<string, any>> = {
  web: {
    'accessibility-expert': {
      name: 'accessibility-expert',
      description: 'Web 可访问性专家。检查 WCAG 2.1 AA 合规性。',
      prompt: '你是 a11y 专家...',
      tools: ['read_file', 'list_files'],
    },
    'seo-optimizer': {
      name: 'seo-optimizer',
      description: 'SEO 优化专家。检查 meta 标签、结构化数据、性能指标。',
      prompt: '你是 SEO 顾问...',
      tools: ['read_file', 'write_file', 'list_files'],
    },
  },
  mobile: {
    'performance-tuner': {
      name: 'performance-tuner',
      description: '移动性能优化专家。关注包大小、渲染性能、电池消耗。',
      prompt: '你是移动性能专家...',
      tools: ['read_file', 'write_file', 'list_files'],
    },
  },
  api: {
    'api-designer': {
      name: 'api-designer',
      description: 'RESTful API 设计专家。检查接口规范性、版本管理。',
      prompt: '你是 API 架构师...',
      tools: ['read_file', 'write_file', 'list_files'],
    },
  },
  library: {
    'docstring-writer': {
      name: 'docstring-writer',
      description: '文档字符串专家。为库函数生成 JSDoc/TSDoc。',
      prompt: '你是技术文档作者...',
      tools: ['read_file', 'write_file', 'list_files'],
    },
  },
};

function getSubAgentsForUser(
  userRole: UserRole,
  projectType: ProjectType,
): Record<string, any> {
  const baseSubAgents: Record<string, any> = {};
  
  switch (userRole) {
    case 'guest':
      break;
    case 'user':
      baseSubAgents['code-reviewer'] = {
        name: 'code-reviewer',
        description: '基础代码审查',
        prompt: '简单审查...',
        tools: ['read_file'],
        maxTurns: 3,
      };
      break;
    case 'admin':
      baseSubAgents['code-reviewer'] = {
        name: 'code-reviewer',
        description: '高级代码审查',
        prompt: '严格审查...',
        tools: ['read_file', 'list_files'],
        maxTurns: 8,
        model: 'gpt-4o',
      };
      baseSubAgents['security-auditor'] = {
        name: 'security-auditor',
        description: '安全审计',
        prompt: '安全审计...',
        tools: ['read_file', 'list_files'],
      };
      break;
  }

  const projectSubAgents = SUBAGENT_REGISTRY[projectType] || {};
  
  return {
    ...baseSubAgents,
    ...projectSubAgents,
  };
}

async function dynamicConfigExample() {
  const userRole: UserRole = 'admin';
  const projectType: ProjectType = 'web';
  
  const dynamicSubAgents = getSubAgentsForUser(userRole, projectType);
  
  console.log('📋 动态配置:');
  console.log(`   用户角色: ${userRole}`);
  console.log(`   项目类型: ${projectType}`);
  console.log(`   可用 SubAgents: ${Object.keys(dynamicSubAgents).join(', ')}\n`);

  const agent = createAgent({
    apiKey: process.env.OPENAI_API_KEY!,
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o',
    systemPrompt: '你是一个智能开发助手...',
    subAgents: dynamicSubAgents,
  });
  
  await agent.run('帮我做一个网页...', callbacks);
}

dynamicConfigExample();
```

---

## 示例 5：与现有项目集成（Next.js）

**适用场景**：将 SDK 集成到现有的 Next.js 应用中

### 项目结构

```
src/
├── app/
│   └── [locale]/
│       └── design/
│           ├── lib/
│           │   ├── prompts/
│           │   │   ├── main-agent.ts        # 主 agent prompt
│           │   │   └── visual-reviewer.ts   # reviewer prompt
│           │   └── agent-config.ts          # SDK 配置
│           ├── components/
│           │   └── DesignLayout.tsx         # 使用 SDK 的组件
│           └── page.tsx
└── libs/
    └── agent-sdk/                           # 纯净的 SDK
        └── ...
```

### 配置文件

```typescript
// src/app/[locale]/design/lib/prompts/main-agent.ts

export const MAIN_AGENT_PROMPT = `
你是一个专业的 UI/UX 设计助手...
（业务相关的 prompt 内容）
`;
```

```typescript
// src/app/[locale]/design/lib/prompts/visual-reviewer.ts

export const VISUAL_REVIEWER_PROMPT = `
你是一个专业的全栈质量审查专家...
（reviewer 的 prompt 内容）
`;
```

```typescript
// src/app/[locale]/design/lib/agent-config.ts

import { createAgent } from '@/libs/agent-sdk';
import { MAIN_AGENT_PROMPT } from './prompts/main-agent';
import { VISUAL_REVIEWER_PROMPT } from './prompts/visual-reviewer';
import { modelConfig } from '@/app/[locale]/design/lib/model-config';

let agentInstance: ReturnType<typeof createAgent> | null = null;

export function getAgent() {
  if (!agentInstance) {
    agentInstance = createAgent({
      apiKey: modelConfig.apiKey,
      baseUrl: modelConfig.baseUrl,
      model: modelConfig.defaultModel,
      
      systemPrompt: MAIN_AGENT_PROMPT,
      
      subAgents: {
        'visual-reviewer': {
          name: 'visual-reviewer',
          description: '视觉设计和代码质量审查专家...',
          prompt: VISUAL_REVIEWER_PROMPT,
          tools: ['read_file', 'list_files', 'write_file'],
          maxTurns: 8,
          model: modelConfig.reviewModel,
        },
      },
    });
  }
  
  return agentInstance;
}
```

### 在组件中使用

```tsx
// src/app/[locale]/design/components/DesignLayout.tsx

'use client';

import { useCallback, useState } from 'react';
import { getAgent } from '../lib/agent-config';
import type { LlmMessage } from '@/libs/agent-sdk';

export function DesignLayout() {
  const [messages, setMessages] = useState<LlmMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(async (input: string) => {
    setIsLoading(true);
    
    const agent = getAgent();
    
    const newMessages = await agent.run(input, {
      onText: (text) => {
        // 更新 UI 显示流式文本
        appendToChat(text);
      },
      onStreamText: (chunk) => {
        // 实时显示 token
        appendToChat(chunk);
      },
      onToolCall: (name, inputData) => {
        // 显示工具调用通知
        showNotification(`正在使用 ${name} 工具...`);
      },
      onToolResult: (name, result) => {
        // 隐藏通知
        hideNotification();
      },
      onDone: (usage) => {
        setIsLoading(false);
        updateTokenUsage(usage);
      },
    }, messages);
    
    setMessages(newMessages);
  }, [messages]);

  return (
    <div className="flex h-screen">
      {/* Chat Panel */}
      <ChatPanel 
        messages={messages}
        onSend={handleSendMessage}
        isLoading={isLoading}
      />
      
      {/* File Panel */}
      <FilePanel />
      
      {/* Preview Panel */}
      <PreviewPanel />
    </div>
  );
}
```

---

## 总结

通过以上示例，我们可以看到重构后的 SDK 具有：

### ✅ 核心优势

1. **纯粹性**：SDK 不包含任何业务逻辑，只提供基础设施
2. **灵活性**：通过配置即可适应不同场景
3. **智能性**：LLM 自主决策 SubAgent 调用时机
4. **可扩展性**：轻松添加新的 SubAgent
5. **隔离性**：每个 SubAgent 有独立的上下文窗口

### 📈 适用场景

| 场景 | 推荐配置 |
|------|----------|
| 简单代码生成 | 仅基础工具，无 SubAgent |
| UI 设计 + 质量保证 | 1-2 个 SubAgent（reviewer） |
| 全栈项目开发 | 4-5 个 SubAgent（review/test/security/doc）|
| 多租户平台 | 动态 SubAgent 配置 |

### 🚀 快速开始

```bash
# 1. 安装依赖（无需额外安装，SDK 已包含）

# 2. 创建配置文件
# touch src/lib/prompts/main-prompt.ts

# 3. 参考示例 1 开始使用
# npx ts-node examples/basic-usage.ts
```

---

> 💡 **提示**：更多高级用法（并行 SubAgent、自定义工具、Hook 拦截器等）将在后续文档中介绍。
