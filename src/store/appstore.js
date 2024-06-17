import { configureStore, createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import restaurantlistSlice from "./restaurantlistSlice";

export const appstore = configureStore({
  reducer: {
    user: userSlice,
    resList: restaurantlistSlice,
  },
});
