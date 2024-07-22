import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import user from "./../../../../assets/user1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const User = ({ name, message, received, previous }) => {
  const doubleCheck = received && <FontAwesomeIcon className="h-3" icon={faCheckDouble} />
  const previousMessagesCount = previous > 0 && (
    <span className="flex justify-center items-center w-5 h-5 rounded-full bg-white text-center text-black text-bold">
      {previous}
    </span>
  )

  return (
    <div className="flex py-2 px-6 hover:bg-gray-900">
      <img src={user} alt="user message" />
      <div className="grid w-full ml-2">
        <div className="flex justify-between items-center">
          <p className="text-bold">{name}</p>
          <div className="flex flex-col justify-between items-center">
            <span className="text-sm">17:33</span>
          </div>
        </div>
        <span className="text-sm">
          <div className="flex justify-evenly items-center space-x-1">
            <span className="truncate h-5 w-60 flex gap-2 items-center">
              {message}
              {doubleCheck}
            </span>
            {previousMessagesCount}
          </div>
        </span>
      </div>
    </div>
  )
}
export default User
