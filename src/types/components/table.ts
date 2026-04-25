// types/components/table.ts
import type { ReactNode } from 'react';

export type Column<T> = {
  key: keyof T | string;
  title: string;
  width?: number;
  render?: (value: T[keyof T], record: T) => ReactNode;
  sorter?: boolean;
};

export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  pagination?: boolean;
};
