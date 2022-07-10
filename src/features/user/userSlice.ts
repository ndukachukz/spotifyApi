import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../types/user";

type UserState = User | null;

const initialState: UserState = null;

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {},
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
