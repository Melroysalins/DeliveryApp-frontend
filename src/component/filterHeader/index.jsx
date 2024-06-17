import React from "react";
import "./index.css";

const FilterHeader = ({ filtercount }) => {
  return (
    <div className={filtercount > 0 ? "filteractive" : "FilterHeader"}>
      Filter
      {filtercount > 0 && <p className="count">{filtercount}</p>}
    </div>
  );
};

export default FilterHeader;
