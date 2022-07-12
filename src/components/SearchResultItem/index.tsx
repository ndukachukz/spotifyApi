import { ReactElement } from "react";
import { Avatar, Flex } from "@chakra-ui/react";

const SearchResultItem = (props: any): ReactElement => {
  return (
    <Flex direction={"row"}>
      {/* avater */}
      <Avatar src={props.images[0].url} />
    </Flex>
  );
};

export default SearchResultItem;
