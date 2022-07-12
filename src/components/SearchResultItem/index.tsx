import { ReactElement } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const SearchResultItem = (props: any): ReactElement => {
  return (
    <Flex direction={"row"} align={"center"} my={15} /* justify={"center"} */>
      {/* avater */}
      <Flex>
        <Avatar src={props.images[0].url} mx={5} />
      </Flex>

      <Flex>
        <Text>{props.name}</Text>
      </Flex>
      {/* track */}
    </Flex>
  );
};

export default SearchResultItem;
