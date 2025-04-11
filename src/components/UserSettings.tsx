import React from 'react';
import { useTheme } from '../ThemeContext';
import { LogOut, User, Key, Palette, Languages } from 'lucide-react';

interface UserSettingsProps {
  onClose?: () => void;
}

const UserSettings: React.FC<UserSettingsProps> = ({ onClose }) => {
  return (
    <div
      className="
        fixed inset-0 z-50 w-full h-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col shadow-2xl
        md:static md:w-80 md:h-full md:border-l md:border-gray-200 md:dark:border-gray-800 md:shadow-lg
      "
    >
      {/* 手機全螢幕時的關閉按鈕 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800 md:p-6">
        <h2 className="text-xl font-bold mb-0">用戶設定</h2>
        {onClose && (
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={onClose}
            aria-label="關閉"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
      <div className="flex items-center space-x-4 mb-4 px-4 md:px-6">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-lg font-semibold">
          U
        </div>
        <div>
          <div className="font-semibold">User Name</div>
          <div className="text-sm text-gray-400">user@example.com</div>
        </div>
      </div>
      <button className="w-full py-2 mt-2 rounded-md bg-red-600 hover:bg-red-700 flex items-center justify-center space-x-2 px-4 md:px-6">
        <LogOut size={16} />
        <span>登出</span>
      </button>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <User size={16} />
            <span>帳號資訊</span>
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="使用者名稱"
              className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
            <input
              type="password"
              placeholder="新密碼"
              className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            />
            <input
              type="password"
              placeholder="確認新密碼"
              className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
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
            className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
          <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 mt-2">儲存金鑰</button>
        </div>

        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <Palette size={16} />
            <span>主題偏好</span>
          </h3>
          {/* 主題切換 select，綁定 context */}
          <ThemeSelect />
        </div>

        <div>
          <h3 className="font-semibold mb-2 flex items-center space-x-2">
            <Languages size={16} />
            <span>語言</span>
          </h3>
          <select className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
            <option>繁體中文</option>
            <option>English</option>
            <option>日本語</option>
          </select>
        </div>
      </div>
    </div>
  );
};

/** 主題切換下拉元件 */
const ThemeSelect: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <select
      className="w-full bg-white border border-gray-300 text-gray-900 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
      value={theme}
      onChange={e => setTheme(e.target.value as any)}
    >
      <option value="dark">深色模式</option>
      <option value="light">淺色模式</option>
      <option value="system">跟隨系統</option>
    </select>
  );
};

export default UserSettings;