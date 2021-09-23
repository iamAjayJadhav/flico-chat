import "../SideBar/SideBarChat.css"
import { useState, useEffect } from "react"
import { Avatar } from "@mui/material"
function SideBarChat({ addNewChat }) {
  const [seed, setSeed] = useState("")

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])
  const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat")

    if (roomName) {
    }
  }
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  )
}

export default SideBarChat
