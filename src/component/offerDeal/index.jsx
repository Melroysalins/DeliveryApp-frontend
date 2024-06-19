import React from "react";
import "./index.css";
import generic from "../../assets/generic.png";

const OfferDeal = ({ offer }) => {
  return (
    <div className="OfferDealMenu">
      <img src={generic} />
      <p>Up to {offer} Off</p>
    </div>
  );
};

export default OfferDeal;
