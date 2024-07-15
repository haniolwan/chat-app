import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tools = ({ setIsOpen }) => {

    return (
        <div className="row-span-1 border-b border-gray-700 pl-6 flex items-center space-x-2 text-white">
            <button onClick={() => setIsOpen(false)} type="button"
                className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center" >
                <FontAwesomeIcon className="w-5 h-5" icon={faXmark} />
                <span className="sr-only">Close menu</span>
            </button>
            <h5>Contact info</h5>
        </div>
    )
}
export default Tools;