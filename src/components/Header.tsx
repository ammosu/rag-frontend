import React from 'react';
import { ChevronDown, Settings } from 'lucide-react';

interface HeaderProps {
  selectedWorkspace: string;
  selectedChat: string;
  onUserSettingsClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedWorkspace, selectedChat, onUserSettingsClick }) => {
  return (
    <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <h1 className="text-xl font-bold">RAG 系統</h1>
        </div>
        <div className="flex items-center space-x-2 border-l border-gray-700 pl-4">
          <h2 className="text-lg font-semibold">{selectedWorkspace}</h2>
          <span className="text-gray-500">/</span>
          <h3 className="text-md font-medium">{selectedChat}</h3>
          <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full">連線中</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-md py-2 px-4 border border-gray-600">
            <span>Claude 3.7 Sonnet</span>
            <ChevronDown size={16} />
          </button>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-700 border border-gray-600">
          <Settings size={20} className="text-gray-400" />
        </button>
        <button
          onClick={onUserSettingsClick}
          className="flex items-center space-x-2 pl-2 border-l border-gray-700 hover:bg-gray-700 rounded-md py-2 px-3"
        >
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm font-semibold">
            U
          </div>
          <span className="text-sm">User</span>
        </button>
      </div>
    </div>
  );
};

export default Header;