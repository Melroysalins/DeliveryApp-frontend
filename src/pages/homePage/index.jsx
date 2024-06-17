import React from "react";
import "./index.css";
import OfferBanner from "../../component/offerBanner";
import TopRestaurantChains from "../../component/topRestaurantChains";
import RestaurantCard from "../../component/restaurantCard";
import Filters from "../../component/filters";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageContainner">
        <TopRestaurantChains
          data={"Top rated  restaurant chains in Bangalore"}
        />
        <div className="TopRatedRestaurantContainner">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
        <div className="Divider"></div>
        <div className="AllRestaurantSection">
          <TopRestaurantChains
            data={"Restaurants with online food delivery in Bangalore"}
          />
          <Filters />

          <div className="RestauranContainner">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
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
    </div>
  );
};

export default HomePage;
