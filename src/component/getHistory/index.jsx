import React, { useEffect, useState } from "react";
import "./index.css";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { getUserCurrentLocation } from "../../api/getLocation";
import { setUserLocation } from "../../api/setLocation";
import { useDispatch } from "react-redux";
import { AdduserInfo, setUserInfo } from "../../store/userSlice";
import { getRestaurantListBasedonLocation } from "../../api/getRestaurantList";
import {
  addRestaurantList,
  addtopRatedRestaurantList,
} from "../../store/restaurantlistSlice";

const GetHistory = ({ setOpen }) => {
  const dispatch = useDispatch();

  const handleFetchCurrenLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const result = await getUserCurrentLocation({
              latitude,
              longitude,
            });
            if (result?.status?.code === 200) {
              const { village, state_district, state } =
                result?.results[0]?.components;

              const _id = localStorage.getItem("userid");

              const response = await setUserLocation({
                village,
                state_district,
                state,
                _id,
              });

              const response2 = await response.json();

              if (response2?.status === 200) {
                dispatch(setUserInfo(response2?.user?.address[0]));
                dispatch(AdduserInfo(response2?.user));
                localStorage.setItem(
                  "useraddress",
                  JSON.stringify(response2?.user?.address[0])
                );
                const { state_district } = JSON.parse(
                  localStorage.getItem("useraddress")
                );
                const data = await getRestaurantListBasedonLocation({
                  state_district,
                });

                if (data?.status === 200) {
                  console.log("The data --->", data);
                  dispatch(addtopRatedRestaurantList(data?.list?.toprated));
                  dispatch(addRestaurantList(data?.list?.restaurantlist));
                }

                setOpen(false);
              }
            }
          } catch (error) {
            // Handle errors from the async function
            console.error("Error fetching user location:", error);
          }
        },
        (error) => {
          // Handle errors from the geolocation API
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    console.log("dispatch called");
  }, [dispatch]);

  return (
    <div
      className="GetHistoryContainner"
      onClick={() => handleFetchCurrenLocation()}
    >
      <MyLocationIcon />
      <p>Get Current Location</p>
    </div>
  );
};

export default GetHistory;
