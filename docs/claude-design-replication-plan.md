# Claude Design 一比一复刻计划

## 一、源码分析总结

### 1.1 Claude Design 源码文件组成

| 文件 | 大小 | 功能 |
|------|------|------|
| `index-Bey6wlSl.js` | ~500KB+ | 主应用包：React 框架、UI 组件库、Agent 系统、工具定义、路由、状态管理 |
| `ProjectPage-isPgCnC2.js` | ~50KB+ | 项目/设计页面：聊天面板、文件面板、预览面板、Figma 对话框、PPTX 导出、模板画廊 |
| `templates-CR9CcxXm.js` | ~15KB+ | 模板定义：设计模板元数据、设计系统模板、提示词 |
| `inject-script-BwD7T_zc.js` | ~8KB | 设计模式注入脚本：可视化编辑、元素选择、拖拽、样式编辑、撤销重做 |
| `index-Pkt6MKtB.css` | ~6KB | 样式：Anthropic 字体、图标字体、基础重置 |
| `anthropicons-CiUXqoNg.woff2` | - | Anthropic 图标字体 |

### 1.2 Claude Design 核心架构

```
┌─────────────────────────────────────────────────────────┐
│                    Claude Design App                      │
├─────────────────────────────────────────────────────────┤
│  路由层                                                   │
│  ├── / (首页/画廊)                                        │
│  │   ├── ProjectsPage: 项目卡片列表                        │
│  │   └── GalleryPage: 模板画廊                             │
│  └── /design/:projectId (设计页)                          │
│      └── ProjectPage: 三栏布局                             │
├─────────────────────────────────────────────────────────┤
│  设计页三栏布局                                            │
│  ┌──────────┬──────────────────┬──────────┐              │
│  │ ChatPanel│  PreviewPanel    │FilePanel │              │
│  │ (可调整  │  (iframe 预览)   │ (文件树)  │              │
│  │  宽度)   │                  │          │              │
│  │          │  + DesignMode    │          │              │
│  │          │    Overlay       │          │              │
│  └──────────┴──────────────────┴──────────┘              │
├─────────────────────────────────────────────────────────┤
│  Agent 系统                                               │
│  ├── System Prompt (设计指南)                              │
│  ├── Tool Definitions (工具定义)                           │
│  ├── Streaming Chat (流式对话)                             │
│  ├── Context Management (上下文管理/snip)                  │
│  └── Multi-turn Agent Loop (多轮代理循环)                  │
├─────────────────────────────────────────────────────────┤
│  文件系统 (Virtual FS)                                    │
│  ├── read_file / write_file / list_files                  │
│  ├── Blob URL 预览                                        │
│  └── ZIP 下载                                             │
├─────────────────────────────────────────────────────────┤
│  设计模式 (Design Mode) - inject-script                   │
│  ├── 元素选择 (click/outline)                             │
│  ├── 样式编辑面板 (position/size/color/typography...)     │
│  ├── 拖拽移动/调整大小                                     │
│  ├── 插入/删除/复制/粘贴元素                               │
│  ├── 撤销/重做栈                                          │
│  ├── DOM 大纲树                                           │
│  ├── 定位模式切换 (static/relative/absolute/fixed)        │
│  ├── 同类元素批量选择                                      │
│  └── 内联文本编辑                                          │
├─────────────────────────────────────────────────────────┤
│  导出系统                                                  │
│  ├── PPTX 导出 (可编辑/截图模式)                           │
│  ├── 独立 HTML 导出 (资源内联)                             │
│  ├── PDF 导出                                             │
│  └── Handoff 文档生成                                      │
├─────────────────────────────────────────────────────────┤
│  集成                                                     │
│  ├── Figma 集成 (挂载/导入)                                │
│  ├── Canva 集成                                           │
│  └── GitHub 集成                                          │
├─────────────────────────────────────────────────────────┤
│  高级功能                                                  │
│  ├── Tweaks/Edit Mode (页面内调整控件)                     │
│  ├── Questions/Forms (交互式问答)                          │
│  ├── Todo 追踪                                            │
│  ├── 设计系统生成                                          │
│  └── 模板系统                                              │
└─────────────────────────────────────────────────────────┘
```

### 1.3 现有 snake-design 已实现功能

