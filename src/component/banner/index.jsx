import React from "react";
import "./index.css";

const Banner = ({ data }) => {
  return (
    <div className="BannerComponent">
      <img src={data?.image} />
    </div>
  );
};

export default Banner;
