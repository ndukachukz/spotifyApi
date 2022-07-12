import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "../features/authToken/authTokenSlice";
import newReleasesReducer from "../features/newReleases/newReleasesSlice";
import searchResultsReducer from "../features/seachResults/searchResultsSlice";
import userReducer from "../features/user/userSlice";
import spotifyWebApiReducer from "../features/spotifyWebApi/spotifyWebApiSlice";
import userLibraryReducer from "../features/userLibrary/userLibrarySlice";

export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
    searchResults: searchResultsReducer,
    newReleases: newReleasesReducer,
    spotifyWebApi: spotifyWebApiReducer,
    userLibrary: userLibraryReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
