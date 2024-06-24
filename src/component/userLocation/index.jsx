import React, { useEffect, useState } from "react";
import "./index.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RightTemporaryDrawer from "../modal";
import AddressModal from "../addressModal";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantListBasedonLocation } from "../../api/getRestaurantList";
import { addRestaurantList } from "../../store/restaurantlistSlice";

const UserLocation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [userloggedin, setUserLoggedIn] = useState();
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  const isLoggedIn = JSON.parse(localStorage.getItem("isloggin"));

  const selector = useSelector((store) => store?.user?.userInfo);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    setUserLoggedIn(isLoggedIn);
  }, [userloggedin, load]);

  return (
    <>
      <div className="UserLocationContainner">
        <input
          type="text"
          placeholder={
            selector?.village || selector?.state_district
              ? `${selector?.village || ""}, ${selector?.state_district || ""}`
              : "Udupi"
          }
        />
        <ExpandMoreIcon className="dropdownIcon" onClick={() => handleOpen()} />
      </div>
      {!userloggedin ? (
        <p className="LoginList" onClick={toggleDrawer(true)}>
          Login
        </p>
      ) : (
        <p
          className="LoginList"
          onClick={() => {
            localStorage.setItem("isloggin", false);
            setUserLoggedIn(false);
          }}
        >
          Logout
        </p>
      )}

      <RightTemporaryDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        setIsDrawerOpen={setIsDrawerOpen}
        setLoad={setLoad}
      />
      <AddressModal open={open} setOpen={setOpen} />
    </>
  );
};

export default UserLocation;
