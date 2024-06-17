import React from "react";
import "./index.css";

const RestaurantName = ({ name }) => {
  return (
    <div className="RestaurantName">
      <p>{name}</p>
    </div>
  );
};

export default RestaurantName;
