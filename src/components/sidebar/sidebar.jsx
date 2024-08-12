import Messages from "./messages/messages"
import Search from "./search/search"
import StoriesContainer from "./stories/stories-container"
import Tools from "./tools/tools"
import { useState } from "react"

const Sidebar = () => {
  const [searchInput, setSearchInput] = useState("")
  return (
    <div className="row-span-12 col-span-12 md:col-span-3 min-w-[320px] bg-[#1C1D22] border-r border-gray-700">
      <Tools />
      <Search search={searchInput} setSearch={setSearchInput} />
      <StoriesContainer searchInput={searchInput} />
      <Messages searchInput={searchInput} />
    </div>
  )
}
export default Sidebar
