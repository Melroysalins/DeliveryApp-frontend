import React, { useState, useEffect } from "react";
import "./index.css";
import ProductName from "../productName";
import ProductPrice from "../productPrice";
import ProductImage from "../productImage";
import ProductDescription from "../productDescription";

const ProductInfo = ({ data, isLast }) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="ProductInfoContainner">
        <div className="ProductNameandPriceContainner">
          <ProductName name={data?.productname} />
          <ProductPrice price={data?.price} />
          {!isScreenSmall && (
            <ProductDescription description={data?.description} />
          )}
        </div>
        <div className="ProductImageContainner">
          <ProductImage image={data?.image?.url} data={data} />
        </div>
      </div>
      {isScreenSmall && <ProductDescription description={data?.description} />}
      {!isLast && <div className="ProductDivider"></div>}
    </div>
  );
};

export default ProductInfo;
