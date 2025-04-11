import React from 'react';
import { ChevronDown, Settings } from 'lucide-react';

interface HeaderProps {
  selectedWorkspace: string;
  selectedChat: string;
  onUserSettingsClick?: () => void;
  onMenuClick?: () => void; // 新增：手機漢堡選單觸發
}

const Header: React.FC<HeaderProps> = ({ selectedWorkspace, selectedChat, onUserSettingsClick, onMenuClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 text-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100 px-4 md:px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        {/* 手機漢堡選單按鈕 */}
        <button
          className="md:hidden mr-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={onMenuClick}
          aria-label="開啟側邊欄"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <h1 className="text-xl font-bold">RAG 系統</h1>
        </div>
        <div className="hidden sm:flex items-center space-x-2 border-l border-gray-700 pl-4">
          <h2 className="text-lg font-semibold">{selectedWorkspace}</h2>
          <span className="text-gray-500">/</span>
          <h3 className="text-md font-medium">{selectedChat}</h3>
          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">連線中</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 dark:border-gray-600 rounded-md py-2 px-4">
            <span>Claude 3.7 Sonnet</span>
            <ChevronDown size={16} />
          </button>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-700 border border-gray-600">
          <Settings size={20} className="text-gray-400 dark:text-gray-400" />
        </button>
        <button
          onClick={onUserSettingsClick}
          className="flex items-center space-x-2 pl-2 border-l border-gray-300 hover:bg-gray-100 rounded-md py-2 px-3 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-900 flex items-center justify-center text-sm font-semibold dark:bg-gray-600 dark:text-white">
            U
          </div>
          <span className="text-sm">User</span>
        </button>
      </div>
    </div>
  );
};

export default Header;