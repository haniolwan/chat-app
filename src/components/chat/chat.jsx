import { useState, useEffect } from "react"
import Keyboard from "./keyboard/keyboard"
import Screen from "./screen/screen"
import Tools from "./tools/tools"

const Chat = ({ isOpen, setOpenDrawer }) => {
  const [search, setSearch] = useState("")
  const [initialMessages, setInitialMessags] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const setMessages = () =>
    setInitialMessags([
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

  useEffect(() => {
    setTimeout(() => {
      setMessages()
      setIsLoading(false)
    }, 1500)
  }, [])
  return (
    <div
      className={`grid col-span-12 md:col-span-9
        ${!isOpen && "col-span-12"}`}>
      <Tools setOpenDrawer={setOpenDrawer} search={search} setSearch={setSearch} />
      <Screen messages={initialMessages} searchInput={search} isLoading={isLoading} />
      <Keyboard setMessages={setInitialMessags} />
    </div>
  )
}
export default Chat
