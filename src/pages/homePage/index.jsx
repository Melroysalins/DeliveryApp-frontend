import React from "react";
import "./index.css";
import OfferBanner from "../../component/offerBanner";
import TopRestaurantChains from "../../component/topRestaurantChains";
import RestaurantCard from "../../component/restaurantCard";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageContainner">
        <OfferBanner />
        <div className="Divider"></div>
        <TopRestaurantChains />
        <div className="TopRatedRestaurantContainner">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
