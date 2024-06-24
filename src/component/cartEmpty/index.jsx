import React from "react";
import "./index.css";
import cartempty from "../../assets/cartempty.png";
import EmptyCartMessage from "../emptyCartMessage";
import ButtonNavigation from "../buttonNavigate";

const CartEmpty = () => {
  return (
    <div className="CartEmpyPage">
      <div className="cartEmptyImage">
        <img src={cartempty} />
      </div>
      <EmptyCartMessage />
      <ButtonNavigation />
    </div>
  );
};

export default CartEmpty;
