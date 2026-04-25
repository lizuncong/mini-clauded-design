import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// 详见文档：https://next-intl.dev/docs/routing/navigation
export const { Link, redirect, usePathname, useRouter, getPathname }
  = createNavigation(routing);
