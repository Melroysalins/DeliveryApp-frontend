import React from "react";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Banner from "../banner";
import { OfferBannersection } from "../../constants";

const OfferBanner = () => {
  return (
    <div className="OfferBannerSection">
      <div className="ScrollContainner">
        <div className="ScrollButton">
          <ArrowBackIcon className="scrollicon" />
        </div>
        <div className="ScrollButton">
          <ArrowForwardIcon className="scrollicon" />
        </div>
      </div>
      <div className="BannerContainner">
        {OfferBannersection?.map((offerlist) => (
          <Banner data={offerlist} key={offerlist?.id} />
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
