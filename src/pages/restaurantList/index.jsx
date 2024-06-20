import React, { useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SearchResult from "../../component/searchresult";

const RestaurantList = () => {
  const [searchvalue, setSearchValue] = useState("");
  return (
    <div className="MainSearchPageContainner">
      <div className="MainSearchBoxContainner">
        <input
          type="text"
          placeholder="Search for foods"
          value={searchvalue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!searchvalue && <SearchIcon className="SearchIconName" />}
        {searchvalue && (
          <CloseIcon
            className="SearchIconName"
            sx={{ cursor: "pointer" }}
            onClick={() => setSearchValue("")}
          />
        )}
      </div>
      <div className="SearchListDisplayContainner">
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
};

export default RestaurantList;
