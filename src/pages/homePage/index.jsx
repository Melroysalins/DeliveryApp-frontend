import React, { useEffect, useState } from "react";
import "./index.css";
import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material"; // To help with layout
import TopRestaurantChains from "../../component/topRestaurantChains";
import RestaurantCard from "../../component/restaurantCard";
import Filters from "../../component/filters";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const selector = useSelector((store) => store?.resList?.restaurantList);

  const [loading, setLoading] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 500);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate a data fetch
    const fetchData = async () => {
      // Simulate a delay
      setTimeout(() => {
        setRestaurantList(selector?.restaurantlist || []);
        setLoading(false);
      }, 1200); // Adjust the delay as needed
    };

    fetchData();
  }, [selector?.restaurantlist, selector]);

  return (
    <div className="HomePage">
      <div className="HomePageContainner">
        {selector?.toprated?.length > 0 && (
          <>
            {" "}
            <TopRestaurantChains data={"Top rated  restaurant chains in"} />
            <div className="TopRatedRestaurantContainner">
              {loading
                ? Array.from(new Array(4)).map((_, index) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <Skeleton
                        key={index} // Added key to avoid warning
                        variant="rectangular"
                        height={200}
                        width={!isScreenSmall ? 290 : 200}
                      />
                      <Skeleton
                        key={index} // Added key to avoid warning
                        variant="rectangular"
                        height={10}
                        width={120}
                        sx={{ borderRadius: "10px" }}
                      />
                    </div>
                  ))
                : selector?.toprated?.map((list) => (
                    <RestaurantCard key={list?._id} data={list} />
                  ))}
            </div>{" "}
          </>
        )}
        <div className="Divider"></div>
        {selector?.restaurantlist?.length > 0 && (
          <div className="AllRestaurantSection">
            <TopRestaurantChains
              data={"Restaurants with online food delivery in"}
            />
            <Filters />

            <div className="RestauranContainner">
              {loading
                ? Array.from(new Array(10)).map((_, index) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <Skeleton
                        key={index} // Added key to avoid warning
                        variant="rectangular"
                        height={200}
                        width={!isScreenSmall ? 290 : 200}
                      />
                      <Skeleton
                        key={index} // Added key to avoid warning
                        variant="rectangular"
                        height={10}
                        width={120}
                        sx={{ borderRadius: "10px" }}
                      />
                    </div>
                  ))
                : selector?.restaurantlist?.map((list) => (
                    <Link to={`/restaurant/${list?.storename}`}>
                      <RestaurantCard key={list?._id} data={list} />
                    </Link>
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
