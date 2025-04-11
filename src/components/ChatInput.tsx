import React from 'react';
import { MessageSquare, PlusCircle, Upload, Mic, Send } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (msg: string) => void;
  selectedChat: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ message, setMessage, selectedChat }) => {
  return (
    <div className="p-4 border-t border-gray-200 bg-white text-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
      <div className="flex items-center space-x-2 mb-2">
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:border-gray-600">
            <MessageSquare size={16} className="text-gray-400 dark:text-gray-400" />
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:border-gray-600 text-sm">
            <span>新建對話</span>
            <PlusCircle size={14} className="text-gray-400 dark:text-gray-400" />
          </button>
          {selectedChat !== '新對話' && (
            <button className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-red-100 text-gray-900 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 dark:border-gray-600 text-sm">
              <span>刪除當前對話</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:border-gray-600">
          <Upload size={20} className="text-gray-400 dark:text-gray-400" />
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-3 px-4 pr-10 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="輸入問題或指令..."
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <Mic size={20} />
          </button>
        </div>
        <button className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
          <Send size={20} />
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
        <span>提示: 您可以上傳文件或輸入查詢關鍵詞進行搜索</span>
        <span>RAG系統可能會出錯。請驗證重要信息。</span>
      </div>
    </div>
  );
};

export default ChatInput;