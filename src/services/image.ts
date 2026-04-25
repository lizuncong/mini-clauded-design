import { request } from '@/libs/request';

export const getImageData = async () => {
  const res = await request.get<{ id: string; url: string; width: number; height: number }[]>({
    api: '/v1/images/search',
  });
  return res;
};