| 功能 | 状态 | 说明 |
|------|------|------|
| 项目列表页 | ✅ 已实现 | ProjectList + ProjectCard |
| 设计页三栏布局 | ✅ 已实现 | ChatPanel + PreviewPanel + FilePanel |
| ResizableLayout | ✅ 已实现 | 可拖拽调整面板宽度 |
| Agent 系统 | ✅ 已实现 | runAgent + 多轮循环 |
| 流式对话 | ✅ 已实现 | callZhipuStream |
| 文件系统 | ✅ 已实现 | fileStore (read/write/list) |
| Blob URL 预览 | ✅ 已实现 | PreviewPanel |
| ZIP 下载 | ✅ 已实现 | downloadAsZip |
| 上下文管理 | ✅ 已实现 | snip 工具 + trimMessages |
| 工具注册系统 | ✅ 已实现 | registerTool / dispatchTool |
| 国际化 | ✅ 已实现 | i18n (en/fr) |
| 数据库持久化 | ✅ 已实现 | IndexedDB (projects) |
| 设计模式 | ❌ 未实现 | inject-script 可视化编辑 |
| 模板系统 | ❌ 未实现 | 预建设计模板 |
| PPTX 导出 | ❌ 未实现 | |
| 独立 HTML 导出 | ❌ 未实现 | |
| PDF 导出 | ❌ 未实现 | |
| Handoff 文档 | ❌ 未实现 | |
| Figma 集成 | ❌ 未实现 | |
| Canva 集成 | ❌ 未实现 | |
| Tweaks 系统 | ❌ 未实现 | |
| Questions/Forms | ❌ 未实现 | |
| Todo 追踪 | ❌ 未实现 | |
| 设计系统生成 | ❌ 未实现 | |
| 画廊/模板浏览 | ❌ 未实现 | |
| 设备模式切换 | ❌ 未实现 | desktop/mobile |
| 项目重命名/删除 | ❌ 未实现 | |

---

## 二、复刻计划（按优先级分阶段）

### 阶段一：核心体验增强（P0 - 必须）

#### 1.1 设计模式 (Design Mode) — inject-script

这是 Claude Design 最核心的差异化功能——在预览 iframe 中直接可视化编辑元素。

**需要实现的功能：**

- [ ] **注入脚本基础设施**
  - 创建 `src/app/[locale]/design/lib/design-mode-script.ts`
  - 生成注入到预览 iframe 的 JS 脚本
  - 通过 `postMessage` 与父页面通信

- [ ] **元素选择系统**
  - `data-dm-ref` 属性标记可编辑元素
  - 点击选择元素（`elementsFromPoint`）
  - 多选支持（Shift/Cmd+Click）
  - 选中高亮覆盖层（overlay）
  - 悬停预览（hover rect）

- [ ] **样式属性编辑面板**
  - 位置/尺寸：top, left, right, bottom, width, height
  - 布局：display, flexDirection, justifyContent, alignItems, gap
  - 间距：padding, margin（四边独立）
  - 颜色：color, backgroundColor, borderColor
  - 排版：fontSize, fontWeight, fontFamily, lineHeight, letterSpacing, textAlign
  - 边框：borderWidth, borderStyle, borderColor, borderRadius
  - 阴影：boxShadow, textShadow
  - 其他：opacity, overflow, zIndex
  - SVG 属性：fill, stroke, strokeWidth

- [ ] **拖拽系统**
  - 拖拽移动元素（更新 left/top）
  - 拖拽调整大小（更新 width/height）
  - 拖拽重新排序（inline 模式）
  - 拖拽重新定位（absolute/fixed 模式）
  - 插入点指示线

- [ ] **元素操作**
  - 插入新元素（div/span/text）
  - 删除选中元素
  - 复制/粘贴元素
  - 分组/取消分组
  - 选择父元素/子元素/兄弟元素

- [ ] **撤销/重做栈**
  - 每次操作前保存快照
  - 支持样式变更、DOM 变更的撤销
  - 最多保存 100 步

- [ ] **DOM 大纲树**
  - 树形展示 DOM 结构
  - 点击节点选中对应元素
  - 懒加载展开子节点
  - 显示标签名、类名、文本预览

- [ ] **定位模式切换**
  - static（默认流式布局）
  - relative（相对定位）
  - absolute（绝对定位，相对于定位祖先）
  - fixed（固定定位，相对于视口）

- [ ] **同类元素选择**
  - 生成 CSS 选择器
  - 预览匹配元素（高亮框）
  - 批量选中同类元素

