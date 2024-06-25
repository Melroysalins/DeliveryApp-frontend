import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../../api/addtoCart";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../api/getCartItems";
import { AddItemToCart } from "../../store/cartSlice";
import ItemExistModal from "../ItemExistModal";
import { deletePreviousCartItem } from "../../api/deletePreviousCartItem";

const ProductImage = ({ image, issearchpage, data }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const { _id } = useParams();

  const dispatch = useDispatch();

  const userID = localStorage.getItem("userid");

  console.log("data-->", data);

  const handleaddtoCart = async () => {
    const result = await addProductToCart({
      storeID: _id || data?.storeID,
      _id: data?._id,
    });

    if (result?.status === 200) {
      const result = await getCartItems({ userID });

      if (result?.status === 200) {
        dispatch(AddItemToCart(result?.userCartItem[0]));
      }
    } else if (result?.status === 201) {
      setOpen(true);
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
          setOpen(false);
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
        <img src={image} />
        <button className="AddProductButton" onClick={() => handleaddtoCart()}>
          ADD
        </button>
      </div>
      <ItemExistModal open={open} setOpen={setOpen} setMessage={setMessage} />
    </>
  );
};

export default ProductImage;
