import { StatHelpText } from "@chakra-ui/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../types/User";

const initialState: User = {
  country: "",
  display_name: undefined,
  email: "",
  external_urls: {
    spotify: "",
  },
  followers: undefined,
  href: null,
  id: null,
  images: undefined, //WILL UPDATE WHEN FIND TYPE
  product: null,
  type: "user",
  uri: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      
      return {...state,...action.payload}
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
