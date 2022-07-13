import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "../constants/envVars";
import { setSpotifyWebApi } from "../features/spotifyWebApi/spotifyWebApiSlice";

const useSpotifyWebApi = ():SpotifyWebApi  => {

  const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
  })

  const localTokens: any = localStorage.getItem("tokens");
  const _localTokens = JSON.parse(localTokens)


  const localAccessToken = _localTokens?.access_token;
  const localRefreshToken = _localTokens?.refresh_token;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      !!_localTokens === false
    ){
     navigate("/auth");
    }
    spotifyApi.setAccessToken(localAccessToken);
    spotifyApi.setRefreshToken(localRefreshToken);
    dispatch(setSpotifyWebApi(spotifyApi));
  }, []);

  return spotifyApi;
};

export default useSpotifyWebApi;
