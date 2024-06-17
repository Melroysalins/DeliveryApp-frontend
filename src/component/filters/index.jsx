import React, { useState } from "react";
import "./index.css";
import FilterHeader from "../filterHeader";
import { FilterList } from "../../constants";
import Filter from "../filter";

const Filters = () => {
  const [filtercount, setFilterCount] = useState(0);

  return (
    <div className="FiltersContainner">
      <FilterHeader filtercount={filtercount} />
      <div className="FilterList">
        {FilterList?.map((list) => (
          <Filter
            key={list?.id}
            data={list}
            setFilterCount={setFilterCount}
            filtercount={filtercount}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
