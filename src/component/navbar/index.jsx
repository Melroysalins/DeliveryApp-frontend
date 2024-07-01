import React, { useState, useEffect } from "react";
import "./index.css";
import Logo from "../logo";
import NavCategory from "../navCategory";
import UserLocation from "../userLocation";
import { getUserDetails } from "../../api/getUser";
import { useDispatch } from "react-redux";
import { AdduserInfo, setUserInfo } from "../../store/userSlice";
import { getRestaurantListBasedonLocation } from "../../api/getRestaurantList";
import {
  addRestaurantList,
  addtopRatedRestaurantList,
} from "../../store/restaurantlistSlice";
import Cart from "../cart";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 930);
  const [activepath, setActivePath] = useState("Home");
  const dispatch = useDispatch();
  const path = useLocation();

  const FetchUserDetails = async () => {
    const _id = localStorage.getItem("userid");

    const userAddress = {
      village: "Dendur",
      state_district: "Udupi District",
      state: "Karnataka",
    };

    if (!_id) {
      localStorage.setItem("useraddress", JSON.stringify(userAddress));
    }

    const result = await getUserDetails({ _id });

    dispatch(setUserInfo(result?.user?.address[0]));
    dispatch(AdduserInfo(result?.user));
  };
  const FetchRestaurantList = async () => {
    const { state_district } = JSON.parse(localStorage.getItem("useraddress"));
    const data = await getRestaurantListBasedonLocation({ state_district });

    if (data?.status === 200) {
      dispatch(addtopRatedRestaurantList(data?.list?.toprated));
      dispatch(addRestaurantList(data?.list?.restaurantlist));
    }
  };

  useEffect(() => {
    FetchUserDetails();
    FetchRestaurantList();
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 930);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="NavBar">
      <div className="NavBarContainner">
        <Logo setActivePath={setActivePath} />
        {!isScreenSmall && (
          <NavCategory activepath={activepath} setActivePath={setActivePath} />
        )}
        <UserLocation />
        <Cart />
      </div>
    </div>
  );
};

export default NavBar;
