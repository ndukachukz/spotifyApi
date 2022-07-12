import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../types/User";

const initialState: any[] = [];

const newReleasesSlice = createSlice({
  name: "newReleasesSlice",
  initialState,
  reducers: {
    setReleases(state, action: PayloadAction<typeof initialState>) {
      state = action.payload;
      return state;
    },
  },
});

export const { setReleases } = newReleasesSlice.actions;

export default newReleasesSlice.reducer;
