import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CartItems = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="CartItems">
      <div className="cartdisplayicon">
        <div className="dott"></div>
      </div>
      <div className="cartproductname">
        <p>{capitalizeFirstLetter(data?.productname)}</p>
      </div>
      <div className="cartItemIncrementContainner">
        <button className="minus">-</button>
        <p>{data?.quantity}</p>
        <button className="plus">+</button>
      </div>
      <div className="pricedisplay">
        <CurrencyRupeeIcon sx={{ fontSize: "13px" }} />
        <p>{data?.price}</p>
      </div>
    </div>
  );
};

export default CartItems;
