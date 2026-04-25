import type { DesignFile } from './types';

class FileStore {
  private store: Map<string, DesignFile> = new Map();

  writeFile(path: string, content: string): string {
    const now = Date.now();
    const existing = this.store.get(path);
    const file: DesignFile = {
      path,
      content,
      size: new Blob([content]).size,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };
    this.store.set(path, file);
    return `Written ${path} (${content.length} chars)`;
  }

  readFile(path: string): string {
    const file = this.store.get(path);
    if (!file) {
      return `Error: file not found: ${path}`;
    }
    return file.content;
  }

  listFiles(): string[] {
    return [...this.store.keys()];
  }

  getAllFiles(): DesignFile[] {
    return [...this.store.values()];
  }

  getFile(path: string): DesignFile | undefined {
    return this.store.get(path);
  }

  deleteFile(path: string): boolean {
    return this.store.delete(path);
  }

  clear(): void {
    this.store.clear();
  }
}

export const fileStore = new FileStore();
export { FileStore };
