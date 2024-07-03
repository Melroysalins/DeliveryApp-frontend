import React, { useState } from "react";
import "./index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { addProductToCart, removeProductQuantity } from "../../api/addtoCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../api/getCartItems";
import { AddItemToCart } from "../../store/cartSlice";
import CustomizedSnackbars from "../snackBar";

const CartItems = ({ data, setLoad, setShowCartPage }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const storeID = useSelector(
    (store) => store?.cart?.cartitems?.storeDetails[0].storeID
  );

  const dispatch = useDispatch();

  const userID = localStorage.getItem("userid");

  const _id = JSON.parse(localStorage.getItem("cart"));

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleQuantityIncrement = async () => {
    console.log("data--->", data);

    const result = await addProductToCart({ _id: data?.productID, storeID });

    if (result?.status === 200) {
      const result = await getCartItems({ userID });

      if (result?.status === 200) {
        dispatch(AddItemToCart(result?.userCartItem[0]));
      }
    } else if (result?.status === 406) {
      setOpen(true);
      setSeverity("error");
      setMessage(result?.message);
    }
  };

  const handleQuantityDecrement = async () => {
    if (userID) {
      const result = await removeProductQuantity({
        _id: data?.productID,
        storeID,
        userID,
        cartID: "",
      });
      if (result?.status === 200) {
        const result = await getCartItems({ userID });
        setLoad(true);
        setShowCartPage(result?.userCartItem[0]);
        if (result?.status === 200) {
          dispatch(AddItemToCart(result?.userCartItem[0]));
        }
      }
    } else {
      const result = await removeProductQuantity({
        _id: data?.productID,
        storeID,
        userID,
        cartID: _id?._id,
      });
      if (result?.status === 200) {
        const result = await getCartItems({ userID });
        setLoad(true);
        setShowCartPage(result?.userCartItem[0]);
        if (result?.status === 200) {
          dispatch(AddItemToCart(result?.userCartItem[0]));
        }
      }
    }
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
        <button
          className="minus"
          disabled={data?.quantity === 0 ? true : false}
          onClick={() => handleQuantityDecrement()}
        >
          -
        </button>
        <p>{data?.quantity}</p>
        <button
          disabled={!data?.increment ? true : false}
          className="plus"
          onClick={() => handleQuantityIncrement()}
        >
          +
        </button>
      </div>
      <div className="pricedisplay">
        <CurrencyRupeeIcon sx={{ fontSize: "13px" }} />
        <p>{data?.price}</p>
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
    </div>
  );
};

export default CartItems;
