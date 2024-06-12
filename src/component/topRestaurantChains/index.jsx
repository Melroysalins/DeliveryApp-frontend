import React, { useState, useEffect } from "react";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TopRestaurantChains = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="TopRestaurantChain">
        <p>Top restaurant chains in Bangalore </p>
      </div>
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
    </div>
  );
};

export default TopRestaurantChains;
