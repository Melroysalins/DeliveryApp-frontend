import React from "react";
import "./index.css";
import LOGO from "../../assets/LOGO.png";

const Logo = () => {
  return (
    <div className="LogoContainner">
      <img src={LOGO} alt="logo" />
    </div>
  );
};

export default Logo;
