import React, { useState } from "react";
import "./index.css";
import LoginForm from "../loginForm";

const CartLoginComponent = ({ cartpage, load, setLoad }) => {
  const [login, setLogin] = useState(false);
  return (
    <div className="CartLoginComponentContainner">
      {login && (
        <div className="MessageContainner">
          <p onClick={() => setLogin(false)}>Sign up or </p>
          <span onClick={() => setLogin(true)}>log in to your account</span>
        </div>
      )}
      {!login && (
        <div className="MessageContainner">
          <p onClick={() => setLogin(true)}>Enter login details or </p>
          <span onClick={() => setLogin(false)}>create an account</span>
        </div>
      )}
      <LoginForm
        iscartPage={true}
        login={login}
        load={load}
        setLoad={setLoad}
      />
    </div>
  );
};

export default CartLoginComponent;
