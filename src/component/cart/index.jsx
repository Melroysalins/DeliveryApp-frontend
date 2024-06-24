import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [present, setPresent] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="CartDiv" onClick={() => navigate("/cart")}>
      <div className="CartIconContainner">
        {present ? (
          <>
            <svg
              class="_1GTCc"
              viewBox="-1 0 37 32"
              height="20"
              width="20"
              fill="#686b78"
            >
              <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
            </svg>
            <span className="cartcountspan">1</span>
          </>
        ) : (
          <>
            <svg
              class="_2MSid"
              viewBox="-1 0 37 32"
              height="20"
              width="20"
              fill="#686b78"
            >
              <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
            </svg>
            <span className="cartcountspan2">1</span>
          </>
        )}

        <p>Cart</p>
      </div>
    </div>
  );
};

export default Cart;
