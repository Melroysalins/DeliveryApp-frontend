import React from "react";
import "./index.css";

const RestaurantAddress = ({ cuisine }) => {
  return (
    <div className="RestaurantAddress">
      <p>{cuisine}</p>
    </div>
  );
};

export default RestaurantAddress;
