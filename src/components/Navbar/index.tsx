/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  Avatar,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import useSpotifyWebApi from "../../Hooks/useSpotifyWebApi";
import { useDebounce } from "../../Hooks";
import { setSearchResults } from "../../features/seachResults/searchResultsSlice";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { setSpotifyWebApi } from "../../features/spotifyWebApi/spotifyWebApiSlice";
import SpotifyWebApi from "spotify-web-api-node";
import { setToken } from "../../features/authToken/authTokenSlice";
import { setUser } from "../../features/user/userSlice";

export default function withAction() {
  const spotifyApi = useSpotifyWebApi();
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate()

  const { display_name, images } = useAppSelector((state) => state.user);
  const searchResults = useAppSelector((state) => state.searchResults);
  const dispatch = useAppDispatch();

  const debouncedSearch = useRef(
    debounce(async (term) => {
      await spotifyApi
        .search(term, ["album", "playlist"], {
          limit: 5,
          offset: 1,
        })
        .then((searchData: any) => {
          const newData = [
            ...searchData.body.albums?.items,
            ...searchData.body.playlists?.items,
          ];
          dispatch(setSearchResults(newData));
        })
        .catch((err) => {/* console.log(err) */});
    }, 300)
  ).current;

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  }
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    if (search?.length <= 0) {
      dispatch(setSearchResults([]));
    }
  }, [search]);

  const onLogout = () => {
    dispatch(setSpotifyWebApi(new SpotifyWebApi()));
    dispatch(setToken({access_token: "", refresh_token: ""}))
    dispatch(setUser({
      country: "",
      display_name: undefined,
      email: "",
      external_urls: {
        spotify: "",
      },
      followers: undefined,
      href: null,
      id: null,
      images: undefined, //WILL UPDATE WHEN FIND TYPE
      product: null,
      type: "user",
      uri: "",
    
    }))

    localStorage.removeItem("tokens")
    navigate("auth")
  }

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"sm"} src={images && images[1]?.url} />
            </MenuButton>
            <MenuList>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
          <Box ml={"4"}>{display_name}</Box>
        </Flex>

        <Flex alignItems={"center"}>
          <Input
            placeholder="Search"
            size="sm"
            value={search}
            onChange={handleChange}
          />

          <IconButton
            icon={<Search2Icon />}
            display={{ md: "none" }}
            aria-label={"Search Music"}
          />
        </Flex>
        <Flex alignItems={"center"}>
          <Link href={"mylibrary"}>My Library</Link>
          <Link as={"button"} ml={3} onClick={onLogout} >Log Out</Link>
        </Flex>
      </Flex>
    </Box>
  );
}
