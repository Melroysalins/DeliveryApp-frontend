import React from "react";
import "./index.css";

const SectionHeader = ({ header }) => {
  return (
    <div className="SectionHeader">
      <p>{header}</p>
    </div>
  );
};

export default SectionHeader;
