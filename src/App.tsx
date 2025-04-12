import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatArea from './components/ChatArea';
import ChatInput from './components/ChatInput';
import RightSidebar from './components/RightSidebar';
import UserSettings from './components/UserSettings';
 

import FilePermissionManager from './components/FilePermissionManager';

const App: React.FC = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState('研究報告');
  const [selectedChat, setSelectedChat] = useState('市場分析討論');
  const [message, setMessage] = useState('');
  const [expandedWorkspaces, setExpandedWorkspaces] = useState<string[]>(['研究報告']);
  const [showUserSettings, setShowUserSettings] = useState(false);
  const [showFilePermissionManager, setShowFilePermissionManager] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false); // 預設隱藏

  const toggleRightSidebar = () => setShowRightSidebar((prev) => !prev);

  // mock data for FilePermissionManager
  const mockFiles = [
    {
      fileId: '1',
      fileName: '文件A.pdf',
      allowedWorkspaces: ['研究報告'],
    },
    {
      fileId: '2',
      fileName: '文件B.docx',
      allowedWorkspaces: ['產品文檔'],
    },
  ];
  const mockWorkspaces = ['研究報告', '產品文檔', '財務資料', '法律文件'];

  const generalChats = ['日常對話', '技術問答', '新對話'];

  const workspaces = [
    {
      name: '研究報告',
      chats: ['市場分析討論', '產品競爭力評估', '用戶行為研究', '新對話'],
    },
    {
      name: '產品文檔',
      chats: ['API設計討論', '前端架構規劃', '新對話'],
    },
    {
      name: '財務資料',
      chats: ['Q1預算分析', '投資回報計算', '新對話'],
    },
    {
      name: '法律文件',
      chats: ['合約條款審查', '隱私政策更新', '新對話'],
    },
  ];

  const toggleWorkspace = (workspace: string) => {
    if (expandedWorkspaces.includes(workspace)) {
      setExpandedWorkspaces(expandedWorkspaces.filter((w) => w !== workspace));
    } else {
      setExpandedWorkspaces([...expandedWorkspaces, workspace]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Sidebar
        workspaces={workspaces}
        generalChats={generalChats}
        selectedWorkspace={selectedWorkspace}
        selectedChat={selectedChat}
        expandedWorkspaces={expandedWorkspaces}
        toggleWorkspace={toggleWorkspace}
        setSelectedWorkspace={setSelectedWorkspace}
        setSelectedChat={setSelectedChat}
        onShowFilePermissionManager={() => setShowFilePermissionManager(true)}
      />

      <div className="flex-1 flex flex-col">
        <Header
          selectedWorkspace={selectedWorkspace}
          selectedChat={selectedChat}
          onUserSettingsClick={() => setShowUserSettings(true)}
          onToggleRightSidebar={toggleRightSidebar}
        />
        <ChatArea selectedWorkspace={selectedWorkspace} selectedChat={selectedChat} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          selectedChat={selectedChat}
        />
      </div>

      {showRightSidebar && <RightSidebar show={true} />}

      {showUserSettings && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
          onClick={() => setShowUserSettings(false)}
        >
          <UserSettings onClose={() => setShowUserSettings(false)} />
          <button
            onClick={() => setShowUserSettings(false)}
            className="absolute top-4 right-80 text-gray-300 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
      {showFilePermissionManager && (
        <FilePermissionManager
          files={mockFiles}
          workspaces={mockWorkspaces}
          onChange={(updated) => {
            console.log('更新後的權限:', updated);
          }}
          onClose={() => setShowFilePermissionManager(false)}
        />
      )}
    </div>
  );
};

export default App;