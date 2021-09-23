import "./App.css"
import SideBar from "./Components/SideBar/SideBar"
import ChatBox from "./Components/ChatBox/ChatBox"
function App() {
  //BEM naming convention
  return (
    <div className="app">
      {/* logo
 body
 header
 sidebar
 chatbox
 input box */}

      <div className="app__body">
        <SideBar />
        <ChatBox />
      </div>
    </div>
  )
}

export default App
