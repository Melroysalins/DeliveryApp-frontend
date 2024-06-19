import React from "react";
import "./index.css";
import OfferDeal from "../offerDeal";

const DealsSection = ({ deal }) => {
  return (
    <div className="DealsSectionContainner">
      <p>Deals for you</p>
      <div className="DealsContainner">
        <OfferDeal offer={deal} />
      </div>
    </div>
  );
};

export default DealsSection;
