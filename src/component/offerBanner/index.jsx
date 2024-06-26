import React, { useState, useEffect } from "react";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Banner from "../banner";
import { OfferBannersection } from "../../constants";

const OfferBanner = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="OfferBannerSection">
      {!isScreenSmall && (
        <div className="ScrollContainner">
          <div className="ScrollButton">
            <ArrowBackIcon
              sx={{
                fontSize: !isScreenSmall ? "22px" : "15px",
                padding: "2px",
                marginBottom: "3px",
              }}
            />
          </div>

          <div className="ScrollButton">
            <ArrowForwardIcon
              sx={{
                fontSize: !isScreenSmall ? "22px" : "15px",
                padding: "2px",
                marginBottom: "3px",
              }}
            />
          </div>
        </div>
      )}
      <div className="BannerContainner">
        {OfferBannersection?.map((offerlist) => (
          <Banner data={offerlist} key={offerlist?.id} />
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
