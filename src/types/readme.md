## 目录
```shell
src/
├── types/                      # 全局类型定义
│   ├── api/                    # API 相关类型
│   │   ├── response.ts         # 通用响应结构
│   │   ├── request.ts          # 通用请求参数
│   │   └── index.ts            # 统一导出
│   │
│   ├── models/                 # 业务实体/数据模型
│   │   ├── user.ts
│   │   ├── image.ts
│   │   └── index.ts
│   │
│   ├── components/             # 组件专用类型
│   │   ├── table.ts            # 表格组件配置
│   │   ├── form.ts             # 表单组件配置
│   │   └── index.ts
│   │
│   ├── utils/                  # 工具函数辅助类型
│   │   └── common.ts           # PickNullable, DeepPartial 等
│   │
│   └── global.ts               # 全局声明（Window, ProcessEnv 等）
│
├── services/                   # 服务层
│   └── image-service.ts        # 可引用 types/api, types/models
│
└── components/                 # 组件层
    └── ImageCard/              # 可引用 types/models, types/components
```
## 关键原则
| 原则          | 说明                                                            |
| ----------- | ------------------------------------------------------------- |
| **单向依赖**    | `models` → 无依赖；`api` → 依赖 `models`；`components` → 依赖 `models` |
| **不依赖具体实现** | `types/` 不引用 `services/`, `components/`, `libs/`              |
| **就近原则**    | 仅一个组件使用的类型，定义在组件内而非 `types/`                                  |
| **显式导出**    | 每个子目录有 `index.ts` 统一导出，外部只导入 `types/xxx`                      |

types/ 是项目的"契约层"
models 定义数据形状，api 定义通信契约，components 定义UI 配置，utils 提供类型工具 —— 全部保持纯类型、零依赖、单向引用。
