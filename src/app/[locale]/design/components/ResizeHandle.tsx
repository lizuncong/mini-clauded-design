'use client';

import { useCallback, useRef } from 'react';

type ResizeHandleProps = {
  onResize: (deltaX: number) => void;
};

export function ResizeHandle({ onResize }: ResizeHandleProps) {
  const startXRef = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isDragging.current = true;
      startXRef.current = e.clientX;

      const handleMouseMove = (ev: MouseEvent) => {
        if (!isDragging.current) {
          return;
        }
        onResize(ev.clientX - startXRef.current);
      };

      const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    },
    [onResize],
  );

  return (
    <button
      type="button"
      aria-label="拖拽调整面板宽度"
      className="w-1 shrink-0 cursor-col-resize border-none bg-transparent p-0 transition-colors hover:bg-[#8bb4f9]"
      onMouseDown={handleMouseDown}
    />
  );
}
