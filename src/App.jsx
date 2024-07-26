import { useState } from "react"
import Chat from "./components/chat/chat"
import Contact from "./components/contact/contact"
import Sidebar from "./components/sidebar/sidebar"

function App() {
  const [isOpenDrawer, setOpenDrawer] = useState(false)
  return (
    <div className="grid grid-cols-12 h-full">
      <Sidebar />
      <Chat setOpenDrawer={setOpenDrawer} isOpen={isOpenDrawer} />
      <Contact isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
    </div>
  )
}

export default App
