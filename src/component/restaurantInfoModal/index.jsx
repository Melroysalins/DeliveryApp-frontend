import React from "react";
import "./index.css";
import OutLetInfo from "../outletInfo";
import CuisineSection from "../cuisineSection";
import { useSelector } from "react-redux";

const RestaurantInfoModal = ({ info }) => {
  const selector = useSelector((store) => store?.menulist?.restaurantstorelist);

  return (
    <div className="TopContainner">
      <div className="RestaurantInfoModal">
        <div className="RestaurantNameSection">
          <p>{selector?.storename}</p>
        </div>
        {
          <OutLetInfo
            data={info?.address[0]?.state_district.split(" ")[0]}
            name={"Outlet"}
          />
        }
        <OutLetInfo data={selector?.deliveryTime} name={"Time"} />
        <div className="ModalDivider"></div>
        <CuisineSection data={selector?.cuisine} />
      </div>
    </div>
  );
};

export default RestaurantInfoModal;
