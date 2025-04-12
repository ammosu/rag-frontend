import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { username: string }) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // 假設登入/註冊邏輯，實際應串接 API
    if (username.trim() === "" || password.trim() === "") {
      setError("請輸入帳號與密碼");
      return;
    }
    // 模擬成功
    onLoginSuccess({ username });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-xs">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegister ? "註冊" : "登入"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border rounded px-3 py-2 dark:bg-gray-700"
            type="text"
            placeholder="帳號"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2 dark:bg-gray-700"
            type="password"
            placeholder="密碼"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2 font-semibold hover:bg-blue-700"
          >
            {isRegister ? "註冊" : "登入"}
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <button
            className="text-blue-600 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
            type="button"
          >
            {isRegister ? "已有帳號？登入" : "沒有帳號？註冊"}
          </button>
          <button
            className="text-gray-500 hover:underline"
            onClick={onClose}
            type="button"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;