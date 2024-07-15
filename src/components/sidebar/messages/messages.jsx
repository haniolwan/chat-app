import User from "./user/user";

const Messages = () => {
    return (
        <div className="text-start border-t border-gray-700">
            <div className="py-6">
                <p className="text-xl font-medium pl-6">Messages</p>
                <div className='mt-4 flex flex-col'>
                    <User />
                    <User />
                </div>
            </div>
        </div>
    )
}
export default Messages;