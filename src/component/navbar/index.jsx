import React from "react";
import "./index.css";
import Logo from "../logo";
import NavCategory from "../navCategory";
import UserLocation from "../userLocation";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBarContainner">
        <Logo />
        <NavCategory />
        <UserLocation />
      </div>
    </div>
  );
};

export default NavBar;
