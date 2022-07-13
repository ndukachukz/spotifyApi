import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { MusicCard } from "../components";
import { setReleases } from "../features/newReleases/newReleasesSlice";
import { setUser } from "../features/user/userSlice";
import { setUserLibrary } from "../features/userLibrary/userLibrarySlice";
import useSpotifyWebApi from "../Hooks/useSpotifyWebApi";

function Mylibrary() {
  const spotifyApi: SpotifyWebApi = useSpotifyWebApi();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // REDUX STATES
  const {
    searchResults,
    userLibrary,
    authToken, 
  } = useAppSelector((state) => state);

  useEffect(() => {
    if(authToken.access_token.length < 10 || authToken.refresh_token.length < 10) navigate("/auth")

        spotifyApi.getMySavedAlbums().then(
          function (userLibData) {
            // Output items
            dispatch(setUserLibrary([...userLibData.body.items]));
          },
          function (err) {
           navigate("auth")
          }
        );
      
        return
  }, []);
  
    return (
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 5, md: 17 }}>
        <chakra.h1
          textAlign={"start"}
          fontSize={"2xl"}
          py={5}
          fontWeight={"bold"}
        >
          New Releases
        </chakra.h1>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {userLibrary.map((item, index) => (
            <MusicCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </Box>
    )
  ;
}

export default Mylibrary;
