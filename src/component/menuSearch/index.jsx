import React from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const MenuSearch = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="MenuSearchComponent">
      <div
        className="SearchDisplayContainner"
        onClick={() => navigate(`/${data?.storename}/${data?.storeID}`)}
      >
        Search for dishes
        <SearchIcon className="SearchDisplayIcon" />
      </div>
    </div>
  );
};

export default MenuSearch;
