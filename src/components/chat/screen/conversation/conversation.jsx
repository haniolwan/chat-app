import Message from "../message/message"
import SkeletonMessage from "../../skeleton/message-skeleton"

const Conversation = ({ date, messages, searchInput, isLoading }) => {
  const filteredMessages = messages.filter((message) =>
    message.text.toLowerCase().includes(searchInput.toLowerCase())
  )
  return (
    <div className="text-center">
      {isLoading ? (
        <>
          <p className="text-sm py-4">{date}</p>
          <div className="px-6 text-center grid grid-cols-1">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonMessage key={idx} alignRight={idx % 2 === 0} />
            ))}
          </div>
        </>
      ) : filteredMessages.length > 0 ? (
        <>
          <p className="text-sm py-4">{date}</p>
          <div className="px-6 text-center grid grid-cols-1">
            {filteredMessages.map(({ sender, text, time }, idx) => (
              <Message key={idx} me={sender === "me"} content={text} time={time} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-sm py-4">No results found</p>
      )}
    </div>
  )
}
export default Conversation
