import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const ButtonNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className="ButtonNavigationContainner">
      <button onClick={() => navigate("/")}>SEE RESTAURANTS NEAR YOU</button>
    </div>
  );
};

export default ButtonNavigation;