- [ ] **内联文本编辑**
  - contentEditable 模式
  - 双击进入编辑
  - Enter 提交，Esc 取消

- [ ] **属性编辑**
  - src/href/alt/placeholder 等 HTML 属性
  - input/textarea 的 value 属性

- [ ] **颜色/字体提取**
  - 从文档中提取使用的颜色
  - 从文档中提取使用的字体

**技术要点：**
- 注入脚本通过 `postMessage` 与父页面通信
- 父页面通过 `iframe.contentWindow.postMessage` 发送指令
- 消息类型：`selection`, `hover`, `rect`, `outline`, `insertHover`, `similarRects`
- 父页面渲染覆盖层（overlay）显示选中框、悬停框、插入线

#### 1.2 设计模式 UI 面板

在 PreviewPanel 上方或侧边添加设计模式工具栏和属性面板。

- [ ] **工具栏**
  - 选择模式切换（选择/插入）
  - 插入元素按钮（Div/Text）
  - 删除按钮
  - 撤销/重做按钮
  - 定位模式下拉（static/relative/absolute/fixed）
  - 分组/取消分组按钮
  - 复制/粘贴按钮

- [ ] **属性面板（右侧）**
  - 位置与尺寸区块
  - 布局区块（Flex/Grid）
  - 间距区块（Padding/Margin）
  - 颜色区块（Text/BG/Border）
  - 排版区块（Font/Size/Weight/Align）
  - 边框与圆角区块
  - 阴影区块
  - 其他属性区块

- [ ] **DOM 大纲面板（左侧或底部）**
  - 树形结构
  - 搜索过滤
  - 面包屑导航

#### 1.3 设备模式切换

- [ ] **Desktop/Mobile 切换**
  - Desktop: 100% 宽度
  - Mobile: 375px 宽度，居中显示，带手机框
  - 切换时保持预览内容

---

### 阶段二：模板与画廊（P1 - 重要）

#### 2.1 模板系统

- [ ] **模板定义**
  - 创建 `src/app/[locale]/design/lib/templates.ts`
  - 定义模板元数据：id, title, description, category, thumbnail, prompt
  - 模板分类：Landing Page, Dashboard, Form, Card, Navigation, etc.

- [ ] **模板画廊页**
  - 创建 `src/app/[locale]/(home)/components/TemplateGallery.tsx`
  - 卡片网格布局
  - 分类筛选
  - 悬停预览（iframe 加载模板 HTML）
  - 点击使用模板创建项目

- [ ] **设计系统模板**
  - 品牌设计系统模板
  - 包含：typography, colors, spacing, shadows, components
  - 生成流程：多步骤向导

#### 2.2 项目卡片增强

- [ ] **项目预览缩略图**
  - 自动截图或使用 iframe 预览
  - 悬停显示实时预览

- [ ] **项目操作菜单**
  - 重命名
  - 复制
  - 删除（带确认）
  - 导出

---

### 阶段三：导出系统（P1 - 重要）

#### 3.1 PPTX 导出

- [ ] **可编辑模式**
  - 使用 `gen_pptx` 工具（需要后端支持或 WASM 方案）
  - 字体处理策略选择（保持/替换为 web-safe/替换为 Google Fonts）
  - 幻灯片导航 JS 注入
  - 隐藏元素选择器

- [ ] **截图模式**
  - 每页截图为 PNG
  - 嵌入 PPTX 作为图片

- [ ] **导出对话框 UI**
  - 字体策略选择（Radio 列表）
  - 文件名输入
  - 生成按钮

#### 3.2 独立 HTML 导出

- [ ] **资源内联**
  - CSS 内联到 `<style>`
  - JS 内联到 `<script>`
  - 图片转 Base64
  - 字体处理

- [ ] **缩略图生成**
  - SVG 缩略图作为加载占位

- [ ] **导出流程**
  - 复制文件到 `export/` 目录
  - 处理 `ext-resource-dependency` 元标签
  - 调用内联工具
  - 提供下载

#### 3.3 PDF 导出

- [ ] **打印样式**
  - `@media print` 规则
  - `@page` 设置
  - 分页控制（`break-before/after/inside`）
  - 移除交互元素

#### 3.4 Handoff 文档生成

- [ ] **文档结构**
  - README.md 模板
  - 设计 Token 提取
  - 组件清单
  - 交互说明

---

### 阶段四：高级交互（P2 - 可选）

#### 4.1 Tweaks/Edit Mode 系统

