import React, { useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";

const Filter = ({ data, setFilterCount, filtercount }) => {
  const [filtername, setFiltername] = useState("");

  const handleSelectedFilter = (name) => {
    setFiltername(name);
    setFilterCount(filtercount + 1);
  };

  const handleRemoveSelectedFilter = (event, name) => {
    event.stopPropagation();
    setFiltername("");
    setFilterCount(filtercount - 1);
  };
  console.log("Filterss", filtername);

  return (
    <div
      className={filtername === data?.name ? "selectedlist" : "filter"}
      onClick={() => handleSelectedFilter(data?.name)}
    >
      {data?.name}
      {filtername === data?.name ? (
        <CloseIcon
          onClick={(event) => handleRemoveSelectedFilter(event, data?.name)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
