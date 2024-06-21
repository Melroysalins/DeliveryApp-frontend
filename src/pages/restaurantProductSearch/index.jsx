import React, { useEffect, useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantProductStoreCard from "../../component/restaurantProductStoreCard";
import { getSearchedProductandStoreName } from "../../api/getSearchProductName";
import ShimmerCard from "../../component/shimmerCard";

const RestaurantProductSearch = () => {
  const { searchvalue } = useParams();
  const navigate = useNavigate();

  const [searchresult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchProductandStoreName = async () => {
    const result = await getSearchedProductandStoreName({ searchvalue });
    if (result?.status === 200) {
      setSearchResult(result?.productsWithStoreDetails);
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching new data

    // Fetch the data
    FetchProductandStoreName();

    // Set a timer to change the loading state after 1.2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [searchvalue]);

  return (
    <div className="MainSearchPageContainner">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ArrowBackIcon className="ArrowBackIcon" onClick={() => navigate(-1)} />
        <div className="MainSearchBoxContainner">
          <input
            type="text"
            placeholder="Search for foods"
            value={searchvalue}
            readOnly
          />
          <SearchIcon className="SearchIconName" />
        </div>
      </div>
      <div className="RestauarantInfowithCardContainner">
        <div className="theGridContainner">
          {loading ? (
            <ShimmerCard />
          ) : (
            searchresult?.map((list) => (
              <RestaurantProductStoreCard key={list?._id} data={list} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantProductSearch;
