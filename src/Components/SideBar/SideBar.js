import "./SideBar.css"
import SideBarChat from "./SideBarChat"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircleIcon />
      </div>
      <div className="sidebar__chats">
        <SideBarChat addNewChat />
        <SideBarChat />
      </div>
    </div>
  )
}

export default SideBar
