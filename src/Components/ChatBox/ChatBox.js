import { useState, useEffect } from "react";
import "../ChatBox/ChatBox.css";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import firebase from "@firebase/app-compat";
import { useStateValue } from "../../StateProvider/StateProvider";
function ChatBox() {
  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const [headerRoomName, setHeaderRoomName] = useState("");
  const [messages, SetMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      name: user.displayName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setHeaderRoomName(snapshot.data().roomName));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          SetMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <div className="chatBox">
      <div className="chatBox__header">
        <h3>{headerRoomName}</h3>
        <p>
          {new Date(
            messages[messages.length - 1]?.timestamp?.toDate()
          ).toUTCString()}
        </p>
      </div>
      <div className="chatBox__body">
        {messages.map((message) => (
          <p
            className={`chatBox__incoming ${
              message.name === user.displayName && "chatBox__outgoing"
            }`}
          >
            <span className="chatBox__name">{message.name}</span>
            {message.message}
            <span className="chatBox__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
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
