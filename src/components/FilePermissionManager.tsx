import React, { useState } from "react";

export interface FilePermission {
  fileId: string;
  fileName: string;
  allowedWorkspaces: string[];
}

interface FilePermissionManagerProps {
  files: FilePermission[];
  workspaces: string[];
  onChange: (updated: FilePermission[]) => void;
  onClose: () => void;
}

const FilePermissionManager: React.FC<FilePermissionManagerProps> = ({
  files,
  workspaces,
  onChange,
  onClose,
}) => {
  const [localPermissions, setLocalPermissions] = useState<FilePermission[]>(files);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // 搜尋與分頁
  const filteredFiles = localPermissions.filter(file =>
    file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filteredFiles.length / pageSize));
  const pagedFiles = filteredFiles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleWorkspaceToggle = (fileId: string, workspace: string) => {
    setLocalPermissions((prev) =>
      prev.map((file) =>
        file.fileId === fileId
          ? {
              ...file,
              allowedWorkspaces: file.allowedWorkspaces.includes(workspace)
                ? file.allowedWorkspaces.filter((w) => w !== workspace)
                : [...file.allowedWorkspaces, workspace],
            }
          : file
      )
    );
  };

  const handleSave = () => {
    onChange(localPermissions);
  };

  // 點擊遮罩區域關閉
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleMaskClick}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded shadow-lg w-[90vw] max-w-6xl max-h-[90vh] p-8 overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
          onClick={onClose}
          aria-label="關閉"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">文件權限管理</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <input
            type="text"
            className="input input-bordered w-full md:w-64"
            placeholder="搜尋文件名稱"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span className="text-sm">
              共 {filteredFiles.length} 筆，{totalPages} 頁
            </span>
            <button
              className="btn btn-xs"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              上一頁
            </button>
            <span className="text-sm">{currentPage} / {totalPages}</span>
            <button
              className="btn btn-xs"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              下一頁
            </button>
          </div>
        </div>
        {workspaces.length > 10 && (
          <div className="mb-2 text-sm text-yellow-600 dark:text-yellow-300">
            工作區數量過多時，請橫向捲動表格，或考慮增加搜尋/分頁功能以提升使用體驗。
          </div>
        )}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2 border sticky left-0 bg-gray-100 dark:bg-gray-800 z-10">文件名稱</th>
                {workspaces.map((ws) => (
                  <th key={ws} className="p-2 border">{ws}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pagedFiles.map((file) => (
                <tr key={file.fileId}>
                  <td className="p-2 border sticky left-0 bg-white dark:bg-gray-900 z-10">{file.fileName}</td>
                  {workspaces.map((ws) => (
                    <td key={ws} className="p-2 border text-center">
                      <input
                        type="checkbox"
                        checked={file.allowedWorkspaces.includes(ws)}
                        onChange={() => handleWorkspaceToggle(file.fileId, ws)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            儲存權限設定
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePermissionManager;