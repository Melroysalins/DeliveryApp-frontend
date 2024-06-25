import React from "react";
import "./index.css";
import InfoSection from "../infoSection";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const CartLayout = () => {
  return (
    <div className="cartLayoutContainner">
      <div className="Wrapper_Containner">
        <div className="Layout1">
          <InfoSection
            header={"Account"}
            sidemessage={
              "To place your order now, log in to your existing account or sign up."
            }
            showloginbutton={true}
            icon={<PersonIcon />}
          />
          <InfoSection header={"Delivery address"} icon={<PlaceIcon />} />
          <InfoSection header={"Payment"} icon={<AccountBalanceWalletIcon />} />
        </div>
        <div className="Layout2">Layout2</div>
      </div>
    </div>
  );
};

export default CartLayout;
