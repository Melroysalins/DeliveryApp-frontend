import React from "react";
import "./index.css";
import { NavbarCategoryList } from "../../constants";
import CategoryList from "../categoryList";

const NavCategory = () => {
  return (
    <div className="NavCategoryContainner">
      {NavbarCategoryList?.map((categoryList) => (
        <CategoryList data={categoryList} key={categoryList?.id} />
      ))}
    </div>
  );
};

export default NavCategory;
