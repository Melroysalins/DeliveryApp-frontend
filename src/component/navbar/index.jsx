import React, { useState, useEffect } from "react";
import "./index.css";
import Logo from "../logo";
import NavCategory from "../navCategory";
import UserLocation from "../userLocation";
import { getUserDetails } from "../../api/getUser";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";

const NavBar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 930);
  const dispatch = useDispatch();

  const FetchUserDetails = async () => {
    const _id = localStorage.getItem("userid");

    const result = await getUserDetails({ _id });

    dispatch(setUserInfo(result?.user?.address[0]));
  };

  useEffect(() => {
    FetchUserDetails();
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 930);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="NavBar">
      <div className="NavBarContainner">
        <Logo />
        {!isScreenSmall && <NavCategory />}
        <UserLocation />
      </div>
    </div>
  );
};

export default NavBar;
