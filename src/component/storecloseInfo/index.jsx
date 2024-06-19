import React from "react";
import "./index.css";
import StorefrontIcon from "@mui/icons-material/Storefront";

const StoreCloseInfo = () => {
  return (
    <div className="StoreCloseMessageContainner">
      <div className="infoDiv">
        <StorefrontIcon sx={{ color: "#FC8A06;", fontSize: "60px" }} />
        <p>Currently Closed !</p>
      </div>
    </div>
  );
};

export default StoreCloseInfo;