- [ ] **Tweaks 协议**
  - `__edit_mode_available` 消息
  - `__activate_edit_mode` / `__deactivate_edit_mode` 消息
  - `__edit_mode_set_keys` 持久化
  - `__edit_mode_dismissed` 关闭通知
  - `__edit_mode_chat` 建议发送

- [ ] **EDITMODE 标记解析**
  - 解析 `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` JSON 块
  - 合并更新并写回文件

- [ ] **Tweaks 组件库**
  - TweaksPanel（浮动面板 + 拖拽）
  - useTweaks hook（状态管理 + 持久化）
  - TweakSection / TweakSlider / TweakToggle / TweakRadio / TweakSelect / TweakText / TweakNumber / TweakColor / TweakButton
  - TweakSuggestionBar（建议输入）

#### 4.2 Questions/Forms 系统

- [ ] **表单渲染**
  - text-options（单选/多选）
  - svg-options（SVG 选项）
  - slider（数值滑块）
  - file（文件选择器）
  - freeform（自由文本）

- [ ] **表单交互**
  - 流式渲染问题
  - 自动提交超时（5 分钟）
  - 答案回传给 Agent

#### 4.3 Todo 追踪

- [ ] **Todo 解析**
  - 从 `update_todos` 工具调用中提取
  - 支持 add/remove/complete 操作

- [ ] **Todo 显示**
  - 进度条（已完成/总数）
  - 当前任务显示
  - 聊天消息中内联显示

---

### 阶段五：集成（P2 - 可选）

#### 5.1 Figma 集成

- [ ] **Figma 文件挂载**
  - 虚拟文件系统（VFS）
  - fig_ls / fig_read / fig_grep / fig_copy_files / fig_screenshot 工具
  - JSX 伪代码解析

- [ ] **Figma 导入对话框**
  - 页面/Frame 选择
  - 全选/部分选择

- [ ] **发送到 Figma**
  - `generate_figma_design` 工具

#### 5.2 Canva 集成

- [ ] **Canva 导入**
  - 自包含 HTML 打包
  - 公开 URL 暴露
  - Canva import job 创建

---

### 阶段六：基础设施完善（P0 - 必须）

#### 6.1 UI 组件库

Claude Design 使用了一套完整的 UI 组件库（styled-components），需要建立对应的组件体系：

- [ ] **基础组件**
  - Button（variant: primary/black/default/ghost, size: sm/md/lg）
  - IconButton（Ps 组件）
  - Input（TextField，带 leadingIcon）
  - Textarea（AutoResizeTextarea）
  - Toggle（Switch）
  - Checkbox（带 label/hint）
  - SegmentedControl（分段选择器）
  - Tabs（TabBar）
  - Popover（ContextMenu/Dropdown）
  - Modal（Dialog）
  - Badge/Tag（Chip）
  - Tooltip

- [ ] **布局组件**
  - ResizableLayout（已有，需增强）
  - SidePanel（可折叠侧边栏）
  - Stack（带标题的分组卡片）
  - ListItem（带 icon/title/subtitle/accessory）

- [ ] **反馈组件**
  - Toast/Notification
  - ProgressBar
  - Spinner/Loading

#### 6.2 设计 Token 系统

- [ ] **颜色系统**
  - bg: app, surface, panel, elevated, hover, active, selected
  - text: primary, secondary, tertiary, disabled, inverse
  - accent: primary, primaryHover, primaryActive, primaryBg, blue, blueHover, error, warning, black
  - border: default, subtle, strong, focus

- [ ] **间距系统**
  - 基于 4px 网格

- [ ] **阴影系统**
  - xs, sm, md, lg, xl

- [ ] **排版系统**
  - Anthropic Serif 字体（标题）
  - 系统字体栈（正文）

#### 6.3 状态管理

- [ ] **项目状态**
  - 当前项目 ID
  - 文件列表
  - 聊天消息
  - 活跃文件
  - 视图状态

- [ ] **持久化**
  - IndexedDB 存储（已有基础）
  - 项目自动保存
  - 会话恢复

---

## 三、文件结构规划

