import { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { Layout, NewReleases, SearchResultItem } from "../components";
import { setUser } from "../features/user/userSlice";
import { setUserLibrary } from "../features/userLibrary/userLibrarySlice";
import useSpotifyWebApi from "../Hooks/useSpotifyWebApi";

const Home: FC = (): ReactElement => {
  // const spotifyApi: SpotifyWebApi = useSpotifyWebApi();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // REDUX STATES
  const {
    searchResults,
    newReleases,
    spotifyWebApi: { setSpotifyWebApi: spotifyApi },
  } = useAppSelector((state) => state);

  useEffect(() => {
    spotifyApi.getMe().then(
      function (data) {
        dispatch(
          setUser({
            country: data.body.country,
            display_name: data.body.display_name,
            email: data.body.email,
            external_urls: data.body.external_urls,
            followers: data.body.followers,
            href: data.body.href,
            id: data.body.id,
            images: data.body.images,
            product: data.body.product,
            type: data.body.type,
            uri: data.body.uri,
          })
        );
        console.log(data);
        spotifyApi.getMySavedAlbums().then(
          function (userLibData) {
            // Output items
            dispatch(setUserLibrary([...userLibData.body.items]));
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    return;
  }, []);

  return (
    <Layout>
      <NewReleases limit={5} />

      {searchResults.length > 0 &&
        searchResults.map((item: any, i: number) => (
          <SearchResultItem key={i} {...item} />
        ))}
    </Layout>
  );
};

export default Home;
