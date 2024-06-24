import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryList = ({ data, setActivePath, activepath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // On component mount, set the active path based on the current URL
    console.log("location->", location.pathname);
    setActivePath(location.pathname);
  }, [location.pathname, setActivePath]);

  return (
    <div className="CategoryList">
      <p
        className={activepath === data?.path ? "selected" : "NonSelected"}
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
