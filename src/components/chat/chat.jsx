import { useState } from "react";
import Keyboard from "./keyboard/keyboard";
import Screen from "./screen/screen";
import Tools from "./tools/tools";

const Chat = ({ isOpen, setOpenDrawer }) => {
    const [messages, setMessages] = useState(
        [{
            sender: "Sidrah",
            text: "Lorem ipsum dolor sit amet consectetur,",
            time: "17:55"
        },
        {
            sender: "me",
            text: "Lorem ipsum dolor sit amet consectetur,",
            time: "17:55"
        },
        {
            sender: "Sidrah",
            text: "Lorem ipsum dolor sit amet consectetur,",
        },
        {
            sender: "Sidrah",
            text: "Lorem ipsum dolor sit amet consectetur,",
            time: "17:55"
        }]
    )
    return (
        <div className={`grid grid-rows-10 col-span-9
        ${!isOpen && "col-span-12"}`}>
            <Tools setOpenDrawer={setOpenDrawer} />
            <Screen messages={messages} />
            <Keyboard setMessages={setMessages} />
        </div>
    )
}
export default Chat;