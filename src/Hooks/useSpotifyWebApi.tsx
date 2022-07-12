import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { json } from "stream/consumers";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "../constants/envVars";
import { setSpotifyWebApi } from "../features/spotifyWebApi/spotifyWebApiSlice";

const useSpotifyWebApi = () => {
  const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
  });

  const localTokens: any = localStorage.getItem("tokens");
  const localAccessToken = localTokens.access_token;
  const localRefreshToken = localTokens.refresh_token;

  const { access_token, refresh_token } = useAppSelector(
    (state) => state.authToken
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      !access_token ||
      !refresh_token ||
      refresh_token === undefined ||
      access_token === undefined ||
      !localTokens
    )
      return navigate("/auth");
    spotifyApi.setAccessToken(access_token || localAccessToken);
    spotifyApi.setRefreshToken(refresh_token || localRefreshToken);
    dispatch(setSpotifyWebApi(spotifyApi));
  }, []);

  return spotifyApi;
};

export default useSpotifyWebApi;
