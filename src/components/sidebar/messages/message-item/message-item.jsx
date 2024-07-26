import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MessageItem = ({ name, message, time, avatar, statusIcon, unreadCount }) => (
  <div className="grid grid-cols-12 gap-1 p-4 items-center border-b border-gray-700">
    <div className="col-span-2">
      <img src={avatar} alt={`${name} avatar`} className="w-12 h-12 rounded-full" />
    </div>
    <div className="col-span-7">
      <div className="flex flex-col">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400 text-sm truncate">{message}</span>
      </div>
    </div>
    <div className="col-span-1 text-right">
      <span className="text-gray-400 text-sm">{time}</span>
    </div>
    <div className="col-span-2 flex justify-end items-center space-x-2">
      {statusIcon && <FontAwesomeIcon icon={statusIcon} className="text-gray-500" />}
      {unreadCount > 0 && (
        <div className="bg-blue-500 text-white text-xs rounded w-10 h-6 flex items-center justify-center">
          {unreadCount}
        </div>
      )}
    </div>
  </div>
)

export default MessageItem
