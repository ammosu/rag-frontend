import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronRight } from 'lucide-react';

interface ChatAreaProps {
  selectedWorkspace: string;
  selectedChat: string;
}

// 參考資料收合元件
const ReferenceCollapse: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-3xl">
      <div
        className="flex items-center cursor-pointer select-none px-3 py-2 bg-base-100 border-b border-base-200 rounded-t-md"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        tabIndex={0}
        role="button"
        title="點擊展開/收合參考資料"
      >
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">參考資料</span>
      </div>
      {open && (
        <div className="card bg-base-100 shadow-sm text-xs md:text-sm rounded-t-none rounded-b-md border-t-0">
          <div className="card-body p-3 md:p-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-base-200 rounded-md text-xs md:text-sm">
                <FileText size={16} className="text-primary" />
                <span className="text-xs md:text-sm text-base-content">報告A-12.pdf</span>
                <span className="badge badge-ghost ml-auto">2025-02-15</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-base-200 rounded-md text-xs md:text-sm">
                <FileText size={16} className="text-primary" />
                <span className="text-xs md:text-sm text-base-content">用戶研究2025-Q1.docx</span>
                <span className="badge badge-ghost ml-auto">2025-03-22</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-base-200 rounded-md text-xs md:text-sm">
                <FileText size={16} className="text-primary" />
                <span className="text-xs md:text-sm text-base-content">競爭分析報告.pptx</span>
                <span className="badge badge-ghost ml-auto">2025-03-30</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ChatArea: React.FC<ChatAreaProps> = ({ selectedWorkspace, selectedChat }) => {
  return (
    <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-4 md:space-y-6">
      {/* System Message */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold flex items-center justify-center w-full h-full">R</span>
          </div>
        </div>
        <div className="chat-bubble bg-base-100 text-base-content max-w-full md:max-w-3xl">
          <p>
            歡迎使用RAGsystem。您現在正在 <strong>{selectedWorkspace}</strong> 工作區中。
            此工作區包含10個文檔，共87MB資料。您可以開始提問，系統會基於這些資料回答您的問題。
          </p>
        </div>
      </div>

      {/* User Message */}
      <div className="chat chat-end">
        <div className="chat-bubble bg-primary text-primary-content max-w-full md:max-w-3xl">
          <p>請幫我總結最近三份研究報告的主要結論</p>
        </div>
        <div className="chat-image avatar">
          <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center">
            <span className="text-white font-bold flex items-center justify-center w-full h-full">U</span>
          </div>
        </div>
      </div>

      {/* System Response with Citations */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold flex items-center justify-center w-full h-full">R</span>
          </div>
        </div>
        <div className="chat-bubble bg-base-100 text-base-content max-w-full md:max-w-3xl">
          <p className="mb-4">
            根據最近的三份研究報告，主要結論如下：
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <p className="mb-1">
                市場策略需要調整以適應新興的AI技術環境，特別是在自動化流程方面有顯著的投資回報率。
                <span className="badge badge-outline badge-info ml-1">[報告A-12, 頁27]</span>
              </p>
            </li>
            <li>
              <p className="mb-1">
                用戶數據顯示客戶保留率在新界面實施後提高了23%，但仍需要解決移動端使用者的體驗問題。
                <span className="badge badge-outline badge-info ml-1">[用戶研究2025-Q1, 頁8-12]</span>
              </p>
            </li>
            <li>
              <p className="mb-1">
                競爭分析表明我們在核心功能上領先，但在第三方整合方面落後於主要競爭對手。建議在下一季度專注於API和插件生態系統的擴展。
                <span className="badge badge-outline badge-info ml-1">[競爭分析報告, 頁15-18]</span>
              </p>
            </li>
          </ol>
        </div>
      </div>
      {/* 參考資料區塊（預設收合，點擊展開） */}
      <div className="pl-14 md:pl-16">
        <ReferenceCollapse />
      </div>
    </div>
  );
};

export default ChatArea;