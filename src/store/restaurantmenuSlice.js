import { createSlice } from "@reduxjs/toolkit";

const restaurantmnuSlice = createSlice({
  name: "resMenuList",
  initialState: {
    restaurantmenulist: [],
    restaurantstorelist: [],
  },

  reducers: {
    addstoreinfolist: (state, action) => {
      state.restaurantstorelist = action.payload;
    },
    addRestaurantMenuList: (state, action) => {
      state.restaurantmenulist = action.payload;
    },
  },
});

export const { addRestaurantMenuList, addstoreinfolist } =
  restaurantmnuSlice.actions;

export default restaurantmnuSlice.reducer;
