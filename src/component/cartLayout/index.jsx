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

const CartLayout = ({ showcartpage, setLoad, setShowCartPage }) => {
  const productSelector = useSelector(
    (store) => store?.cart?.cartitems?.products
  );

  return (
    <>
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
              showcartpage={showcartpage}
            />
          </div>
          <div className="Layout2">
            <div className="Layout2Section">
              <RestaurantSection data={showcartpage?.storeDetails[0]} />
              <ApplyCoupon
                data={showcartpage}
                setShowCartPage={setShowCartPage}
              />
              {productSelector &&
                productSelector?.map((list) => (
                  <CartItems
                    key={list?._id}
                    data={list}
                    setLoad={setLoad}
                    setShowCartPage={setShowCartPage}
                  />
                ))}
              <BillDetails bill={showcartpage?.totalprice} />
            </div>
            <TotalPayAmount bill={showcartpage?.totalprice} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLayout;
