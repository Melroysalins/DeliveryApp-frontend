import React from "react";
import "./index.css";

const RestaurantRating = ({ rating }) => {
  return (
    <div className="DeliveryTimeContainner">
      <div className="dot"></div>
      <p className="time">{rating}</p>
    </div>
  );
};

export default RestaurantRating;
