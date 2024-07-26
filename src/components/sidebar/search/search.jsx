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
    <form className="p-4">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="voice-search"
          className="focus:outline-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-3 w-full p-2.5 bg-[#26272D]"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          required
        />
        <span
          className="flex items-center cursor-pointer absolute right-6 bottom-3"
          onClick={() => setClicked((prev) => !prev)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
    </form>
  )
}
export default Search
