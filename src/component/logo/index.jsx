import React from "react";
import "./index.css";
import LOGO from "../../assets/LOGO.png";
import { useNavigate } from "react-router-dom";

const Logo = ({ setActivePath }) => {
  const navigate = useNavigate();
  return (
    <div className="LogoContainner">
      <img
        src={LOGO}
        alt="logo"
        onClick={() => {
          setActivePath("Home");
          navigate("/");
        }}
      />
    </div>
  );
};

export default Logo;
