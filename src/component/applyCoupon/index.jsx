import React, { useState } from "react";
import "./index.css";
import AddressModal from "../addressModal";
import { OfferApply } from "../../api/offerApplied";
import { useDispatch } from "react-redux";
import { AddItemToCart } from "../../store/cartSlice";

const ApplyCoupon = ({ data, setShowCartPage }) => {
  const [applied, setApplied] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOffer = async () => {
    setOpen(true);
    setApplied(true);

    let userID = localStorage.getItem("userid");

    let offer = data?.storeDetails[0].offer;

    const result = await OfferApply({ userID, applied: true, offer });

    if (result?.status === 200) {
      setShowCartPage(result?.cart);
      dispatch(AddItemToCart(result?.cart));
    }
  };

  const handleRemoveOffer = async () => {
    setOpen(false);
    setApplied(true);

    let userID = localStorage.getItem("userid");

    let offer = data?.storeDetails[0].offer;

    const result = await OfferApply({ userID, applied: false, offer });

    if (result?.status === 200) {
      setShowCartPage(result?.cart);
      dispatch(AddItemToCart(result?.cart));
    }
  };

  return (
    <>
      <div className="ApplyCouponeContainner">
        <div className="CouponBox" onClick={() => handleOffer()}>
          <p>Apply Coupon -{" " + data?.storeDetails[0]?.offer + "% off"}</p>
        </div>
        {data?.offerapplied && (
          <p className="remove" onClick={() => handleRemoveOffer()}>
            Remove
          </p>
        )}
      </div>
      <AddressModal
        open={open}
        setOpen={setOpen}
        applied={applied}
        value={data?.totalprice}
      />
    </>
  );
};

export default ApplyCoupon;
