import Tools from "./tools/tools"
import Title from "./title/title"
import Info from "./info/info"
import Media from "./media/media"

const Contact = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`grid grid-rows-10 col-span-3 fixed top-0 right-0 z-40 w-64 h-screen overflow-y-auto transition-transform bg-[#26272D]
            border-l border-gray-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <Tools setIsOpen={setIsOpen} />
      <Title />
      <Info />
      <Media />
    </div>
  )
}
export default Contact
