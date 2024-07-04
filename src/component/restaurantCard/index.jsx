import React, { useState } from "react";
import "./index.css";
import RestaurantName from "../restaurantName";
import RestaurantRating from "../restaurantRating";
import RestaurantAddress from "../restaurantAddress";
import Skeleton from "@mui/material/Skeleton";

const RestaurantCard = ({ data }) => {
  console.log(
    "storename--->",
    data?.storename + " offer---> " + typeof data?.offer
  );
  return (
    <div className="RestaurantCardContainner">
      <div className="RestaurantCard">
        <div className="RestaurantImageContainner">
          <img src={data?.file?.url} loading="lazy" />
          <div className="OverLayContainner">
            <p>
              {data?.offer &&
              data.offer !== "null" &&
              data.offer !== "" &&
              data.offer !== "0"
                ? `up to ${data.offer}% off`
                : ""}
            </p>
          </div>
        </div>
        <div className="RestaurantInfo">
          <div className="RestaurantInfoContainner">
            <RestaurantName name={data?.storename} />
            <RestaurantRating rating={data?.deliveryTime} />
            <RestaurantAddress cuisine={data?.cuisine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
