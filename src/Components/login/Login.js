import "../login/Login.css";
import logo from "../../Images/flico-chat.svg";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider/StateProvider";
import { actionTypes } from "../../StateProvider/reducer";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="loginBox">
      <div className="loginBox__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="loginBox__button">
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
