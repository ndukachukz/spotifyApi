import { useEffect, useState } from "react";
import { Buffer } from "buffer";

const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;
const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const base64Encoded = Buffer.from(
  `${String(clientID) + ":" + String(clientSecret)}`
).toString("base64");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("authorization", `Basic ${base64Encoded}`);

const useAuthFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isError, setIsError] = useState<boolean>();

  const [error, setError] = useState<{
    error: string;
    error_description: string;
  } | null>();

  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [data, setData] = useState<{
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
  } | null>();

  function getAccessToken(code: string) {
    setIsLoading(true);

    const urlencoded = new URLSearchParams();
    urlencoded.append("code", `${code}`);
    urlencoded.append("redirect_uri", `${redirect_uri}`);
    urlencoded.append("grant_type", "authorization_code");

    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.error) {
          setIsError(true);
          setError(result);
          setData(null);
          setIsSuccess(false);
        } else {
          setIsError(false);
          setError(null);
          setIsSuccess(true);
          setData(result);
          localStorage.setItem("tokens", JSON.stringify(result));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
        setIsSuccess(false);
        setData(null);
        setIsLoading(false);
      });

    setIsLoading(false);
  }

  function getRefreshToken(refreshToken: string) {
    setIsLoading(true);

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "refresh_token");

    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.error) {
          setIsError(true);
          setError(result);
          setData(null);
        } else {
          setIsError(false);
          setError(null);
          setIsSuccess(true);
          setData(result);
          localStorage.setItem("tokens", JSON.stringify(result));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
        setData(null);
        setIsSuccess(false);
        setIsLoading(false);
      });

    setIsLoading(false);
  }

  return {
    getAccessToken,
    getRefreshToken,
    isLoading,
    isError,
    error,
    isSuccess,
    data,
  };
};

export default useAuthFetch;
