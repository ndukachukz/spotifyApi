import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = () => {
  const response_type = "code",
    redirect_uri = "http://localhost:3000/auth/",
    client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    scope = "user-read-private user-read-email",
    authUri =
      "client_id=" +
      client_id +
      "&response_type=" +
      response_type +
      "&redirect_uri=" +
      redirect_uri +
      "&scope=" +
      scope;

  const spotifyLoginLink = encodeURI(`${authUri}`);

  return createApi({
    reducerPath: "spotifyApi",
    baseQuery: fetchBaseQuery({
      baseUrl: `https://accounts.spotify.com/`,
    }),
    endpoints: (builder) => ({
      spotifyLogin: builder.mutation<any, any>({
        query: () => ({
          url: `authorize?${spotifyLoginLink}`,
          method: "GET",
        }),
      }),
    }),
  });
};

export const { useSpotifyLoginMutation } = spotifyApi();
