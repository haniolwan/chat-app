import { useState } from "react"
import Sidebar from "../../components/sidebar/sidebar"
import Chat from "../../components/chat/chat"
import Contact from "../../components/contact/contact"

const Home = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="grid grid-rows-12 grid-cols-12 h-full">
      <Sidebar />
      <Chat setOpenDrawer={setOpenDrawer} isOpen={isOpenDrawer} />
      <Contact isOpen={isOpenDrawer} setIsOpen={setOpenDrawer} />
    </div>
  )
}
export default Home
