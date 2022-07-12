import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = any[];

const initialState: InitialState = [];

const userLibrary = createSlice({
  name: "spotifyWebApi",
  initialState,
  reducers: {
    setUserLibrary(state, payload: PayloadAction<any[]>) {
      state = payload.payload;
      return state;
    },
  },
});

export const { setUserLibrary } = userLibrary.actions;

export default userLibrary.reducer;
