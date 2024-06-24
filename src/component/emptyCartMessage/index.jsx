import React from "react";
import "./index.css";

const EmptyCartMessage = () => {
  return (
    <div className="EmptyCartMessageContainner">
      <div className="Message1">
        <p>Your cart is empty</p>
      </div>
      <div className="Message2">
        <p>You can go to home page to view more restaurants</p>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
