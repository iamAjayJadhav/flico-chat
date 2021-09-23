import "../ChatBox/ChatBox.css"
function ChatBox() {
  return (
    <div className="chatBox">
      <div className="chatBox__header">
        <h3>Room Name</h3>
        <p>Last seen at..</p>
      </div>
      <div className="chatBox__body"></div>
      <div className="chatBox__inputBox"></div>
    </div>
  )
}

export default ChatBox
