import React from "react";
import "./index.css";
import ItemPrice from "../itemPrice";
import { useSelector } from "react-redux";

const BillDetails = ({ bill }) => {
  const selector = useSelector((store) => store?.cart?.cartitems?.totalprice);
  return (
    <div className="BillDetailsContainner">
      <div className="billdetailsheader">
        <p>Bill Details</p>
      </div>
      <div className="ItemPriceSection">
        <ItemPrice price={bill} />
      </div>
    </div>
  );
};

export default BillDetails;
