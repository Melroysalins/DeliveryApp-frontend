import React, { useState } from "react";
import "./index.css";
import LoginForm from "../loginForm";

const LoginRegisterMessage = ({ setIsDrawerOpen, setLoad }) => {
  const [login, setLogin] = useState(false);
  return (
    <div className="LoginSignUpMessageContainner">
      <p className="LoginMessage">{!login ? "Sign up" : "Login"}</p>
      <div style={{ display: "flex", gap: "9px" }}>
        <p className="orMessage">or</p>
        <p className="lastMessage" onClick={() => setLogin(!login)}>
          {!login ? "login to your account" : "create an account"}
        </p>
      </div>
      <div className="border-Divider"></div>

      <div className="LoginFormSection">
        <LoginForm
          login={login}
          setIsDrawerOpen={setIsDrawerOpen}
          setLoad={setLoad}
        />
      </div>
    </div>
  );
};

export default LoginRegisterMessage;
