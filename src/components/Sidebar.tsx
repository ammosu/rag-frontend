import React from 'react';
import { PlusCircle, Database, ChevronDown, MessageSquare, Settings, Upload, Book } from 'lucide-react';
import { useState } from 'react';
import UploadModal from './UploadModal';
import FilePermissionManager from './FilePermissionManager';

interface Workspace {
  name: string;
  chats: string[];
}

interface SidebarProps {
  workspaces: Workspace[];
  generalChats: string[];
  selectedWorkspace: string;
  selectedChat: string;
  expandedWorkspaces: string[];
  toggleWorkspace: (workspace: string) => void;
  setSelectedWorkspace: (workspace: string) => void;
  setSelectedChat: (chat: string) => void;
 
}

interface SidebarProps {
  workspaces: Workspace[];
  generalChats: string[];
  selectedWorkspace: string;
  selectedChat: string;
  expandedWorkspaces: string[];
  toggleWorkspace: (workspace: string) => void;
  setSelectedWorkspace: (workspace: string) => void;
  setSelectedChat: (chat: string) => void;
  onShowFilePermissionManager?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  workspaces,
  generalChats,
  selectedWorkspace,
  selectedChat,
  expandedWorkspaces,
  toggleWorkspace,
  setSelectedWorkspace,
  setSelectedChat,
  onShowFilePermissionManager,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const filteredWorkspaces = workspaces.filter((ws) =>
    ws.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGeneralChats = generalChats.filter((chat) =>
    chat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {showUpload && (
        <UploadModal
          workspaces={workspaces.map((ws) => ws.name)}
          onClose={() => setShowUpload(false)}
          onUpload={(files) => {
            console.log('上傳的文件與權限:', files);
            setShowUpload(false);
          }}
        />
      )}
      <div className="w-64 bg-base-200 text-base-content border-r border-base-300 flex flex-col shadow-lg hidden md:flex">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="font-bold text-xl">RAGsystem</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-gray-800">
            <button className="btn btn-primary w-full flex items-center justify-center space-x-2 mb-3">
              <PlusCircle size={18} />
              <span>新建工作區</span>
            </button>
            <input
              type="text"
              placeholder="搜尋工作區或對話"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full text-sm"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="px-3 py-2 space-y-4">
              {showSettings ? (
                <>
                  <div>
                    <div className="menu-title text-sm font-medium text-base-content/60 mb-2">一般使用者設定</div>
                    <ul className="menu bg-base-200 rounded-box p-0">
                      {['工作區聊天室', '介面外觀', '偏好語言模型'].map((item) => (
                        <li key={item}>
                          <a className="menu-item text-sm text-base-content/80 hover:bg-base-300">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="menu-title text-sm font-medium text-base-content/60 mb-2">管理者後台設定</div>
                    <ul className="menu bg-base-200 rounded-box p-0">
                      {[
                        'API金鑰管理',
                        '嵌入模型設定',
                        '向量資料庫',
                        '事件日誌',
                        '隱私權與資料',
                        '語音辨識模型',
                        '文字分割策略',
                      ].map((item) => (
                        <li key={item}>
                          <a className="menu-item text-sm text-base-content/80 hover:bg-base-300">{item}</a>
                        </li>
                      ))}
                      <li>
                        <a
                          className="menu-item text-sm text-base-content/80 hover:bg-base-300"
                          onClick={() => {
                            if (onShowFilePermissionManager) onShowFilePermissionManager();
                            setShowSettings(false);
                          }}
                        >
                          文件權限管理
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  {/* ...原本的對話與工作區列表... */}
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">一般對話</div>
                    <div className="space-y-1">
                      {filteredGeneralChats.map(chat => {
                        if (chat === '新對話') {
                          return (
                            <div
                              key={chat}
                              className={`btn btn-primary btn-sm w-full flex justify-start items-center gap-2 mb-1 shadow-none border-0
                                ${selectedWorkspace === 'general' && selectedChat === chat ? '' : 'btn-outline'}
                              `}
                              style={{textAlign: 'left'}}
                              onClick={() => {
                                setSelectedWorkspace('general');
                                setSelectedChat(chat);
                              }}
                            >
                              <PlusCircle
                                size={16}
                                className={
                                  selectedWorkspace === 'general' && selectedChat === chat
                                    ? 'text-white'
                                    : 'text-primary'
                                }
                              />
                              <span className="text-sm font-semibold">新對話</span>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={chat}
                              className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                                selectedWorkspace === 'general' && selectedChat === chat
                                  ? 'bg-blue-600'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                              <div
                                className="flex items-center space-x-2"
                                onClick={() => {
                                  setSelectedWorkspace('general');
                                  setSelectedChat(chat);
                                }}
                              >
                                <MessageSquare size={16} className="text-gray-400" />
                                <span className="text-sm">{chat}</span>
                              </div>
                              <div className="flex items-center">
                                <button
                                  className="p-1 rounded-full hover:bg-gray-600"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    alert(`刪除對話: ${chat}`);
                                  }}
                                >
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
                                    className="text-gray-400 hover:text-red-400"
                                  >
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">工作區與對話</div>
                    {filteredWorkspaces.map((workspace) => (
                      <div key={workspace.name} className="mb-2">
                        <div
                          className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                            selectedWorkspace === workspace.name ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => toggleWorkspace(workspace.name)}
                        >
                          <div className="flex items-center space-x-2">
                            <Database size={18} className="text-gray-400" />
                            <span>{workspace.name}</span>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`text-gray-400 transition-transform ${
                              expandedWorkspaces.includes(workspace.name) ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>

                        {expandedWorkspaces.includes(workspace.name) && (
                          <div className="ml-8 mt-1 space-y-1">
                            {/* 新對話 */}
                            {workspace.chats.includes('新對話') && (
                              <div
                                key="新對話"
                                className={`btn btn-primary btn-sm w-full flex justify-start items-center gap-2 mb-1 shadow-none border-0
                                  ${selectedWorkspace === workspace.name && selectedChat === '新對話'
                                    ? ''
                                    : 'btn-outline'
                                  }`}
                                style={{textAlign: 'left'}}
                                onClick={() => {
                                  setSelectedWorkspace(workspace.name);
                                  setSelectedChat('新對話');
                                }}
                              >
                                <PlusCircle
                                  size={16}
                                  className={
                                    selectedWorkspace === workspace.name && selectedChat === '新對話'
                                      ? 'text-white'
                                      : 'text-primary'
                                  }
                                />
                                <span className="text-sm font-semibold">新對話</span>
                              </div>
                            )}
                            {/* 歷史聊天紀錄 */}
                            {workspace.chats
                              .filter((chat) => chat !== '新對話')
                              .map((chat) => (
                                <div
                                  key={chat}
                                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                                    selectedWorkspace === workspace.name && selectedChat === chat
                                      ? 'bg-blue-600'
                                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                  }`}
                                >
                                  <div
                                    className="flex items-center space-x-2"
                                    onClick={() => {
                                      setSelectedWorkspace(workspace.name);
                                      setSelectedChat(chat);
                                    }}
                                  >
                                    <MessageSquare size={16} className="text-gray-400" />
                                    <span className="text-sm">{chat}</span>
                                  </div>
                                  <div className="flex items-center opacity-0 group-hover:opacity-100 hover:opacity-100">
                                    <button
                                      className="p-1 rounded-full hover:bg-gray-600"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        alert(`刪除對話: ${chat}`);
                                      }}
                                    >
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
                                        className="text-gray-400 hover:text-red-400"
                                      >
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center justify-around space-x-2">
              <button
                className="btn btn-square btn-ghost"
                onClick={() => {
                  setShowSettings(!showSettings);
                  setShowUpload(false);
                }}
              >
                <Settings size={20} />
              </button>
              <button
                className="btn btn-square btn-ghost"
                onClick={() => {
                  setShowUpload(!showUpload);
                  setShowSettings(false);
                }}
              >
                <Upload size={20} />
              </button>
              <button className="btn btn-square btn-ghost">
                <Book size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;