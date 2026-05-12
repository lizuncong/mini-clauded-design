'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */

import type { Project } from '@/types/models/project';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { downloadAsZip } from '../../design/lib/download';

type ProjectCardProps = {
  project: Project;
  onDelete: (id: string) => void;
};

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    router.push(`/design?projectId=${project.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirm(true);
  };

  const handleDeleteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setShowConfirm(true);
    }
  };

  const confirmDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(project.id);
    setShowConfirm(false);
  };

  const cancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.state.files.length === 0) {
      return;
    }
    await downloadAsZip(project.state.files, project.title);
  };

  return (
    <>
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="group relative cursor-pointer rounded-lg border border-[#334466] bg-[#1a2744] p-4 transition-all hover:border-[#8bb4f9]"
        role="button"
        tabIndex={0}
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
          <span className="truncate text-sm font-medium text-[#e0e0e0]">
            {project.title}
          </span>
        </div>
        <p className="mb-3 line-clamp-2 text-xs text-[#888]">
          {project.requirement || '暂无描述'}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#555]">
            {new Date(project.createdAt).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handleDownload}
              disabled={project.state.files.length === 0}
              className="cursor-pointer rounded p-1 text-[#555] transition-colors hover:bg-[#2a2a4a] hover:text-[#8bb4f9] disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="下载代码"
              title={project.state.files.length === 0 ? '暂无代码产物' : '下载代码'}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </button>
            <button
              onClick={handleDelete}
              onKeyDown={handleDeleteKeyDown}
              className="cursor-pointer rounded p-1 text-[#555] transition-colors hover:bg-[#2a2a4a] hover:text-[#dc2626]"
              aria-label="删除项目"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showConfirm && (

        <dialog
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/75"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowConfirm(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setShowConfirm(false);
            }
          }}
          open
        >
          <div
            className="w-[360px] rounded-lg border border-[#334466] bg-[#1a2744] p-5"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
            }}
            role="document"
            tabIndex={0}
          >
            <h3 className="mb-2 text-sm font-medium text-[#e0e0e0]">
              确认删除
            </h3>
            <p className="mb-4 text-xs text-[#888]">
              确定要删除项目 &quot;
              {project.title}
              &quot; 吗？此操作无法撤销。
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={cancelDelete}
                className="cursor-pointer rounded-md bg-[#334466] px-4 py-1.5 text-xs text-[#ccc] hover:bg-[#445577]"
              >
                取消
              </button>
              <button
                onClick={confirmDelete}
                className="cursor-pointer rounded-md bg-[#dc2626] px-4 py-1.5 text-xs text-white hover:bg-[#b91c1c]"
              >
                删除
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
