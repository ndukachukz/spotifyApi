/* eslint-disable react-hooks/rules-of-hooks */
import { FC, ReactElement, useEffect } from "react";
import "./styles/AuthScreen.css";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Hide,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleLogin } from "../services";
import { useAuthFetch } from "../Hooks";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { setToken } from "../features/authToken/authTokenSlice";

const Auth: FC = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const {
    data,
    error,
    getAccessToken,
    getRefreshToken,
    isError,
    isLoading,
    isSuccess,
  } = useAuthFetch();
  const code = searchParams.get("code");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const localTokens: any = localStorage.getItem("tokens");
  const { access_token, refresh_token } = useAppSelector(
    (state) => state.authToken
  );

  useEffect(() => {
    if (code) {
      getAccessToken(code);
    }
  }, [code]);

  useEffect(() => {
    if (!refresh_token || !data?.expires_in) return;
    const interval = setInterval(() => {
      getRefreshToken(refresh_token || JSON.parse(localTokens));
    }, (data?.expires_in - 60) * 1000);
    return clearInterval(interval);
  }, [refresh_token, data?.expires_in]);

  useEffect(() => {
    if (!data?.refresh_token || !data?.access_token) return;
    // SET DATA TO GLOBAL STORE
    if (data && data?.access_token) {
      dispatch(
        setToken({
          access_token: String(data?.access_token),
          refresh_token: String(data?.refresh_token),
        })
      );
      navigate("/");
    }
  }, [error, data]);

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
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Auth;
