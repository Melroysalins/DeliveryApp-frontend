import React from "react";
import "./index.css";

export const RestaurantSection = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
        <p>{capitalizeFirstLetter(data?.storename)}</p>
        <span>
          {capitalizeFirstLetter(
            data?.address[0]?.state_district?.split(" ")[0]
          )}
        </span>
        <div className="section_divider"></div>
      </div>
    </div>
  );
};
