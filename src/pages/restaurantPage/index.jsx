import React, { useEffect, useState } from "react";
import "./index.css";
import BasicBreadcrumbs from "../../component/breadCrumbs";
import TopRestaurantChains from "../../component/topRestaurantChains";
import RestaurantInfoModal from "../../component/restaurantInfoModal";
import DealsSection from "../../component/deals";
import MenuHeader from "../../component/menuHeader";
import MenuSearch from "../../component/menuSearch";
import RestaurantProductModal from "../../component/restaurantProductModal";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRestaurantMenu } from "../../api/getRestaurantList";
import {
  addRestaurantMenuList,
  addstoreinfolist,
} from "../../store/restaurantmenuSlice";
import StoreCloseInfo from "../../component/storecloseInfo";

const RestaurantPage = () => {
  const [storename, setStorename] = useState("");
  const [storeinfo, setStoreInfo] = useState();
  const [deal, setDeal] = useState("");
  const [menuList, setMenuList] = useState();
  const [open, setOpen] = useState(true);
  const { _id } = useParams();
  const dispatch = useDispatch();

  const FetchRestaurantMenu = async () => {
    const result = await getRestaurantMenu({ _id });

    if (result?.status === 200) {
      setStorename(result?.storeInfo.storename);
      setStoreInfo(result?.storeInfo);
      setDeal(result?.storeInfo?.offer);
      dispatch(addstoreinfolist(result?.storeInfo));
      setMenuList(result?.product);
      setOpen(result?.storeInfo?.availability?.open);
    }
  };

  useEffect(() => {
    FetchRestaurantMenu();
  }, [_id]);

  console.log("menulist-->", menuList);

  return (
    <>
      {open ? (
        <div className="RestaurantPage">
          <BasicBreadcrumbs name={storename} />

          <div className="RestaurantInfoSection">
            <RestaurantInfoModal info={storeinfo} />
          </div>
          {deal.length > 1 && <DealsSection deal={deal} />}
          <MenuHeader />
          <MenuSearch />
          <div className="ModalDivider"></div>

          <div className="RestaurantProductContainner">
            {menuList &&
              menuList?.categoryname?.map((list) => (
                <RestaurantProductModal key={list?._id} data={list} />
              ))}
          </div>
        </div>
      ) : (
        <StoreCloseInfo />
      )}
    </>
  );
};

export default RestaurantPage;
