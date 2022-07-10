import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import MusicCard from "../MusicCard";

const NewReleases = () => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        New Releases
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </SimpleGrid>
    </Box>
  );
};

export default NewReleases;
