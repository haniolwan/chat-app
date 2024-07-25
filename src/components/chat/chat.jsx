import { useState, useEffect } from "react"
import Keyboard from "./keyboard/keyboard"
import Screen from "./screen/screen"
import Tools from "./tools/tools"

const Chat = ({ isOpen, setOpenDrawer }) => {
  const [search, setSearch] = useState("")
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          sender: "Sidrah",
          text: "Lorem ipsum dolor sit amet consectetur,",
          time: "17:55",
        },
        {
          sender: "me",
          text: "Lorem ipsum dolor sit amet consectetur,",
          time: "17:55",
        },
        {
          sender: "Sidrah",
          text: "Lorem ipsum dolor sit amet consectetur,",
        },
        {
          sender: "Sidrah",
          text: "Lorem ipsum dolor sit amet consectetur,",
          time: "17:55",
        },
      ])
      setIsLoading(false)
    }, 1500)
  }, [])
  return (
    <div
      className={`grid grid-rows-10 col-span-9
        ${!isOpen && "col-span-12"}`}>
      <Tools setOpenDrawer={setOpenDrawer} search={search} setSearch={setSearch} />
      <Screen messages={messages} searchInput={search} isLoading={isLoading} />
      <Keyboard setMessages={setMessages} />
    </div>
  )
}
export default Chat
