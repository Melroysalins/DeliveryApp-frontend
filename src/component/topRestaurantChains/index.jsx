import React, { useState, useEffect } from "react";
import "./index.css";

const TopRestaurantChains = ({ data }) => {
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
        marginTop: "15px",
      }}
    >
      <div className="TopRestaurantChain">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default TopRestaurantChains;
