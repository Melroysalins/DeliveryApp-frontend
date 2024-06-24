import React, { useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import { FilterList } from "../../constants";
import { filterRestaurantList } from "../../api/filter";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantList } from "../../store/restaurantlistSlice";

const Filter = ({ data, setFilterCount, filtercount }) => {
  const [filtername, setFiltername] = useState("");
  const [deliveryTime, setDeliveryTime] = useState(false);
  const [offer, setOffer] = useState(false);
  const [veg, setVeg] = useState(false);
  const [Nonveg, setNonVeg] = useState(false);

  const [searchresult, setSearchResult] = useState();

  const selector = useSelector((store) => store?.resList?.restaurantList);

  const dispatch = useDispatch();

  const handleSelectedFilter = async (name) => {
    setFiltername(name);
    console.log(name);

    if (name === "Fast Delivery") {
      const result = await filterRestaurantList({
        deliveryTime: true,
      });

      if (result?.status === 200) {
        dispatch(addRestaurantList(result?.restaurantInfo));
      }
    }
    if (name === "Veg") {
      const result = await filterRestaurantList({
        veg: true,
      });

      if (result?.status === 200) {
        dispatch(addRestaurantList(result?.restaurantInfo));
      }
    }
    if (name === "NonVeg") {
      const result = await filterRestaurantList({
        Nonveg: true,
      });

      if (result?.status === 200) {
        dispatch(addRestaurantList(result?.restaurantInfo));
      }
    }
  };

  const handleRemoveSelectedFilter = (e, name) => {
    e.stopPropagation();
    setFiltername("");
    dispatch(addRestaurantList(searchresult));
  };

  useEffect(() => {
    setSearchResult(selector);
  }, []);

  return (
    <>
      {FilterList?.map((list) => (
        <div
          className={filtername === list?.name ? "selectedlist" : "filter"}
          onClick={() => handleSelectedFilter(list?.name)}
          key={list?.id}
        >
          {list?.name}
          {filtername === list?.name ? (
            <CloseIcon
              sx={{ marginLeft: "6px" }}
              onClick={(event) => handleRemoveSelectedFilter(event, list?.name)}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default Filter;
