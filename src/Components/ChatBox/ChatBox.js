import { useState, useEffect } from "react";
import "../ChatBox/ChatBox.css";
import { useParams } from "react-router-dom";
import db from "../../firebase";
function ChatBox() {
  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const [headerRoomName, setHeaderRoomName] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setHeaderRoomName(snapshot.data().roomName));
    }
  }, [roomId]);

  return (
    <div className="chatBox">
      <div className="chatBox__header">
        <h3>{headerRoomName}</h3>
        <p>Last seen at..</p>
      </div>
      <div className="chatBox__body">
        <p className={`chatBox__incoming ${true && "chatBox__outgoing"}`}>
          <span className="chatBox__name">Ajay</span>
          Hey bois
          <span className="chatBox__timestamp">11:11pm</span>
        </p>
      </div>
      <div className="chatBox__inputBox">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
