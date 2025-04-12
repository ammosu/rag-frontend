import React, { useEffect } from "react";

export type NotificationType = "success" | "error" | "info" | "warning";

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
  duration?: number; // 毫秒，預設 3000
}

const typeColor: Record<NotificationType, string> = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500 text-gray-900",
};

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`fixed top-6 right-6 z-50 px-4 py-3 rounded shadow-lg text-white ${typeColor[type]}`}>
      <div className="flex items-center">
        <span className="flex-1">{message}</span>
        <button
          className="ml-4 text-lg font-bold focus:outline-none"
          onClick={onClose}
          aria-label="關閉通知"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;