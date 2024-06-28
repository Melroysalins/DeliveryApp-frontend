import React, { useState } from "react";
import "./index.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useSelector } from "react-redux";
import AddressModal from "../addressModal";

const AddressDisplay = () => {
  const [open, setOpen] = useState(false);
  const addressSelector = useSelector((store) => store?.user?.userInfo);
  return (
    <div className="DisplayAddressContainner">
      <div className="FirstAddressContainner">
        <div className="hdhdhd">
          <FmdGoodIcon />
          <div className="addresss">
            <p>Other</p>
            <span>
              {addressSelector?.village +
                ", " +
                addressSelector?.state_district +
                ", " +
                addressSelector?.state}
            </span>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="deliverhere">Deliver Here</div>
        </div>
      </div>
      <div className="SecondAddressContainner">
        <div className="hdhdhd">
          <AddLocationAltIcon />
          <div className="addresss">
            <p>Add New Address</p>
            <span>Click below to add new address</span>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="deliverhere2" onClick={() => setOpen(true)}>
            Add New
          </div>
        </div>
      </div>
      <AddressModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddressDisplay;
