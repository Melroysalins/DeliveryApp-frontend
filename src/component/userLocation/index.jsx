import React from "react";
import "./index.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserLocation = () => {
  return (
    <>
      <div className="UserLocationContainner">
        <p>Other</p>
        <input type="text" placeholder="Udupi , Manipura" />
        <ExpandMoreIcon className="dropdownIcon" />
      </div>
      <p className="LoginList">Login</p>
    </>
  );
};

export default UserLocation;
