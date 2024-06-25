import React from "react";
import "./index.css";

export const RestaurantSection = () => {
  return (
    <div className="RestaurantSection">
      <div className="RestaurantImageDv">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/dbb7002f1e8fbf337b65e8f2f7468f9d"
          }
        />
      </div>
      <div className="RestaurantNamePlace">
        <p>Manipal Express</p>
        <span>Udupi</span>
        <div className="section_divider"></div>
      </div>
    </div>
  );
};
