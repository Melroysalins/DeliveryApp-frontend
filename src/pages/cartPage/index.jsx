import React, { useEffect, useState } from "react";
import "./index.css";
import CartEmpty from "../../component/cartEmpty";
import CartLayout from "../../component/cartLayout";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../api/getCartItems";
import { AddItemToCart } from "../../store/cartSlice";

const CartPage = () => {
  const [showcartpage, setShowCartPage] = useState();

  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  const FetchCartItems = async () => {
    const userID = localStorage.getItem("userid");

    const result = await getCartItems({ userID });

    if (result?.status === 200) {
      setShowCartPage(result?.userCartItem[0]);

      dispatch(AddItemToCart(result?.userCartItem[0]));
    } else if (result?.status === 201) {
      dispatch(AddItemToCart(result?.products));
    }
  };

  useEffect(() => {
    FetchCartItems();
  }, [load]);

  return (
    <div className="CartPage">
      {showcartpage?.products?.length > 0 ? (
        <CartLayout
          showcartpage={showcartpage}
          setLoad={setLoad}
          setShowCartPage={setShowCartPage}
        />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default CartPage;
