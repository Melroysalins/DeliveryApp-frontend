import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ProductPrice = ({ price }) => {
  return (
    <div className="PriceContainner">
      <CurrencyRupeeIcon className="CurrencyIcon" />
      <p>{price}</p>
    </div>
  );
};

export default ProductPrice;
