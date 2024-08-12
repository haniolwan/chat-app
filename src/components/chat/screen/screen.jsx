import Conversation from "./conversation/conversation"

const Screen = ({ messages, searchInput, isLoading }) => {
  return (
    <div id="screen" className="row-span-8 bg-[#141416] overflow-y-auto">
      <Conversation
        isLoading={isLoading}
        date={"Yesterday"}
        messages={messages}
        searchInput={searchInput}
      />
    </div>
  )
}
export default Screen
