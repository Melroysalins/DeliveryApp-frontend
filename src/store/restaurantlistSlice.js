import { createSlice } from "@reduxjs/toolkit";
import def from "ajv/dist/vocabularies/discriminator";

const restaurantListSlice = createSlice({
  name: "resList",
  initialState: {
    restaurantList: [],
  },

  reducers: {
    addRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
    },
  },
});

export const { addRestaurantList } = restaurantListSlice.actions;

export default restaurantListSlice.reducer;