```
src/
├── app/
│   └── [locale]/
│       ├── (home)/
│       │   ├── page.tsx                    # 首页
│       │   └── components/
│       │       ├── HeroSection.tsx          # ✅ 已有
│       │       ├── HomeHeader.tsx           # ✅ 已有
│       │       ├── ModelsFooter.tsx         # ✅ 已有
│       │       ├── ProjectCard.tsx          # ✅ 已有（需增强）
│       │       ├── ProjectList.tsx          # ✅ 已有（需增强）
│       │       ├── TemplateGallery.tsx      # 🆕 模板画廊
│       │       └── CreateProjectDialog.tsx  # 🆕 创建项目对话框
│       │
│       └── design/
│           ├── page.tsx                     # ✅ 已有
│           ├── components/
│           │   ├── DesignLayout.tsx         # ✅ 已有（需大幅增强）
│           │   ├── ChatPanel/
│           │   │   ├── index.tsx            # ✅ 已有（需增强）
│           │   │   ├── ChatBubble.tsx       # ✅ 已有
│           │   │   ├── ToolCard.tsx         # ✅ 已有
│           │   │   ├── TodoCard.tsx         # 🆕 Todo 显示
│           │   │   └── QuestionForm.tsx     # 🆕 问答表单
│           │   ├── PreviewPanel/
│           │   │   ├── index.tsx            # ✅ 已有（需大幅增强）
│           │   │   ├── DesignModeOverlay.tsx# 🆕 设计模式覆盖层
│           │   │   ├── DeviceSwitcher.tsx   # 🆕 设备切换
│           │   │   └── PreviewToolbar.tsx   # 🆕 预览工具栏
│           │   ├── FilePanel/
│           │   │   ├── index.tsx            # ✅ 已有（需增强）
│           │   │   └── FileTree.tsx         # 🆕 文件树
│           │   ├── Header/
│           │   │   └── index.tsx            # ✅ 已有（需增强）
│           │   ├── PropertyPanel/
│           │   │   ├── index.tsx            # 🆕 属性编辑面板
│           │   │   ├── PositionSection.tsx  # 🆕 位置区块
│           │   │   ├── LayoutSection.tsx    # 🆕 布局区块
│           │   │   ├── SpacingSection.tsx   # 🆕 间距区块
│           │   │   ├── ColorSection.tsx     # 🆕 颜色区块
│           │   │   ├── TypographySection.tsx# 🆕 排版区块
│           │   │   ├── BorderSection.tsx    # 🆕 边框区块
│           │   │   └── ShadowSection.tsx    # 🆕 阴影区块
│           │   ├── OutlinePanel/
│           │   │   └── index.tsx            # 🆕 DOM 大纲树
│           │   ├── ExportDialog/
│           │   │   ├── PptxExportDialog.tsx # 🆕 PPTX 导出
│           │   │   ├── HtmlExportDialog.tsx # 🆕 HTML 导出
│           │   │   └── HandoffDialog.tsx    # 🆕 Handoff 导出
│           │   └── FigmaDialog/
│           │       └── index.tsx            # 🆕 Figma 导入
│           │
│           └── lib/
│               ├── agent.ts                 # ✅ 已有
│               ├── constants.ts             # ✅ 已有（需增强 system prompt）
│               ├── download.ts              # ✅ 已有
│               ├── file-store.ts            # ✅ 已有
│               ├── llm.ts                   # ✅ 已有
│               ├── tools.ts                 # ✅ 已有（需大幅增加工具）
│               ├── types.ts                 # ✅ 已有
│               ├── useFileStore.ts          # ✅ 已有
│               ├── design-mode-script.ts    # 🆕 注入脚本生成
│               ├── design-tokens.ts         # 🆕 设计 Token
│               ├── templates.ts             # 🆕 模板定义
│               ├── pptx-export.ts           # 🆕 PPTX 导出逻辑
│               ├── html-export.ts           # 🆕 HTML 导出逻辑
│               └── tweaks-protocol.ts       # 🆕 Tweaks 协议
│
├── components/
│   ├── ui/                                  # 🆕 UI 组件库
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Textarea/
│   │   ├── Toggle/
│   │   ├── Checkbox/
│   │   ├── SegmentedControl/
│   │   ├── Tabs/
│   │   ├── Popover/
│   │   ├── Modal/
│   │   ├── Badge/
│   │   ├── Tooltip/
│   │   ├── ListItem/
│   │   └── Stack/
│   ├── ResizableLayout/                     # ✅ 已有
│   └── RichText/                            # ✅ 已有
│
├── styles/
│   ├── global.css                           # ✅ 已有
│   └── tokens.css                           # 🆕 设计 Token CSS 变量
│
└── libs/
    ├── db/                                  # ✅ 已有
    └── i18n/                                # ✅ 已有
```

