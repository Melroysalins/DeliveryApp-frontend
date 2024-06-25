import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitems: [],
  },

  reducers: {
    AddItemToCart: (state, action) => {
      state.cartitems = action.payload;
    },
  },
});

export const { AddItemToCart } = CartSlice.actions;

export default CartSlice.reducer;
