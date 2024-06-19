import { configureStore, createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import restaurantlistSlice from "./restaurantlistSlice";
import restaurantmenuSlice from "./restaurantmenuSlice";

export const appstore = configureStore({
  reducer: {
    user: userSlice,
    resList: restaurantlistSlice,
    menulist: restaurantmenuSlice,
  },
});
