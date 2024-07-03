import React from "react";
import "./index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const TrackOrderDisplay = ({ data }) => {
  return (
    <div className="TrackOrderDisplayContainner">
      <div className="FirstSection">
        <div className="RestaurantNandAddress">
          <div className="RestaurantLooggg">
            <img src={data?.storeDetails?.[0]?.file?.url} />
          </div>
          <div className="RNameandTotalItems">
            <p>{data?.storeDetails?.[0]?.storename}</p>
            <span>{data?.productDetails?.length + " "} items</span>
          </div>
        </div>
        <div className="LastLocation">
          <LocationOnIcon sx={{ fontSize: "14px" }} />
          <p>
            {
              data?.storeDetails?.[0]?.address?.[0]?.state_district.split(
                " "
              )[0]
            }
          </p>
        </div>
      </div>
      <div className="SecondSection">
        <div className="TotalAmountSectiond">
          <p>Total Amount</p>
          <div className="LastAmount">
            <CurrencyRupeeIcon sx={{ fontSize: "17px" }} />
            <span>{data?.totalamount}</span>
          </div>
        </div>
        <div className="order_statue_containner">
          <p>Order Status</p>
          <span
            style={{
              color:
                data?.orderStatus === "pending"
                  ? "orange"
                  : data?.orderStatus === "accepted"
                  ? "green"
                  : data?.orderStatus === "delivered"
                  ? "black"
                  : "black",
            }}
          >
            {data?.orderStatus}
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TrackOrderDisplay;
