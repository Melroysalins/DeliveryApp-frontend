import React, { useEffect, useState } from "react";
import "./index.css";
import { NavbarCategoryList } from "../../constants";
import CategoryList from "../categoryList";

const NavCategory = ({ activepath, setActivePath }) => {
  return (
    <div className="NavCategoryContainner">
      {NavbarCategoryList?.map((categoryList) => (
        <CategoryList
          data={categoryList}
          key={categoryList?.id}
          activepath={activepath}
          setActivePath={setActivePath}
        />
      ))}
    </div>
  );
};

export default NavCategory;
