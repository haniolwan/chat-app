import { useState, useEffect } from "react"
import Keyboard from "./keyboard/keyboard"
import Screen from "./screen/screen"
import Tools from "./tools/tools"

const Chat = ({ isOpen, setOpenDrawer }) => {
  const [search, setSearch] = useState("")
  const [initialMessages, setInitialMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setInitialMessages([
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
      className={`grid row-span-12 col-span-12 md:col-span-9
        ${!isOpen && "col-span-12"}`}>
      <Tools setOpenDrawer={setOpenDrawer} search={search} setSearch={setSearch} />
      <div className="flex-grow overflow-y-auto">
        <Screen messages={initialMessages} searchInput={search} isLoading={isLoading} />
      </div>
      <Keyboard setMessages={setInitialMessages} />
    </div>
  )
}
export default Chat
