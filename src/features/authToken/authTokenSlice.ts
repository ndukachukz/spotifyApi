import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthToken from "../../types/authToken";

const initialState: AuthToken = {
  access_token: "",
  refresh_token: "",
};

const userSlice = createSlice({
  name: "authTokenSlice",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<AuthToken>) {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
  },
});

// export const access_token = useAppSelector((state) => state.authToken?.access_token)

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
