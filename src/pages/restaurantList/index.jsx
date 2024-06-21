import React, { useEffect, useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SearchResult from "../../component/searchresult";
import { getSearchedProductName } from "../../api/getSearchProductName";

const RestaurantList = () => {
  const [searchvalue, setSearchValue] = useState("");
  const [searchresult, setSearchResult] = useState();

  const FetchSearchResult = async () => {
    const result = await getSearchedProductName({ searchvalue });
    console.log("result--->", result);
    if (result?.status === 200) {
      setSearchResult(result?.productlist);
    }
  };

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      FetchSearchResult();
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [searchvalue]);

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
        {searchresult &&
          searchvalue &&
          searchresult?.map((ele, index) => (
            <SearchResult key={index} data={ele} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantList;
