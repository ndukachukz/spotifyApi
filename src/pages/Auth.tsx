/* eslint-disable react-hooks/rules-of-hooks */
import { FC, ReactElement, useEffect, useState } from "react";
import "./styles/AuthScreen.css";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Hide,
  Center,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { getReturnedParams } from "../utils";
import { useLocation } from "react-router-dom";
import { handleLogin } from "../services";

const Auth: FC = (): ReactElement => {
  const { hash } = useLocation();
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    if (hash) {
      const { accessToken } = getReturnedParams(hash);
      setAccessToken(accessToken);
    }
  }, [hash]);
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row", lg: "row" }}>
      <Flex as={Hide} flex={[2, 1, 2]} below={"sm"}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1490476323407-63a2b2baa393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Stack>
            <Heading fontSize={"2xl"}>Sign In to your Spotify Account</Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Enjoy non-stop Music Stream
            </Text>
          </Stack>

          <Stack spacing={6}>
            <Button
              leftIcon={<FaSpotify />}
              bg={"dark"}
              variant={"solid"}
              color={"ghostWhite"}
              _hover={{
                color: "dark",
                backgroundColor: "ghostWhite",
              }}
              onClick={handleLogin}
            >
              Sign in with Spotify
            </Button>
          </Stack>
          <Center>
            <Text></Text>
          </Center>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Auth;