---

## 四、实施路线图

### 第 1 周：基础设施
- [ ] 建立 UI 组件库（Button, Input, Toggle, Checkbox, Tabs, Popover, Modal）
- [ ] 设计 Token 系统（CSS 变量 + TS 常量）
- [ ] 增强 ResizableLayout（支持三栏 + 折叠）

### 第 2 周：设计模式核心
- [ ] 实现 inject-script 基础框架（postMessage 通信）
- [ ] 元素选择系统（点击选择 + 高亮覆盖层）
- [ ] 样式属性编辑面板（位置/尺寸/颜色/排版）
- [ ] 撤销/重做栈

### 第 3 周：设计模式进阶
- [ ] 拖拽系统（移动/调整大小/重新排序）
- [ ] DOM 大纲树
- [ ] 元素操作（插入/删除/复制/粘贴/分组）
- [ ] 定位模式切换
- [ ] 同类元素选择

### 第 4 周：模板与导出
- [ ] 模板系统（模板定义 + 画廊页）
- [ ] PPTX 导出（可编辑模式 + 截图模式）
- [ ] 独立 HTML 导出
- [ ] 设备模式切换

### 第 5 周：高级功能
- [ ] Tweaks/Edit Mode 系统
- [ ] Questions/Forms 系统
- [ ] Todo 追踪
- [ ] PDF 导出
- [ ] Handoff 文档生成

### 第 6 周：集成与打磨
- [ ] Figma 集成
- [ ] Canva 集成
- [ ] UI 细节打磨
- [ ] 性能优化
- [ ] 移动端适配

---

## 五、关键技术决策

### 5.1 注入脚本方案

Claude Design 将编辑脚本作为字符串注入 iframe。我们采用相同方案：

```typescript
// src/app/[locale]/design/lib/design-mode-script.ts
export const DESIGN_MODE_SCRIPT = `
(function() {
  if (window.__DM) return;
  // ... 完整编辑逻辑
  window.__DM = DM;
})();
`;
```

通过 `iframe.srcdoc` 或 `blob URL` 注入脚本。

### 5.2 通信协议

父页面 ↔ iframe 通过 `postMessage` 通信：

**iframe → 父页面：**
- `selection`: 选中元素信息
- `hover`: 悬停元素信息
- `rect`: 选中元素位置更新
- `outline`: DOM 大纲树
- `insertHover`: 插入点信息
- `similarRects`: 同类元素位置

**父页面 → iframe：**
- `pick`: 点击选择
- `select`: 按 ref 选择
- `setStyle`: 设置样式
- `setStyles`: 批量设置样式
- `setAttr`: 设置属性
- `setText`: 设置文本
- `deleteSelected`: 删除选中
- `copy/paste`: 复制粘贴
- `undo`: 撤销
- `group`: 分组
- `insertSibling`: 插入兄弟元素
- `moveInline`: 移动元素
- `setPositionMode`: 设置定位模式
- `nav`: 导航（父/子/兄弟）
- `selectSimilar`: 选择同类
- `selectChildren/selectSiblings`: 选择子/兄弟元素
- `textEditBegin/Commit/Revert`: 内联文本编辑
- `dragBegin/Apply/End/Cancel`: 拖拽操作
- `snapshot`: DOM 快照
- `getDocumentColors/Fonts`: 提取颜色/字体

### 5.3 LLM 适配

当前使用智谱 GLM API，需要：
- 增强 System Prompt（参考 Claude Design 的设计指南）
- 增加更多工具定义（模板、导出、Figma 等）
- 支持流式工具调用

### 5.4 状态持久化

- 项目数据：IndexedDB（已有）
- 文件内容：内存 fileStore + IndexedDB 持久化
- 聊天历史：IndexedDB
- UI 状态：localStorage（侧栏宽度、设备模式等）

---

## 六、风险与注意事项

1. **注入脚本安全性**：注入的脚本在 iframe 中运行，需要防止 XSS
2. **跨域 iframe**：如果预览内容来自不同域，postMessage 通信需要验证 origin
3. **PPTX 生成**：需要后端服务或 WASM 方案，纯前端实现复杂
4. **Figma/Canva 集成**：依赖第三方 API，需要申请权限
5. **LLM 兼容性**：不同 LLM 对工具调用的支持程度不同
6. **性能**：大型 DOM 的注入脚本可能影响预览性能
