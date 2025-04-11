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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-3/4 max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-white">上傳文件</h2>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-4 w-full text-sm text-gray-300 bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        {selectedFiles.length > 0 && (
          <div className="space-y-4">
            {selectedFiles.map((item, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md bg-gray-800">
                <div className="text-gray-300 mb-2">{item.file.name}</div>
                <div className="flex flex-wrap gap-2">
                  {workspaces.map((ws) => (
                    <button
                      key={ws}
                      type="button"
                      onClick={() => handleWorkspaceChange(index, ws)}
                      className={`px-3 py-1 rounded-full border transition-colors ${
                        item.workspaces.includes(ws)
                          ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
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
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            取消
          </button>
          <button
            onClick={handleUpload}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            確認上傳
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;