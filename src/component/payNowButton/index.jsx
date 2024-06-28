import React from "react";
import "./index.css";
import { PayNowFunction } from "../../api/payNowAPI";

const PayNowButton = () => {
  const handlePayNow = async () => {
    const userID = localStorage.getItem("userid");

    const result = await PayNowFunction({ userID });

    console.log("result--->", result);
  };

  return (
    <div className="PayNowButtonContainner">
      <button onClick={() => handlePayNow()}>PAY NOW</button>
    </div>
  );
};

export default PayNowButton;
