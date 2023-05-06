import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: response.user,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://img.freepik.com/free-vector/cloud-computing-with-network-points_1017-31866.jpg?size=626&ext=jpg&ga=GA1.1.754627488.1682706290&semt=robertav1_2_sidr"
          alt="cloud computing"
        />
        <div className="login__text">
          <h1>
            <span>🌨️</span> Innova Cloud
          </h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
