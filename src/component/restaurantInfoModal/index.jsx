import React from "react";
import "./index.css";
import OutLetInfo from "../outletInfo";
import CuisineSection from "../cuisineSection";

const RestaurantInfoModal = () => {
  return (
    <div className="TopContainner">
      <div className="RestaurantInfoModal">
        <div className="RestaurantNameSection">
          <p>Madhuram Misthan Bhandar</p>
        </div>
        <OutLetInfo data={"Manipal Express"} name={"Outlet"} />
        <OutLetInfo data={"30 - 35mins"} name={"Time"} />
        <div className="ModalDivider"></div>
        <CuisineSection />
      </div>
    </div>
  );
};

export default RestaurantInfoModal;
