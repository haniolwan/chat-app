import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import Echo from './echo'

function App() {
  const webSocketChannel = `channel`;

  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const scrollToBottom = () => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const connectWebSocket = () => {
    const channel = Echo.channel(webSocketChannel)
    channel.listen('GotMessage', async (event) => {
      await getMessages();
    })
  }

  const url = 'http://localhost/api';
  const token = '5|cPIwuK0E6mo9bBI8rLVf72ntfckNB6FAyKGZ6XFK326f2197'

  const getMessages = async () => {
    try {
      const m = await axios.get(`${url}/messages`, {
        headers: {
          'Authorization': 'Bearer ' + token
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
      Echo.leave(webSocketChannel);
    }
  }, []);

  const [message, setMessage] = useState("");

  const messageRequest = async (text) => {
    try {
      await axios.post(`${url}/message`,
        {
          text,
        }, {
        headers: {
          'Authorization': 'Bearer ' + token
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
  const user = { id: 1 }
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Chat Box</div>
          <div className="card-body"
            style={{ height: "500px", overflowY: "auto" }}>
            {
              messages?.map((message, idx) => (
                <div key={idx} className={`row ${user.id === message.user_id ? "justify-content-end" : ""
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
