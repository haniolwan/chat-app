import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import user from "./../../../../assets/user1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const User = ({ received, previous }) => {
  return (
    <div className="flex py-2 px-6 hover:bg-gray-900">
      <img src={user} alt="user message" />
      <div className="grid w-full ml-2">
        <div className="flex justify-between items-center">
          <p className="text-bold">Lara Mueller</p>
          <span className="text-sm">17:33</span>
        </div>
        <span className="text-sm">
          {received && <FontAwesomeIcon className="h-3" icon={faCheckDouble} />}
          <div className="flex space-x-1">
            <span> Lorem ipsum dolor sit</span>
            {previous && (
              <div className="flex justify-center items-center w-4 h-4 rounded-full bg-white text-center text-black text-bold">
                3
              </div>
            )}
          </div>
        </span>
      </div>
    </div>
  )
}
export default User
