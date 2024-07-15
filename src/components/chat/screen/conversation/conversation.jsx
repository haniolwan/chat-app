import Message from "../message/message";

const Conversation = ({ date, messages }) => {

    return (
        <div className="text-center">
            <p className="text-sm py-4">
                {date}
            </p>
            <div className="px-6 text-center grid grid-cols-2">
                {messages.map(({ sender, text, time }, idx) => <Message key={idx} me={sender === 'me'} content={text} time={time} />)}
            </div>
        </div>
    )
}
export default Conversation;