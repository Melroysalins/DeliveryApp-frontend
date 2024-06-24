import { createSlice } from "@reduxjs/toolkit";
import def from "ajv/dist/vocabularies/discriminator";

const restaurantListSlice = createSlice({
  name: "resList",
  initialState: {
    restaurantList: [],
    toprated: [],
  },

  reducers: {
    addRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
    },
    addtopRatedRestaurantList: (state, action) => {
      state.toprated = action.payload;
    },
  },
});

export const { addRestaurantList, addtopRatedRestaurantList } =
  restaurantListSlice.actions;

export default restaurantListSlice.reducer;
