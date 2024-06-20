import React, { useEffect, useState } from "react";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import { searchInResultMenu } from "../../api/getRestaurantList";
import ProductInfo from "../../component/productInfo";

const SearchMenuListPage = () => {
  const [searchvalue, setSearchValue] = useState("");
  const [searchresult, setSearchResult] = useState();

  const { storename, _id } = useParams();

  const navigate = useNavigate();

  const FetchSearchResult = async () => {
    const result = await searchInResultMenu({ _id, searchvalue });

    if (result?.status === 200) {
      setSearchResult(result?.product[0]?.matchedProducts);
    }
  };

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      FetchSearchResult();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchvalue]);

  return (
    <div className="RestaurantMenuSearchContainner">
      <div className="SearchBoxDivContainner">
        <ArrowBackIcon
          sx={{ color: "#979696;" }}
          onClick={() => navigate(-1)}
        />
        <input
          type="text"
          placeholder={"Search in " + " " + storename}
          value={searchvalue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!searchvalue && <SearchIcon sx={{ color: "#979696;" }} />}
        {searchvalue && (
          <CloseIcon
            sx={{ color: "#979696;" }}
            onClick={() => {
              setSearchValue("");
            }}
          />
        )}
      </div>
      <div className="SearchResultDisplayContainner">
        {searchvalue &&
          searchresult?.map((ele, index) => (
            <ProductInfo
              key={ele?._id}
              data={ele}
              isLast={index === searchresult?.product?.length - 1}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchMenuListPage;
