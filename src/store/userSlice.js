import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    user: {},
  },

  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    AdduserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfo, AdduserInfo } = userSlice.actions;

export default userSlice.reducer;
