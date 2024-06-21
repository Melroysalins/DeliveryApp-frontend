import React from "react";
import "./index.css";
import Button from "@mui/material/Button";

const ProductImage = ({ image, issearchpage }) => {
  return (
    <div className={!issearchpage ? "ProductImageDiv" : "searchPageIMageDiv"}>
      <img src={image} />
      <button className="AddProductButton">ADD</button>
    </div>
  );
};

export default ProductImage;
