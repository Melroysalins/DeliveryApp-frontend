import React from "react";
import "./index.css";
import OfferBanner from "../../component/offerBanner";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageContainner">
        <OfferBanner />
        <div className="Divider"></div>
      </div>
    </div>
  );
};

export default HomePage;
