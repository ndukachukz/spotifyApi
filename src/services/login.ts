const response_type = "code";

const redirect_uri: string = process.env.NODE_ENV === "development"? "http://localhost:3000/auth":"https://partnerherospotify.web.app/auth"

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;



const scope =
  "user-read-private user-read-email user-read-email user-read-email user-library-read ugc-image-upload user-library-modify";

const authUri =
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
