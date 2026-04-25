// types/api/response.ts
import type { Image, User } from '../models';

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  code: number;
};

// 具体业务响应
export type UserResponse = ApiResponse<User>;
export type ImageListResponse = ApiResponse<Image[]>;

// 分页响应
export type PaginatedResponse<T> = {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
};
