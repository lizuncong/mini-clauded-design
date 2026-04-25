// types/models/user.ts
export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
};

// 创建用户时的字段（排除 id, createdAt）
export type CreateUserInput = Omit<User, 'id' | 'createdAt'>;
