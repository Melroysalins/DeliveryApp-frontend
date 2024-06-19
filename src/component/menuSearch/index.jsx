import React from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";

const MenuSearch = () => {
  return (
    <div className="MenuSearchComponent">
      <div className="SearchDisplayContainner">
        Search for dishes
        <SearchIcon className="SearchDisplayIcon" />
      </div>
    </div>
  );
};

export default MenuSearch;
