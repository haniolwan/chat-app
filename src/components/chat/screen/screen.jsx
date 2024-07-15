import Conversation from "./conversation/conversation";

const Screen = ({messages}) => {
    
    return (
        <div className="row-span-8 bg-[#141416]">
            <Conversation date={"Yesterday"} messages={messages} />
        </div>
    )
}
export default Screen;