import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./index.css";

const ShimmerCard = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 500);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="ShimmerGrid">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={200}
          width={!isScreenSmall ? 290 : 200}
        />
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={10}
          width={120}
          sx={{ borderRadius: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={200}
          width={!isScreenSmall ? 290 : 200}
        />
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={10}
          width={120}
          sx={{ borderRadius: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={200}
          width={!isScreenSmall ? 290 : 200}
        />
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={10}
          width={120}
          sx={{ borderRadius: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={200}
          width={!isScreenSmall ? 290 : 200}
        />
        <Skeleton
          // Added key to avoid warning
          variant="rectangular"
          height={10}
          width={120}
          sx={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default ShimmerCard;
