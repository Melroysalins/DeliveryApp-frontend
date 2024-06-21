import React from "react";
import "./index.css";
import RestaurantInfoComponent from "../restaurantinfo";
import ProductName from "../productName";
import ProductPrice from "../productPrice";
import ProductImage from "../productImage";
import { useNavigate } from "react-router-dom";

const RestaurantProductStoreCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="MainOuterContainner">
      <div className="TheInfoContainner">
        <RestaurantInfoComponent
          time={data?.deliveryTime}
          storename={data?.storename}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          onClick={() => navigate(`/restaurant/${data?.storeID}`)}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
      <div className="NamandPriceContainner">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "15px",
          }}
        >
          <ProductName name={data?.productname} />
          <ProductPrice price={data?.price} />
        </div>
        <ProductImage image={data?.productimage?.url} issearchpage={true} />
      </div>
    </div>
  );
};

export default RestaurantProductStoreCard;
