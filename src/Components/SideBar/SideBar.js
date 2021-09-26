import { useState, useEffect } from "react";
import db from "../../firebase";
import "./SideBar.css";
import SideBarChat from "./SideBarChat";
import logo from "../../Images/flico-chat.svg";
import { Avatar } from "@mui/material";
import { useStateValue } from "../../StateProvider/StateProvider";
function SideBar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__header__Avatar" src={user?.photoURL} />
        <img src={logo} />
      </div>
      <div className="sidebar__chats">
        <SideBarChat addNewChat />
        {rooms.map((room) => (
          <SideBarChat
            key={room.id}
            id={room.id}
            roomName={room.data.roomName}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
