import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";

const TotalPayAmount = () => {
  const selector = useSelector((store) => store?.cart?.cartitems?.totalprice);
  return (
    <div className="TotalPayAmountSection">
      <p>To Pay</p>
      <div className="AmountoPay">
        <CurrencyRupeeIcon sx={{ fontSize: "15px" }} />
        <p>{selector}</p>
      </div>
    </div>
  );
};

export default TotalPayAmount;
