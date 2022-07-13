import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Buffer } from "buffer";

const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;
const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const base64Encoded = Buffer.from(
  `${String(clientID) + ":" + String(clientSecret)}`
).toString("base64");


export const spotifyAuth = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://accounts.spotify.com/`,
  }),
  endpoints: (builder) => ({
    spotifyLogin: builder.mutation<any, any>({
      query: (code: string) => ({
        url: `api/token`,
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${base64Encoded}`,
        },
        body: {
          code,
          redirect_uri,
          grant_type: "authorization_code",
        },
      }),
    }),
  }),
});

export const { useSpotifyLoginMutation } = spotifyAuth;
