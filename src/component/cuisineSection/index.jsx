import React from "react";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

const CuisineSection = ({ data }) => {
  return (
    <div className="CuisineSection">
      <OutdoorGrillIcon />
      <p className="CusineName">{data}</p>
    </div>
  );
};

export default CuisineSection;
