import React, { useState } from "react";
import "./index.css";
import { PayNowFunction } from "../../api/payNowAPI";
import CustomizedSnackbars from "../snackBar";
import { useSelector } from "react-redux";
import { CheckOutPayment } from "../../api/payment";
import { OrderSaveFunction } from "../../api/orderSave";

const PayNowButton = ({ amount }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const selector = useSelector((store) => store?.user?.user);
  const storeID = useSelector(
    (store) => store?.cart?.cartitems?.storeDetails[0]?.storeID
  );
  const products = useSelector((store) => store?.cart?.cartitems?.products);

  const totalprice = useSelector((store) => store?.cart?.cartitems?.totalprice);

  const handlePayNow = async () => {
    const userID = localStorage.getItem("userid");

    const result = await PayNowFunction({ userID });

    if (result?.status === 409) {
      setOpen(true);
      setMessage(result?.message);
    } else if (result?.status === 500) {
      setOpen(true);
      setMessage(result?.message);
    } else if (result?.status === 200) {
      const result = await CheckOutPayment({
        amount,
        email: selector?.email,
        username: selector?.username,
        phone: selector?.phone,
        userID: userID,
        storeID: storeID,
        products: products,
        totalprice,
      });
    }
  };

  return (
    <>
      <div className="PayNowButtonContainner">
        <button onClick={() => handlePayNow()}>PAY NOW</button>
      </div>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </>
  );
};

export default PayNowButton;
