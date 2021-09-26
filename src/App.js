import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import ChatBox from "./Components/ChatBox/ChatBox";
import { useState } from "react";
import Login from "./Components/login/Login";
import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <SideBar />
            <Switch>
              <Route path="/rooms/:roomId">
                <ChatBox />
              </Route>
              <Route path="/">
                <ChatBox />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
