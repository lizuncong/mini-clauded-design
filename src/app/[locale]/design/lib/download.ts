import type { DesignFile } from './types';
import JSZip from 'jszip';

export async function downloadAsZip(files: DesignFile[], projectName: string = 'project'): Promise<void> {
  if (files.length === 0) {
    return;
  }

  const zip = new JSZip();

  files.forEach((file) => {
    zip.file(file.path, file.content);
  });

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${projectName}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
