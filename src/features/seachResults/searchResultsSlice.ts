import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

const setSearchResultsSlice = createSlice({
  name: "authTokenSlice",
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<any>) {
      state = action.payload;
      return state;
    },
  },
});

export const { setSearchResults } = setSearchResultsSlice.actions;

export default setSearchResultsSlice.reducer;
