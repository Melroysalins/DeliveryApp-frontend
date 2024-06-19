import React from "react";
import "./index.css";
import Button from "@mui/material/Button";

const ProductImage = ({ image }) => {
  return (
    <div className="ProductImageDiv">
      <img src={image} />
      <button className="AddProductButton">ADD</button>
    </div>
  );
};

export default ProductImage;
