import React, { useState } from "react";
import "./index.css";
import RestaurantName from "../restaurantName";
import RestaurantRating from "../restaurantRating";
import RestaurantAddress from "../restaurantAddress";
import Skeleton from "@mui/material/Skeleton";

const RestaurantCard = ({ data }) => {
  console.log("The data-->", data);
  return (
    <div className="RestaurantCardContainner">
      <div className="RestaurantCard">
        <div className="RestaurantImageContainner">
          <img src={data?.file?.url} />
          <div className="OverLayContainner">
            <p>
              {data?.offer !== "null" ? "up to " + data?.offer + "% 0ff" : ""}
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
