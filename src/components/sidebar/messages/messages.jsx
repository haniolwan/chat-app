import UserSkeleton from "../../chat/skeleton/user-skeleton"
import { useState, useEffect } from "react"
import MessageItem from "./message-item/message-item"
import avatar from "./../../../../src/assets/avatar.svg"

const Messages = ({ searchInput }) => {
  const [showMessages, setShowMessages] = useState(false)

  // TODO: remove these later
  const messages = [
    {
      name: "Lara Mueller",
      message: "Lorem ipsum dolor sit",
      time: "17:33",
      avatar: avatar,
      statusIcon: "check-circle",
      unreadCount: 3,
    },
    {
      name: "John Doe",
      message: "Consectetur adipiscing elit",
      time: "17:33",
      avatar: avatar,
      statusIcon: "check-circle",
      unreadCount: 12,
    },
    {
      name: "Jane Smith",
      message: "Lorem ipsum dolor sit amet consectetur",
      time: "17:33",
      avatar: avatar,
      statusIcon: "check-circle",
      unreadCount: 2,
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setShowMessages(true)
    }, 1500)
  }, [])

  const filteredMessages = messages.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="text-start border-t border-gray-700">
      <div className="py-6">
        <p className="text-xl font-medium pl-6">Messages</p>
        <div className="mt-4 flex flex-col">
          {!showMessages && [...Array(5)].map((_) => <UserSkeleton key={_} />)}
          {showMessages && (
            <div className="bg-[#1C1D22] text-white">
              {filteredMessages.map((msg, index) => (
                <div key={index}>
                  <MessageItem {...msg} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Messages
