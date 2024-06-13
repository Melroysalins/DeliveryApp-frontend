import React, { useState } from "react";
import "./index.css";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { getUserCurrentLocation } from "../../api/getLocation";
import { setUserLocation } from "../../api/setLocation";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";

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

              if (response?.status === 200) {
                dispatch(setUserInfo(result?.user?.address[0]));
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
