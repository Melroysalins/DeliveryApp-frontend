import React from "react";
import "./index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PaymentModalStoreInfo = () => {
  return (
    <div className="PaymentModalStoreInfo">
      <div className="StoreImageDD">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mkbgksj3ou3gsc7znsdd" />
      </div>
      <div className="storenameDD">
        <p>Manipal Express</p>
      </div>
      <div className="storelocationDD">
        <LocationOnIcon sx={{ fontSize: "16px", color: "#60b246;" }} />
        <p>Manipal</p>
      </div>
    </div>
  );
};

export default PaymentModalStoreInfo;
