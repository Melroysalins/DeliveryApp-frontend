import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ItemPrice = ({ price }) => {
  return (
    <div className="ItemPrice">
      <p>Item Total</p>
      <span>
        <CurrencyRupeeIcon sx={{ fontSize: "11px" }} /> {price}
      </span>
    </div>
  );
};

export default ItemPrice;
