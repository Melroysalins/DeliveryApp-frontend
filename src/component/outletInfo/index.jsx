import React from "react";
import "./index.css";
import DotDesign from "../dot";

const OutLetInfo = ({ data, name }) => {
  return (
    <div className="OutLetInfoSection">
      <DotDesign />
      <p>{name}</p>
      <h5>{data}</h5>
    </div>
  );
};

export default OutLetInfo;
