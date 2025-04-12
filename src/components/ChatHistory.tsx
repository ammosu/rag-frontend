import React from "react";

export interface ChatHistoryItem {
  id: string;
  title: string;
  lastMessage: string;
  updatedAt: string;
}

interface ChatHistoryProps {
  historyList: ChatHistoryItem[];
  selectedId: string | null;
  onSelectHistory: (id: string) => void;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  historyList,
  selectedId,
  onSelectHistory,
}) => {
  return (
    <div className="h-full overflow-y-auto p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <h3 className="text-lg font-semibold mb-2">對話紀錄</h3>
      {historyList.length === 0 ? (
        <div className="text-gray-400 text-sm text-center py-8">尚無對話紀錄</div>
      ) : (
        <ul className="space-y-2">
          {historyList.map((item) => (
            <li
              key={item.id}
              className={`p-2 rounded cursor-pointer ${
                selectedId === item.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => onSelectHistory(item.id)}
            >
              <div className="font-medium truncate">{item.title}</div>
              <div className="text-xs text-gray-500 truncate">
                {item.lastMessage}
              </div>
              <div className="text-xs text-gray-400 text-right">
                {item.updatedAt}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChatHistory;