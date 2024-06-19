import React, { useState } from "react";
import "./index.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductInfo from "../productInfo";

const RestaurantProductModal = ({ data }) => {
  const [showproduct, setShowProduct] = useState(true);
  return (
    <>
      <div className="RestaurantProductContainner">
        <div
          className="ProductCategoryName"
          onClick={() => setShowProduct(!showproduct)}
        >
          <p>{data?.name}</p>
          <KeyboardArrowDownIcon />
        </div>
        {data &&
          showproduct &&
          data?.product?.length &&
          data?.product?.map((ele, index) => (
            <ProductInfo
              key={ele?._id}
              data={ele}
              isLast={index === data?.product?.length - 1}
            />
          ))}
      </div>
      <div className="CategoryDivider"></div>
    </>
  );
};

export default RestaurantProductModal;
