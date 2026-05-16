import { fileStore } from '../../lib/tools';

const MIME_TYPES: Record<string, string> = {
  css: 'text/css',
  js: 'application/javascript',
  jsx: 'application/javascript',
  json: 'application/json',
  svg: 'image/svg+xml',
  html: 'text/html',
  htm: 'text/html',
};

export const LANGUAGE_MAP: Record<string, string> = {
  html: 'html',
  htm: 'html',
  css: 'css',
  js: 'javascript',
  jsx: 'javascript',
  json: 'json',
  svg: 'xml',
  md: 'markdown',
};

export const snakeDesignTheme: {
  base?: 'vs' | 'vs-dark' | 'hc-black';
  inherit?: boolean;
  rules?: Array<{ token: string; foreground?: string; fontStyle?: string }>;
  colors?: Record<string, string>;
} = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '6A737D', fontStyle: 'italic' },
    { token: 'keyword', foreground: 'F472B6' },
    { token: 'string', foreground: '86EFAC' },
    { token: 'number', foreground: 'FBBF24' },
    { token: 'tag', foreground: '60A5FA' },
    { token: 'attribute.name', foreground: 'C084FC' },
    { token: 'attribute.value', foreground: '86EFAC' },
    { token: 'type', foreground: '38BDF8' },
  ],
  colors: {
    'editor.background': '#0d1117',
    'editor.foreground': '#e6edf3',
    'editorLineNumber.foreground': '#484f58',
    'editorLineNumber.activeForeground': '#8b949e',
    'editor.selectionBackground': '#264f7840',
    'editor.lineHighlightBackground': '#161b2240',
    'editorCursor.foreground': '#58a6ff',
    'editor.inactiveSelectionBackground': '#264f7820',
    'editorIndentGuide.background': '#21262d',
    'editorIndentGuide.activeBackground': '#30363d',
  },
};

const blobUrlCache = new Map<string, string>();

export function getBlobUrl(path: string): string | null {
  if (blobUrlCache.has(path)) {
    return blobUrlCache.get(path) || null;
  }
  const file = fileStore.getFile(path);
  if (!file) {
    return null;
  }
  const ext = path.split('.').pop()?.toLowerCase() || '';
  const mimeType = MIME_TYPES[ext] || 'text/plain';
  const url = URL.createObjectURL(new Blob([file.content], { type: mimeType }));
  blobUrlCache.set(path, url);
  return url;
}

export function invalidateBlobUrls(): void {
  for (const url of blobUrlCache.values()) {
    URL.revokeObjectURL(url);
  }
  blobUrlCache.clear();
}

export function resolveWithBlobUrls(htmlContent: string, basePath: string): string {
  let resolved = htmlContent;
  const dir = basePath.substring(0, basePath.lastIndexOf('/') + 1);

  resolved = resolved.replace(
    /<link\s[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
    (match, href) => {
      const fullPath = href.startsWith('/') ? href.slice(1) : dir + href;
      const url = getBlobUrl(fullPath);
      if (url) {
        return match.replace(href, url);
      }
      return match;
    },
  );

  resolved = resolved.replace(
    /<script\s[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi,
    (match, src) => {
      const fullPath = src.startsWith('/') ? src.slice(1) : dir + src;
      const isBabelScript = match.includes('type="text/babel"') || match.includes('type=\'text/babel\'');
      if (isBabelScript) {
        const file = fileStore.getFile(fullPath);
        if (file) {
          const srcAttrMatch = match.match(/src=["'][^"']+["']/) ?? '';
          const restOfTag = match.replace(String(srcAttrMatch), '');
          return `<script type="text/babel"${restOfTag.replace('<script', '').replace('></script>', '')}>${file.content}</script>`;
        }
      }
      const url = getBlobUrl(fullPath);
      if (url) {
        return match.replace(src, url);
      }
      return match;
    },
  );

  return resolved;
}

export function getLanguage(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase() || '';
  return LANGUAGE_MAP[ext] || 'plaintext';
}
