import "../SideBar/SideBarChat.css";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import db from "../../firebase";
import { Link } from "react-router-dom";
function SideBarChat({ id, roomName, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat");

    if (roomName) {
      db.collection("rooms").add({
        roomName: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="sidebarChat__info">
          <h2>{roomName}</h2>
          <p>Last message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SideBarChat;
