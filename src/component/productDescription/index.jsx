import React from "react";
import "./index.css";

const ProductDescription = ({ description }) => {
  return (
    <div className="ProductDescription">
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
