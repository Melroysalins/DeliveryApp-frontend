import React from "react";
import "./index.css";

const SearchResult = () => {
  return (
    <div className="SearchResultComponent">
      <div className="SearchProductImage">
        <img
          src={
            "https://res.cloudinary.com/dwoo3cuau/image/upload/v1718784413/j0njth1ou2f7rokc4v4u.jpg"
          }
        />
      </div>
      <p>Pizza</p>
    </div>
  );
};

export default SearchResult;
