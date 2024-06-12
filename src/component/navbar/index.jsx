import React, { useState, useEffect } from "react";
import "./index.css";
import Logo from "../logo";
import NavCategory from "../navCategory";
import UserLocation from "../userLocation";

const NavBar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 930);

  useEffect(() => {
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
