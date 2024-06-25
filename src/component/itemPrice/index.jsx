import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ItemPrice = () => {
  return (
    <div className="ItemPrice">
      <p>Item Total</p>
      <span>
        <CurrencyRupeeIcon sx={{ fontSize: "11px" }} /> 90
      </span>
    </div>
  );
};

export default ItemPrice;
