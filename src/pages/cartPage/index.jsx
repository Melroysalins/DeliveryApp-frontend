import React from "react";
import "./index.css";
import CartEmpty from "../../component/cartEmpty";
import CartLayout from "../../component/cartLayout";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartSelector = useSelector((store) => store?.cart?.cartitems?.products);
  return (
    <div className="CartPage">
      {cartSelector ? <CartLayout /> : <CartEmpty />}
    </div>
  );
};

export default CartPage;
