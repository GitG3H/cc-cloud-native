import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => console.log(response))
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
            <span>🥰</span> Cloud Computing !!
          </h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
