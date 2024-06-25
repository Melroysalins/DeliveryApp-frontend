import React from "react";
import "./index.css";

const LoginSignUPComponent = ({ setLogin }) => {
  return (
    <div className="LoginSignUpComponent">
      <div className="loginButton1" onClick={() => setLogin(true)}>
        <span>Have an account</span>
        <p>Login</p>
      </div>
      <div className="loginButton2" onClick={() => setLogin(true)}>
        <span>New User?</span>
        <p>SIGN UP</p>
      </div>
    </div>
  );
};

export default LoginSignUPComponent;
