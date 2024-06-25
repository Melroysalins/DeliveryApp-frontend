import React from "react";
import "./index.css";
import ItemPrice from "../itemPrice";

const BillDetails = () => {
  return (
    <div className="BillDetailsContainner">
      <div className="billdetailsheader">
        <p>Bill Details</p>
      </div>
      <div className="ItemPriceSection">
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
      </div>
    </div>
  );
};

export default BillDetails;
