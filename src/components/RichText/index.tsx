import type { ReactNode } from 'react';

// These tags are available
type Tag = 'p' | 'b' | 'i';

type Props = {
  children: (tags: Record<Tag, (chunks: ReactNode) => ReactNode>) => ReactNode;
};

// 使用方式可以看：https://next-intl.dev/docs/usage/translations#rich-text-reuse-tags
export default function RichText({ children }: Props) {
  return (
    <div className="prose">
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
      })}
    </div>
  );
}
