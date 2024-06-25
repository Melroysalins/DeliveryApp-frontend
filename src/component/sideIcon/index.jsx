import React from "react";
import "./index.css";
import PersonIcon from "@mui/icons-material/Person";

const SiderIcon = ({ icon }) => {
  return (
    <div className="SideIconContainner">
      <div className="Icons">{icon}</div>
    </div>
  );
};

export default SiderIcon;
