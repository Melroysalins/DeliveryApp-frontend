import React from "react";
import "./index.css";
import InfoSection from "../infoSection";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { RestaurantSection } from "../restaurantSection";
import CartItems from "../cartItems";
import BillDetails from "../billDetails";
import TotalPayAmount from "../totalPayAmount";
import ApplyCoupon from "../applyCoupon";
import { useSelector } from "react-redux";

const CartLayout = () => {
  const selector = useSelector(
    (store) => store?.cart?.cartitems?.storeDetails[0]
  );
  const productSelector = useSelector(
    (store) => store?.cart?.cartitems?.products
  );

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
            account={true}
          />
          <InfoSection
            header={"Delivery address"}
            icon={<PlaceIcon />}
            address={true}
          />
          <InfoSection
            header={"Payment"}
            icon={<AccountBalanceWalletIcon />}
            payment={true}
          />
        </div>
        <div className="Layout2">
          <div className="Layout2Section">
            <RestaurantSection data={selector} />
            <ApplyCoupon data={selector} />
            {productSelector &&
              productSelector?.map((list) => (
                <CartItems key={list?._id} data={list} />
              ))}
            <BillDetails />
          </div>
          <TotalPayAmount />
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
