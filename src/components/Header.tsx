import React from 'react';
import { ChevronDown, Settings } from 'lucide-react';

interface HeaderProps {
  selectedWorkspace: string;
  selectedChat: string;
  onUserSettingsClick?: () => void;
  onMenuClick?: () => void; // 新增：手機漢堡選單觸發
  onToggleRightSidebar?: () => void; // 新增：知識庫開關
}

const Header: React.FC<HeaderProps> = ({ selectedWorkspace, selectedChat, onUserSettingsClick, onMenuClick, onToggleRightSidebar }) => {
  return (
    <div className="bg-base-100 border-b border-base-300 text-base-content px-4 md:px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        {/* 手機漢堡選單按鈕 */}
        <button
          className="md:hidden mr-2 btn btn-square btn-ghost"
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
          <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-base">
            R
          </div>
          <h1 className="text-xl font-bold">RAG 系統</h1>
        </div>
        <div className="hidden sm:flex items-center space-x-2 border-l border-base-300 pl-4">
          <h2 className="text-lg font-semibold">{selectedWorkspace}</h2>
          <span className="text-gray-500">/</span>
          <h3 className="text-md font-medium">{selectedChat}</h3>
          <span className="badge badge-success badge-sm">連線中</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button
          className="btn btn-outline btn-primary"
          onClick={onToggleRightSidebar}
          aria-label="切換知識庫檔案"
          title="顯示/隱藏知識庫"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="14" height="12" rx="2" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="14" y1="2" x2="14" y2="6" />
          </svg>
        </button>
        <div className="relative">
          <button className="btn btn-ghost flex items-center space-x-2">
            <span>Claude 3.7 Sonnet</span>
            <ChevronDown size={16} />
          </button>
        </div>
        <button className="btn btn-square btn-ghost">
          <Settings size={20} />
        </button>
        <button
          onClick={onUserSettingsClick}
          className="flex items-center space-x-2 pl-2 border-l border-base-300 hover:bg-base-200 rounded-md py-2 px-3"
        >
          <div className="w-8 h-8 rounded-full bg-neutral text-neutral-content flex items-center justify-center font-semibold text-base">
            U
          </div>
          <span className="text-sm">User</span>
        </button>
      </div>
    </div>
  );
};

export default Header;