import { useEffect, useState } from "react";
import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import useSpotifyWebApi from "../../Hooks/useSpotifyWebApi";
import MusicCard from "../MusicCard";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setReleases } from "../../features/newReleases/newReleasesSlice";
import { setUserLibrary } from "../../features/userLibrary/userLibrarySlice";
import { isEqual } from "lodash";

interface Props {
  limit: number;
}

const NewReleases = ({ limit }: Props) => {
  const spotifyApi = useSpotifyWebApi();
  const dispatch = useAppDispatch();

  const { newReleases, userLibrary } = useAppSelector((state) => state);

  useEffect(() => {
    spotifyApi
      .getNewReleases({ limit })
      .then((data) => {
        console.log(data);
        dispatch(setReleases(data.body.albums.items));
        spotifyApi.getMySavedAlbums().then(
          function (userLibData) {
            // Output items
            dispatch(setUserLibrary([...userLibData.body.items]));
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
      })
      .catch((error) => console.log(error));

    return;
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
        {newReleases.map((item, index) => (
          <MusicCard key={index} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default NewReleases;
