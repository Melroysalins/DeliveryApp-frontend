import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="SearchResultComponent"
      onClick={() => navigate(`/search/food/${data?.productname}`)}
    >
      <div className="SearchProductImage">
        <img src={data?.productimage?.url} />
      </div>
      <p>{data?.productname}</p>
    </div>
  );
};

export default SearchResult;
