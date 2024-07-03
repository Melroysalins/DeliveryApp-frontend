import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../api/getCartItems";
import { AddItemToCart } from "../../store/cartSlice";

const Cart = () => {
  const [present, setPresent] = useState(true);
  const navigate = useNavigate();
  const selector = useSelector((store) => store?.cart?.cartitems?.products);

  const dispatch = useDispatch();

  const userloggedInfo = JSON.parse(localStorage.getItem("isloggin"));

  const FetchCartItems = async () => {
    const userID = localStorage.getItem("userid");

    const result = await getCartItems({ userID });

    if (result?.status === 200) {
      dispatch(AddItemToCart(result?.userCartItem[0]));
    } else if (result?.status === 201) {
      dispatch(AddItemToCart(result?.products));
    }
  };

  useEffect(() => {
    FetchCartItems();
    selector ? setPresent(true) : setPresent(false);
  }, []);
  return (
    <div className="CartDiv" onClick={() => navigate("/cart")}>
      <div className="CartIconContainner">
        {!present ? (
          <>
            <svg
              class="_1GTCc"
              viewBox="-1 0 37 32"
              height="20"
              width="20"
              fill="#686b78"
            >
              <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
            </svg>
            <span className="cartcountspan">
              {selector ? selector.length : 0}
            </span>
          </>
        ) : (
          <>
            <svg
              class="_2MSid"
              viewBox="-1 0 37 32"
              height="20"
              width="20"
              fill="#686b78"
            >
              <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
            </svg>
            <span className="cartcountspan2">
              {selector ? selector.length : 0}
            </span>
          </>
        )}

        <p>Cart</p>
      </div>
    </div>
  );
};

export default Cart;
