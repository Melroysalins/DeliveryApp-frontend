import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const TotalPayAmount = () => {
  return (
    <div className="TotalPayAmountSection">
      <p>To Pay</p>
      <div className="AmountoPay">
        <CurrencyRupeeIcon sx={{ fontSize: "15px" }} />
        <p>900</p>
      </div>
    </div>
  );
};

export default TotalPayAmount;
