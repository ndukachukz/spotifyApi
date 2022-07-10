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
  useDisclosure,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function withAction() {
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
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
          <Box ml={"4"}>username</Box>
        </Flex>

        <Flex alignItems={"center"}>
          <Input placeholder="Search" size="sm" />

          <IconButton
            icon={<Search2Icon />}
            display={{ md: "none" }}
            aria-label={"Search Music"}
          />
        </Flex>
        <Flex alignItems={"center"}>
          <Link>My Library</Link>
          <Link ml={3}>Log Out</Link>
        </Flex>
      </Flex>
    </Box>
  );
}
