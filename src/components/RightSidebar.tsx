import React from 'react';
import { PlusCircle, FileText } from 'lucide-react';

interface RightSidebarProps {
  show: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ show }) => {
  return (
    <div className={`w-64 bg-base-100 text-base-content border-l border-base-200 dark:bg-base-200 dark:text-base-content dark:border-base-300 flex flex-col md:flex transition-all duration-200 ${show ? '' : 'hidden'}`}>
      <div className="card rounded-none shadow-none border-b border-base-200 dark:border-base-300">
        <div className="card-body p-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium">知識庫檔案</h2>
            <button className="btn btn-sm btn-ghost">
              <PlusCircle size={16} className="text-base-content" />
            </button>
          </div>
          {/* Tab navigation */}
          <div className="tabs tabs-bordered mb-2">
            <a className="tab tab-active">文件</a>
            <a className="tab">對話資訊</a>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <div className="text-sm text-base-content/60 mb-1">10個檔案 | 87MB</div>
        <div className="space-y-2">
          {[
            { name: '報告A-12.pdf', size: '28MB', date: '2025-02-15', extra: '32 pages' },
            { name: '用戶研究2025-Q1.docx', size: '15MB', date: '2025-03-22', extra: '45 pages' },
            { name: '競爭分析報告.pptx', size: '22MB', date: '2025-03-30', extra: '18 slides' },
            { name: '產品規劃.xlsx', size: '4MB', date: '2025-01-10', extra: '8 sheets' },
            { name: '技術白皮書.pdf', size: '18MB', date: '2025-02-28', extra: '24 pages' },
          ].map((file) => (
            <div key={file.name} className="card card-compact bg-base-200 hover:bg-base-300 transition-colors cursor-pointer">
              <div className="card-body p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <FileText size={16} className="text-primary" />
                    <span className="text-sm font-medium">{file.name}</span>
                  </div>
                  <span className="badge badge-outline badge-info">{file.size}</span>
                </div>
                <div className="text-xs text-base-content/60">{file.date} | {file.extra}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card rounded-none shadow-none border-t border-base-200 dark:border-base-300">
        <div className="card-body p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">RAG系統狀態</div>
              <span className="badge badge-success badge-sm">在線</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-base-content/60">索引狀態</span>
              <span>最後更新: 10分鐘前</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-base-content/60">模型</span>
              <span>Claude 3.7 Sonnet</span>
            </div>
            <div className="divider my-2"></div>
            <div className="text-sm font-medium mb-2">當前對話資訊</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-base-content/60">創建時間</span>
              <span>2025-04-08</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-base-content/60">對話數量</span>
              <span>8 則訊息</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-base-content/60">檢索次數</span>
              <span>12 次</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;