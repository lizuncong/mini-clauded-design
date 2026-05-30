export type DesignFile = {
  path: string;
  content: string;
  size: number;
  createdAt: number;
  updatedAt: number;
};

type Listener = () => void;

export class FileStore {
  private store: Map<string, DesignFile> = new Map();
  private listeners: Set<Listener> = new Set();

  private notify(): void {
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

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
    this.notify();
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
    const deleted = this.store.delete(path);
    if (deleted) {
      this.notify();
    }
    return deleted;
  }

  clear(): void {
    this.store.clear();
    this.notify();
  }

  setFiles(files: DesignFile[]): void {
    this.store.clear();
    files.forEach((file) => {
      this.store.set(file.path, file);
    });
    this.notify();
  }

  toJSON(): Record<string, unknown>[] {
    return this.getAllFiles().map(f => ({
      path: f.path,
      content: f.content,
      size: f.size,
      createdAt: f.createdAt,
      updatedAt: f.updatedAt,
    }));
  }
}
