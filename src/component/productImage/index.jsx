import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../../api/addtoCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../api/getCartItems";
import { AddItemToCart } from "../../store/cartSlice";
import ItemExistModal from "../ItemExistModal";
import { deletePreviousCartItem } from "../../api/deletePreviousCartItem";
import CustomizedSnackbars from "../snackBar";

const ProductImage = ({ image, issearchpage, data }) => {
  const [open2, setOpen2] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState();
  const { _id } = useParams();

  const dispatch = useDispatch();

  const userID = localStorage.getItem("userid");

  const cart = useSelector((store) => store?.cart?.cartitems);

  const handleaddtoCart = async () => {
    const result = await addProductToCart({
      storeID: _id || data?.storeID,
      _id: data?._id,
    });

    if (result?.status === 200) {
      const result = await getCartItems({ userID });
      console.log("Result from getcart--->", cart);
      if (!userID) {
        localStorage.setItem("cart", JSON.stringify(result?.userCartItem[0]));
      }
      if (userID) {
        localStorage.removeItem("cart");
      }

      if (result?.status === 200) {
        dispatch(AddItemToCart(result?.userCartItem[0]));
      }
    } else if (result?.status === 201) {
      setOpen2(true);
    } else if (result?.status === 406) {
      setOpen(true);
      setSeverity("error");
    }
  };

  const handleAddnewProductToCart = async () => {
    if (message) {
      const result = await deletePreviousCartItem({ message });

      if (result?.status === 200) {
        const result2 = await addProductToCart({
          storeID: _id || data?.storeID,
          _id: data?._id,
        });

        if (result2?.status === 200) {
          setOpen2(false);
          const result = await getCartItems({ userID });

          if (result?.status === 200) {
            dispatch(AddItemToCart(result?.userCartItem[0]));
          }
        }
      }
    }
  };

  useEffect(() => {
    handleAddnewProductToCart();
  }, [message]);

  return (
    <>
      <div className={!issearchpage ? "ProductImageDiv" : "searchPageIMageDiv"}>
        <img src={image} loading="lazy" />
        <button className="AddProductButton" onClick={() => handleaddtoCart()}>
          ADD
        </button>
      </div>
      <ItemExistModal
        open2={open2}
        setOpen2={setOpen2}
        setMessage={setMessage}
      />
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={"You've added the maximum quantity available for this item"}
      />
    </>
  );
};

export default ProductImage;
