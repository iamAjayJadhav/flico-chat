import { useState, useEffect } from "react";
import db from "../../firebase";
import "./SideBar.css";
import SideBarChat from "./SideBarChat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function SideBar() {
  const [rooms, setRooms] = useState([]);
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
        <AccountCircleIcon />
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
