import User from "./user/user"
import UserSkeleton from "../../chat/skeleton/user-skeleton"
import { useState, useEffect } from "react"

const Messages = () => {
  const [showMessages, setShowMessages] = useState(false)

  const users = [
    {
      id: 1,
      user: <User />,
    },
    {
      id: 2,
      user: <User />,
    },
    {
      id: 3,
      user: <User />,
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setShowMessages(true)
    }, 1500)
  }, [])

  return (
    <div className="text-start border-t border-gray-700">
      <div className="py-6">
        <p className="text-xl font-medium pl-6">Messages</p>
        <div className="mt-4 flex flex-col">
          {!showMessages && [...Array(5)].map((_) => <UserSkeleton key={_} />)}
          {showMessages &&
            users.map((user) => {
              return <div key={user.id}>{user.user}</div>
            })}
        </div>
      </div>
    </div>
  )
}
export default Messages
