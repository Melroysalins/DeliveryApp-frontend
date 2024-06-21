import React from "react";
import "./index.css";

const RestaurantInfoComponent = ({ time, storename }) => {
  return (
    <div className="RestaurantInfoComponent">
      <p>By {storename}</p>
      <span>{time}</span>
      <div className="infoDivider"></div>
    </div>
  );
};

export default RestaurantInfoComponent;
