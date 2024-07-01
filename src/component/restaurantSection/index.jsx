import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

export const RestaurantSection = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="RestaurantSection">
      <div className="RestaurantImageDv">
        <img src={data?.file?.url} />
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
