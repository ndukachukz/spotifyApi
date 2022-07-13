import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../App/hooks";

const MusicCard = ({ ...props }: any) => {
  const {
    spotifyWebApi: { setSpotifyWebApi: spotifyApi },
    userLibrary,
    newReleases,
  } = useAppSelector((state) => state);

  const [text, setText] = useState<string>();


  const onAddClick = () =>
    spotifyApi
      .addToMySavedAlbums([props?.id])
      .then(function (data) {
        // console.log("Added album! =>", data);
      })
      .catch((err) =>{ /* console.log(err) */});

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"230px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"110px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${props.images[1].url})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={130}
            width={182}
            objectFit={"cover"}
            src={props.images[1].url}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {props.name}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text color={"gray.600"} as={"button"} onClick={() => onAddClick()}>
              {text}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default MusicCard;
