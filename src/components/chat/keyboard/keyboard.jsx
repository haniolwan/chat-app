import { faFaceSmile, faMicrophone, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import { capitalizeFirstLetter, cleanString } from "../../../utils"
import { useState } from "react"

const Keyboard = ({ setMessages }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessages((prev) => [
      ...prev,
      {
        sender: "me",
        text: cleanString(capitalizeFirstLetter(message)),
        time: moment().utc().format("HH:mm"),
      },
    ])
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center px-6 space-x-2.5 bg-[#1C1D22]">
      <div className="flex space-x-2.5">
        <FontAwesomeIcon icon={faFaceSmile} />
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <input
        type="text"
        className="focus:outline-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 bg-[#26272D]"
        placeholder="Write a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <FontAwesomeIcon icon={faMicrophone} />
    </form>
  )
}
export default Keyboard
