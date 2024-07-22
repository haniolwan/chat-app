import User from "./user/user"
import UserSkeleton from "../../chat/skeleton/user-skeleton"
import { useState, useEffect } from "react"

const Messages = ({ searchInput }) => {
  const [showMessages, setShowMessages] = useState(false)

  // TODO: remove these later
  const users = [
    {
      id: 1,
      name: "Lara Mueller",
      message: "Lorem ipsum dolor sit",
      previous: 3,
      received: true,
    },
    {
      id: 2,
      name: "John Doe",
      message: "Consectetur adipiscing elit",
      previous: 12,
      received: true,
    },
    {
      id: 3,
      name: "Jane Smith",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore dolores provident, culpa iure facilis illum nemo molestiae. Dolorum, quibusdam!",
      previous: 2,
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setShowMessages(true)
    }, 1500)
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="text-start border-t border-gray-700">
      <div className="py-6">
        <p className="text-xl font-medium pl-6">Messages</p>
        <div className="mt-4 flex flex-col">
          {!showMessages && [...Array(5)].map((_) => <UserSkeleton key={_} />)}
          {showMessages &&
            filteredUsers.map((user) => {
              return (
                <div key={user.id}>
                  <User
                    name={user.name}
                    message={user.message}
                    received={user.received}
                    previous={user.previous}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default Messages
