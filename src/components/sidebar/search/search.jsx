import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
    const [search, setSearch] = useState("");
    return (
        <form className="flex items-center max-w-lg mx-auto p-4">
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <input type="text" id="voice-search" className="focus:outline-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 bg-[#26272D]" placeholder="Search" required />
                <span className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </div>
        </form>

    )
}
export default Search;