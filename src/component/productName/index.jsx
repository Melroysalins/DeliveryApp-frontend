import React from "react";
import "./index.css";

const ProductName = ({ name }) => {
  return (
    <div className="ProductNameContainner">
      <p>{name}</p>
    </div>
  );
};

export default ProductName;
