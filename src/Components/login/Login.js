import "../login/Login.css";
import logo from "../../Images/flico-chat.svg";
import { Button } from "@mui/material";
function Login() {
  return (
    <div className="loginBox">
      <div className="loginBox__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="loginBox__button">
        <Button>Continue with Google SignIn </Button>
      </div>
    </div>
  );
}

export default Login;
