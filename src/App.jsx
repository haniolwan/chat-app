import { useEffect, useRef, useState } from "react"
import Chat from "./components/chat/chat"
import Contact from "./components/contact/contact"
import Sidebar from "./components/sidebar/sidebar"
import axios from 'axios';
import echo from "./echo";

function App() {
  const userData = {
    id: 1
  };

  const user = (userData);
  // `App.Models.User.${user.id}`;
  const webSocketChannel = `private-channel_for_everyone`;

  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const scrollToBottom = () => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const connectWebSocket = () => {

    const channel = echo.private(webSocketChannel);
    channel.listen('GotMessage', async (e) => {
        console.log('Event received:', e);
        await getMessages();
    });

  }

  const getMessages = async () => {
    try {
      const m = await axios.get(`${"http://localhost:8000/api"}/messages`, {
        headers: {
          'Authorization': 'Bearer ' + "1|2fpu6QUasZVJszWW9MuVvfTIFFNM9B5reQEWcU0H492e76b4"
        }
      });
      setMessages(m.data);
      setTimeout(scrollToBottom, 0);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMessages();
    connectWebSocket();

    return () => {
      echo.leave(webSocketChannel);
    }
  }, []);

  const [message, setMessage] = useState("");

  const messageRequest = async (text) => {
    try {
      await axios.post(`${"http://localhost:8000/api"}/message`,
        {
          text,
        }, {
        headers: {
          'Authorization': 'Bearer ' + "1|2fpu6QUasZVJszWW9MuVvfTIFFNM9B5reQEWcU0H492e76b4"
        },

      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Please enter a message!");
      return;
    }

    messageRequest(message);
    setMessage("");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Chat Box</div>
          <div className="card-body"
            style={{ height: "500px", overflowY: "auto" }}>
            {
              messages?.map((message) => (
                <div className={`row ${user.id === message.user_id ? "justify-content-end" : ""
                  }`}>
                  <div className="col-md-6">
                    <small className="text-muted">
                      <strong>{message.user.name} | </strong>
                    </small>
                    <small className="text-muted float-right">
                      {message.time}
                    </small>
                    <div className={`alert alert-${user.id === message.user_id ? "primary" : "secondary"
                      }`} role="alert">
                      {message.text}
                    </div>
                  </div>
                </div>
              ))
            }
            <span ref={scroll}></span>
          </div>
          <div className="card-footer">
            <div className="input-group">
              <input onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Message..."
                value={message}
              />
              <div className="input-group-append">
                <button onClick={(e) => sendMessage(e)}
                  className="btn btn-primary"
                  type="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
