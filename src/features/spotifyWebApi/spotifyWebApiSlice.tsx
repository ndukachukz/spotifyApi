import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-node";

interface InitialState {
  setSpotifyWebApi: SpotifyWebApi;
}

const initialState: InitialState = {
  setSpotifyWebApi: new SpotifyWebApi(),
};

const spotifyWebApiSlice = createSlice({
  name: "spotifyWebApi",
  initialState,
  reducers: {
    setSpotifyWebApi(state, payload: PayloadAction<SpotifyWebApi>) {
      state.setSpotifyWebApi = payload.payload;
      return state;
    },
  },
});

export const { setSpotifyWebApi } = spotifyWebApiSlice.actions;

export default spotifyWebApiSlice.reducer;
