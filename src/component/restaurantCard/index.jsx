import React, { useState } from "react";
import "./index.css";
import RestaurantName from "../restaurantName";
import RestaurantRating from "../restaurantRating";
import RestaurantAddress from "../restaurantAddress";
import Skeleton from "@mui/material/Skeleton";

const RestaurantCard = () => {
  return (
    <div className="RestaurantCardContainner">
      <div className="RestaurantCard">
        <div className="RestaurantImageContainner">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bs9qgsy25pn07pzn6xx1"
            }
          />
          <div className="OverLayContainner">
            <p>20% Off up to 50 Rs</p>
          </div>
        </div>
        <div className="RestaurantInfo">
          <div className="RestaurantInfoContainner">
            <RestaurantName />
            <RestaurantRating />
            <RestaurantAddress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
