import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { spotifyApi } from "../services";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [spotifyApi().reducerPath]: spotifyApi().reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi().middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
