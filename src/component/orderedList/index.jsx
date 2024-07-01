import React from "react";
import "./index.css";

const OrderesList = () => {
  return (
    <div className="OrderedListContainner">
      <div className="OrderedFoodName">
        <p>Veg Pizza</p>
      </div>
      <div className="OrderedQuantity">
        <span>Qty :</span>
        <p>10</p>
      </div>
      <div className="Orderedprice">
        <span>Price :</span>
        <p>100</p>
      </div>
    </div>
  );
};

export default OrderesList;
