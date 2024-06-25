import { configureStore, createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import restaurantlistSlice from "./restaurantlistSlice";
import restaurantmenuSlice from "./restaurantmenuSlice";
import cartSlice from "./cartSlice";

export const appstore = configureStore({
  reducer: {
    user: userSlice,
    resList: restaurantlistSlice,
    menulist: restaurantmenuSlice,
    cart: cartSlice,
  },
});
