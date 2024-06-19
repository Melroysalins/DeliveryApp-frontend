import React, { useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";

const Filter = ({ data, setFilterCount, filtercount }) => {
  const [filtername, setFiltername] = useState("");

  const [deliveryTime, setDeliveryTime] = useState(false);

  const [offer, setOffer] = useState(false);

  const [Veg, setVeg] = useState(false);

  const handleSelectedFilter = (name) => {
    setFiltername(name);

    if (name === "Offer") {
      setOffer(true);
    } else if (name === "Veg") {
      setVeg(true);
    }
  };

  const handleRemoveSelectedFilter = (event, name) => {
    event.stopPropagation();
    setFiltername("");
    setFilterCount(filtercount - 1);
  };

  useEffect(() => {}, [offer, Veg]);

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
