import Messages from "./messages/messages";
import Search from "./search/search";
import Stories from "./stories/stories";
import Tools from "./tools/tools";

const Sidebar = () => {
    return (
        <div className="col-span-4 min-w-[320px] bg-[#1C1D22] border-r border-gray-700">
            <Tools />
            <Search />
            <Stories />
            <Messages />
        </div>
    )
}
export default Sidebar;