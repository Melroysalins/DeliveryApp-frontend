import React, { useEffect, useState } from "react";
import "./index.css";
import { getSpecialOfferRestaurant } from "../../api/specialOffer";
import RestaurantCard from "../../component/restaurantCard";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const SpecialOffer = () => {
  const [restauarantlist, setRestaurantList] = useState();

  const FetchRestaurantWithOffers = async () => {
    const result = await getSpecialOfferRestaurant();

    if (result?.status === 200) {
      setRestaurantList(result);
    }
  };

  useEffect(() => {
    FetchRestaurantWithOffers();
  }, []);

  return (
    <div className="SpecialOfferContainner">
      {restauarantlist &&
        restauarantlist?.sorted?.map((list) => (
          <Link to={`/restaurant/${list?.storeID}`}>
            <RestaurantCard key={list?._id} data={list} />
          </Link>
        ))}
    </div>
  );
};

export default SpecialOffer;
