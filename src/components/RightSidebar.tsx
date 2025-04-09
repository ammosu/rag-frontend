import React from 'react';
import { PlusCircle, FileText } from 'lucide-react';

const RightSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 border-l border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-medium">知識庫檔案</h2>
          <button className="p-1 rounded-md hover:bg-gray-700">
            <PlusCircle size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-gray-700">
          <button className="py-2 px-3 border-b-2 border-blue-500 text-blue-400 text-sm font-medium">
            文件
          </button>
          <button className="py-2 px-3 text-gray-400 hover:text-gray-300 text-sm font-medium">
            對話資訊
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <div className="text-sm text-gray-400 mb-1">10個檔案 | 87MB</div>

        {[
          { name: '報告A-12.pdf', size: '28MB', date: '2025-02-15', extra: '32 pages' },
          { name: '用戶研究2025-Q1.docx', size: '15MB', date: '2025-03-22', extra: '45 pages' },
          { name: '競爭分析報告.pptx', size: '22MB', date: '2025-03-30', extra: '18 slides' },
          { name: '產品規劃.xlsx', size: '4MB', date: '2025-01-10', extra: '8 sheets' },
          { name: '技術白皮書.pdf', size: '18MB', date: '2025-02-28', extra: '24 pages' },
        ].map((file) => (
          <div key={file.name} className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 cursor-pointer">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <FileText size={14} className="text-blue-400" />
                <span className="text-sm font-medium">{file.name}</span>
              </div>
              <span className="text-xs bg-gray-600 px-1.5 py-0.5 rounded">{file.size}</span>
            </div>
            <div className="text-xs text-gray-400">{file.date} | {file.extra}</div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">RAG系統狀態</div>
            <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full">在線</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">索引狀態</span>
            <span>最後更新: 10分鐘前</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">模型</span>
            <span>Claude 3.7 Sonnet</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="text-sm font-medium mb-2">當前對話資訊</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">創建時間</span>
              <span>2025-04-08</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">對話數量</span>
              <span>8 則訊息</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">檢索次數</span>
              <span>12 次</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;