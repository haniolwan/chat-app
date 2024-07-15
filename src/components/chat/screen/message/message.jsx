const Message = ({ me, content, time }) => {
    return (
        <>
            <div className={`w-fit mt-1 ${me ? "text-black col-start-2" : "col-start-1"} relative max-w-[532px] min-w-[80px]`}>
                <p className={`text-start p-2 rounded ${me ? "bg-[#BDD2B6] text-black" : "bg-[#26272D]"}`}>
                    {content}
                </p>
                <p className={`${time && 'py-1'} text-start text-sm  text-gray-400`}>
                    {time}
                </p>
            </div>
            <br />
        </>
    )
}
export default Message;