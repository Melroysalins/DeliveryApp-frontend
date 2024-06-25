import React from "react";
import "./index.css";
import SectionHeader from "../sectionHeader";
import SectionMessage from "../sectionMessage";
import SectionImage from "../sectionImage";
import LoginSignUPComponent from "../loginSignup";
import SiderIcon from "../sideIcon";

const InfoSection = ({ header, sidemessage, showloginbutton, icon }) => {
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
      {showloginbutton && <LoginSignUPComponent />}
    </div>
  );
};

export default InfoSection;
