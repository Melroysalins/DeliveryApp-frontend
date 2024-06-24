import React, { useEffect, useState } from "react";
import "./index.css";
import FilterHeader from "../filterHeader";
import { FilterList } from "../../constants";
import Filter from "../filter";

const Filters = () => {
  const [filtercount, setFilterCount] = useState(0);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="FiltersContainner">
      {!isScreenSmall && <FilterHeader filtercount={filtercount} />}
      <div className="FilterList">
        <Filter />
      </div>
    </div>
  );
};

export default Filters;
