import React, { useEffect, useState } from "react";
import "./index.css";
import SectionHeader from "../sectionHeader";
import SectionMessage from "../sectionMessage";
import SectionImage from "../sectionImage";
import LoginSignUPComponent from "../loginSignup";
import SiderIcon from "../sideIcon";
import CartLoginComponent from "../cartloginComponent";
import AlreadyLoginInfo from "../alreadyloginInfo";
import AddressDisplay from "../addressDisplay";
import PayNowButton from "../payNowButton";

const InfoSection = ({
  header,
  sidemessage,
  showloginbutton,
  icon,
  account,
  address,
  payment,
}) => {
  const [login, setLogin] = useState(false);
  const [load, setLoad] = useState(true);

  const userloggedInfo = JSON.parse(localStorage.getItem("isloggin"));

  return (
    <div className="InfoSection">
      <div className="Section1">
        <div className="Info_Section">
          <SectionHeader header={header} />
          <SectionMessage sidemessage={sidemessage} />
          <SiderIcon icon={icon} />
        </div>
        {showloginbutton && <SectionImage />}
      </div>
      {showloginbutton && !userloggedInfo && (
        <LoginSignUPComponent setLogin={setLogin} />
      )}

      {!userloggedInfo && login && load && (
        <CartLoginComponent cartpage={true} load={load} setLoad={setLoad} />
      )}
      {userloggedInfo && account && load && <AlreadyLoginInfo />}
      {address && <AddressDisplay />}
      {payment && <PayNowButton />}
    </div>
  );
};

export default InfoSection;
