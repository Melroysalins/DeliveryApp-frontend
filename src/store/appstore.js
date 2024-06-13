import { configureStore, createStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const appstore = configureStore({
  reducer: {
    user: userSlice,
  },
});
