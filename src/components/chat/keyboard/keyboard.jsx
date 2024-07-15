import { faFaceSmile, faMicrophone, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Keyboard = ({ setMessages }) => {
    const handleChange = (e) => {
        e.preventDefault()
        setMessages(prev => [...prev, {
            sender: "me",
            text: e.target[0].value,
        }])
    }
    return (
        <form onSubmit={handleChange} className="row-span-1 flex items-center px-6 space-x-2.5 bg-[#1C1D22]">
            <div className="flex space-x-2.5">
                <FontAwesomeIcon icon={faFaceSmile} />
                <FontAwesomeIcon icon={faPaperclip} />
            </div>
            <input type="text" className="focus:outline-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 bg-[#26272D]" placeholder="Write a message" required />
            <FontAwesomeIcon icon={faMicrophone} />
        </form>
    )
}
export default Keyboard;