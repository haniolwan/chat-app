import { faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import user1 from "./../../../assets/user1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useRef, useEffect } from "react"

const Tools = ({ setOpenDrawer, search, setSearch }) => {
  const [clicked, setClicked] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (clicked && inputRef.current) {
      inputRef.current.focus()
    }
  }, [clicked])
  return (
    <div className="row-span-1 flex justify-between items-center px-6 bg-[#1C1D22]">
      <div className="flex items-center space-x-2.5">
        <img className="w-10 h-10 rounded-full" src={user1} alt="chat user" />
        <span>Lara Mueller</span>
      </div>
      <div className="flex justify-end items-center space-x-4">
        {clicked ? (
          <input
            type="text"
            id="voice-search"
            className="focus:outline-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 bg-[#26272D]"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
            required
          />
        ) : (
          ""
        )}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer"
          onClick={() => setClicked((prev) => !prev)}
        />
        <FontAwesomeIcon
          className="hover:bg-white"
          icon={faEllipsisVertical}
          onClick={() => setOpenDrawer(true)}
        />
      </div>
    </div>
  )
}
export default Tools
