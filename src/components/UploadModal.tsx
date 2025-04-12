import React, { useState } from 'react';

interface UploadFile {
  file: File;
  workspaces: string[]; // 可見的workspace名稱
}

interface UploadModalProps {
  workspaces: string[]; // 所有workspace名稱
  onClose: () => void;
  onUpload: (files: UploadFile[]) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ workspaces, onClose, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files).map((file) => ({
      file,
      workspaces: [...workspaces], // 預設全部可見
    }));
    setSelectedFiles(filesArray);
  };

  const handleWorkspaceChange = (index: number, ws: string) => {
    setSelectedFiles((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const isSelected = item.workspaces.includes(ws);
        return {
          ...item,
          workspaces: isSelected
            ? item.workspaces.filter((w) => w !== ws)
            : [...item.workspaces, ws],
        };
      })
    );
  };

  const handleUpload = () => {
    onUpload(selectedFiles);
    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box w-3/4 max-w-3xl max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">上傳文件</h2>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full mb-4"
        />
        {selectedFiles.length > 0 && (
          <div className="space-y-4">
            {selectedFiles.map((item, index) => (
              <div key={index} className="p-3 border rounded-md bg-base-200">
                <div className="mb-2">{item.file.name}</div>
                <div className="flex flex-wrap gap-2">
                  {workspaces.map((ws) => (
                    <button
                      key={ws}
                      type="button"
                      onClick={() => handleWorkspaceChange(index, ws)}
                      className={`btn btn-xs rounded-full transition-colors ${
                        item.workspaces.includes(ws)
                          ? 'btn-primary'
                          : 'btn-outline'
                      }`}
                      title={item.workspaces.includes(ws) ? '點擊取消選取' : '點擊選取'}
                    >
                      {ws}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="btn btn-outline"
          >
            取消
          </button>
          <button
            onClick={handleUpload}
            className="btn btn-primary"
          >
            確認上傳
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;