import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useRef } from "react"

const Search = ({ search, setSearch }) => {
  const [clicked, setClicked] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (clicked && inputRef.current) {
      inputRef.current.focus()
    }
  }, [clicked])
  
  return (
    <form className="flex items-center max-w-lg mx-auto p-4">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
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
        <span className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => setClicked((prev) => !prev)} />
        </span>
      </div>
    </form>
  )
}
export default Search
