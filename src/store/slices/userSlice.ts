import { createSlice } from "@reduxjs/toolkit";
import { IUserStrore } from "./types";

const initialState: IUserStrore = {
  isAuth: false,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
    },
    unsetUser: (state) => {
      state.isAuth = false;
      state.email = null;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
