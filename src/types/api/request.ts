// types/api/request.ts
export type PaginationParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type ImageSearchParams = {
  keyword?: string;
  category?: string;
} & PaginationParams;
