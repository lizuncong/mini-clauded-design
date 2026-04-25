// types/models/image.ts
export type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
  size: number; // 文件大小（字节）
  format: 'jpg' | 'png' | 'webp';
  uploadedBy: string; // user id
  createdAt: string;
};

// 前端展示用（可能添加计算属性）
export type ImageDisplay = {
  aspectRatio: number; // width / height
  formattedSize: string; // "2.5 MB"
} & Image;
