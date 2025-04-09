import React from 'react';
import { FileText } from 'lucide-react';

interface ChatAreaProps {
  selectedWorkspace: string;
  selectedChat: string;
}

const ChatArea: React.FC<ChatAreaProps> = ({ selectedWorkspace, selectedChat }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {/* System Message */}
      <div className="flex items-start space-x-3">
        <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white font-bold">R</span>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 max-w-3xl">
          <p className="text-gray-300">
            歡迎使用RAGsystem。您現在正在 <strong>{selectedWorkspace}</strong> 工作區中。
            此工作區包含10個文檔，共87MB資料。您可以開始提問，系統會基於這些資料回答您的問題。
          </p>
        </div>
      </div>

      {/* User Message */}
      <div className="flex items-start space-x-3 justify-end">
        <div className="bg-blue-600 rounded-lg p-4 max-w-3xl">
          <p>請幫我總結最近三份研究報告的主要結論</p>
        </div>
        <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white font-bold">U</span>
        </div>
      </div>

      {/* System Response with Citations */}
      <div className="flex items-start space-x-3">
        <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white font-bold">R</span>
        </div>
        <div className="space-y-4 max-w-3xl">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="mb-4">
              根據最近的三份研究報告，主要結論如下：
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <p className="mb-1">
                  市場策略需要調整以適應新興的AI技術環境，特別是在自動化流程方面有顯著的投資回報率。
                  <span className="bg-gray-700 text-blue-400 text-xs px-1 py-0.5 rounded ml-1">[報告A-12, 頁27]</span>
                </p>
              </li>
              <li>
                <p className="mb-1">
                  用戶數據顯示客戶保留率在新界面實施後提高了23%，但仍需要解決移動端使用者的體驗問題。
                  <span className="bg-gray-700 text-blue-400 text-xs px-1 py-0.5 rounded ml-1">[用戶研究2025-Q1, 頁8-12]</span>
                </p>
              </li>
              <li>
                <p className="mb-1">
                  競爭分析表明我們在核心功能上領先，但在第三方整合方面落後於主要競爭對手。建議在下一季度專注於API和插件生態系統的擴展。
                  <span className="bg-gray-700 text-blue-400 text-xs px-1 py-0.5 rounded ml-1">[競爭分析報告, 頁15-18]</span>
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="mb-2 text-sm font-medium text-gray-400">參考資料</div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-gray-700 rounded-md">
                <FileText size={16} className="text-blue-400" />
                <span className="text-sm">報告A-12.pdf</span>
                <span className="bg-gray-600 text-xs px-2 py-0.5 rounded ml-auto">2025-02-15</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-700 rounded-md">
                <FileText size={16} className="text-blue-400" />
                <span className="text-sm">用戶研究2025-Q1.docx</span>
                <span className="bg-gray-600 text-xs px-2 py-0.5 rounded ml-auto">2025-03-22</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-700 rounded-md">
                <FileText size={16} className="text-blue-400" />
                <span className="text-sm">競爭分析報告.pptx</span>
                <span className="bg-gray-600 text-xs px-2 py-0.5 rounded ml-auto">2025-03-30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;