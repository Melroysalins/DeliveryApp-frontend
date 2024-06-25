import React from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CartItems = () => {
  return (
    <div className="CartItems">
      <div className="cartdisplayicon">
        <div className="dott"></div>
      </div>
      <div className="cartproductname">
        <p>Veg Pizza</p>
      </div>
      <div className="cartItemIncrementContainner">
        <button className="minus">-</button>
        <p>1</p>
        <button className="plus">+</button>
      </div>
      <div className="pricedisplay">
        <CurrencyRupeeIcon sx={{ fontSize: "13px" }} />
        <p>99</p>
      </div>
    </div>
  );
};

export default CartItems;
