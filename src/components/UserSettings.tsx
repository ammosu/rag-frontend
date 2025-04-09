import React from 'react';
import { LogOut, User, Key, Palette, Languages } from 'lucide-react';

const UserSettings: React.FC = () => {
  return (
    <div className="w-80 bg-gray-900 text-gray-100 border-l border-gray-800 flex flex-col h-full shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold mb-4">用戶設定</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-lg font-semibold">
            U
          </div>
          <div>
            <div className="font-semibold">User Name</div>
            <div className="text-sm text-gray-400">user@example.com</div>
          </div>
        </div>
        <button className="w-full py-2 mt-2 rounded-md bg-red-600 hover:bg-red-700 flex items-center justify-center space-x-2">
          <LogOut size={16} />
          <span>登出</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <User size={16} />
            <span>帳號資訊</span>
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="使用者名稱"
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="新密碼"
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="確認新密碼"
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 mt-2">更新密碼</button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <Key size={16} />
            <span>API 金鑰</span>
          </h3>
          <input
            type="text"
            placeholder="輸入API金鑰"
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
          />
          <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 mt-2">儲存金鑰</button>
        </div>

        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <Palette size={16} />
            <span>主題偏好</span>
          </h3>
          <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500">
            <option>深色模式</option>
            <option>淺色模式</option>
            <option>跟隨系統</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <Languages size={16} />
            <span>語言</span>
          </h3>
          <select className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500">
            <option>繁體中文</option>
            <option>English</option>
            <option>日本語</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;