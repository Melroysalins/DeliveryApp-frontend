import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryList = ({ data, setActivePath, activepath }) => {
  const navigate = useNavigate();
  return (
    <div className="CategoryList">
      <p
        className={activepath === data?.name ? "selected" : "NonSelected"}
        onClick={() => {
          setActivePath(data?.name);
          navigate(data?.path);
        }}
      >
        {data?.name}
      </p>
    </div>
  );
};

export default CategoryList;
