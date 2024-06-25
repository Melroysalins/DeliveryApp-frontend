import React from "react";
import "./index.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";

const AlreadyLoginInfo = () => {
  const userinfo = useSelector((store) => store?.user?.user);

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="alreadyloginfo">
        <p>{capitalizeFirstLetter(userinfo?.username)}</p>
        <div className="userinfoDivider"></div>
        <p>{userinfo?.phone}</p>
      </div>
      <VerifiedIcon sx={{ fontSize: "16px", color: "green" }} />
    </div>
  );
};

export default AlreadyLoginInfo;
