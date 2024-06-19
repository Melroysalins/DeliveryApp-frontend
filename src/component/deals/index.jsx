import React from "react";
import "./index.css";
import OfferDeal from "../offerDeal";

const DealsSection = () => {
  return (
    <div className="DealsSectionContainner">
      <p>Deals for you</p>
      <div className="DealsContainner">
        <OfferDeal />
      </div>
    </div>
  );
};

export default DealsSection;
