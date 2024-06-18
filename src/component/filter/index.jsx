import React, { useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";

const Filter = ({ data, setFilterCount, filtercount }) => {
  const [filtername, setFiltername] = useState("");

  const [filterlist, setFilterList] = useState({
    deliveryTime: false,
    Veg: false,
    Nonveg: false,
    offer: false,
  });

  const handleSelectedFilter = (name) => {
    setFiltername(name);

    let updatedFilterList = { ...filterlist };

    if (name === "Fast Delivery") {
      updatedFilterList.deliveryTime = !updatedFilterList.deliveryTime;
    }
    if (name === "Veg") {
      updatedFilterList.Veg = !updatedFilterList.Veg;
    }
    if (name === "NonVeg") {
      updatedFilterList.Nonveg = !updatedFilterList.Nonveg;
    }
    if (name === "Offer") {
      updatedFilterList.offer = !updatedFilterList.offer;
    }
    setFilterList(updatedFilterList);
    setFilterCount(filtercount + 1);
  };

  const handleRemoveSelectedFilter = (event, name) => {
    event.stopPropagation();
    setFiltername("");
    setFilterCount(filtercount - 1);
  };

  useEffect(() => {
    console.log("name", filterlist);
  }, [filterlist]);

  return (
    <div
      className={filtername === data?.name ? "selectedlist" : "filter"}
      onClick={() => handleSelectedFilter(data?.name)}
    >
      {data?.name}
      {filtername === data?.name ? (
        <CloseIcon
          sx={{ marginLeft: "6px" }}
          onClick={(event) => handleRemoveSelectedFilter(event, data?.name)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
