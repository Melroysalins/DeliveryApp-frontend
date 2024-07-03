import React, { useEffect, useState } from "react";
import "./index.css";
import PaymentModalStoreInfo from "../../component/paymentModalStore";
import OrderesList from "../../component/orderedList";
import TotalPayAmount from "../../component/totalPayAmount";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OrderSaveFunction } from "../../api/orderSave";
import { AddItemToCart } from "../../store/cartSlice";
import { getCartItems } from "../../api/getCartItems";
import { EstablishConnection } from "../../api/Connection";

const PaymentPage = () => {
  const [orders, setOrder] = useState();

  const dispatch = useDispatch();

  const FetchCartItems = async () => {
    const userID = localStorage.getItem("userid");

    const result = await getCartItems({ userID });

    const storeID = "666ff693d7bcb064f9c1080b";

    if (result?.status === 200) {
      dispatch(AddItemToCart(result?.userCartItem[0]));
    } else if (result?.status === 201) {
      dispatch(AddItemToCart(result?.products));
    }
  };
  useEffect(() => {
    FetchCartItems();
  }, []);
  return (
    <div className="PaymentPage">
      <div className="textwrapper">
        <h2>
          Your order will be processed shortly. We will notify you once the
          restaurant accepts your order.
        </h2>
      </div>
    </div>
  );
};

export default PaymentPage;
