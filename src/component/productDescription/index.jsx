import React, { useState } from "react";
import "./index.css";

const ProductDescription = ({ description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="ProductDescription">
      {!show ? (
        <p onClick={() => setShow(true)}>
          {description.slice(0, 80) + "...more"}
        </p>
      ) : (
        <p onClick={() => setShow(false)}>{description}</p>
      )}
    </div>
  );
};

export default ProductDescription;
