const response_type = "token",
  redirect_uri = "http://localhost:3000/auth",
  client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  scope =
    "user-read-private user-read-email user-read-email user-read-email user-library-read ugc-image-upload",
  authUri =
    "client_id=" +
    client_id +
    "&response_type=" +
    response_type +
    "&redirect_uri=" +
    redirect_uri +
    "&scope=" +
    scope;

const spotifyLogin = encodeURI(
  `https://accounts.spotify.com/authorize?${authUri}`
);
const handleLogin = () => window.location.replace(spotifyLogin);

export default handleLogin;
