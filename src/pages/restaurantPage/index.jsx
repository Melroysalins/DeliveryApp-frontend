import React from "react";
import "./index.css";
import BasicBreadcrumbs from "../../component/breadCrumbs";
import TopRestaurantChains from "../../component/topRestaurantChains";
import RestaurantInfoModal from "../../component/restaurantInfoModal";

const RestaurantPage = () => {
  return (
    <div className="RestaurantPage">
      <BasicBreadcrumbs />

      <div className="RestaurantInfoSection">
        <RestaurantInfoModal />
      </div>
    </div>
  );
};

export default RestaurantPage;
