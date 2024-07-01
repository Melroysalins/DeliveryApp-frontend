import React from "react";
import "./index.css";
import CouponCartToast from "../../assets/CouponCartToast.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const OfferAppliedComponent = ({ value }) => {
  return (
    <div className="OfferAppliedContainner">
      <img src={CouponCartToast} />

      <div className="MessageContainner">
        <p>OFFER APPLIED</p>
        <span style={{ color: "black" }}>
          <CurrencyRupeeIcon
            sx={{ fontSize: "22px", color: "black", fontWeight: "bold" }}
          />{" "}
          {value}
        </span>
      </div>
    </div>
  );
};

export default OfferAppliedComponent;
