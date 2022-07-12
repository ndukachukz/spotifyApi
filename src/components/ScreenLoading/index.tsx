import { Center, Flex } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { PuffLoader } from "react-spinners";

const ScreenLoading: FC = (): ReactElement => {
  return (
    <Flex justify={"center"} align={"center"} flex={1}>
      <PuffLoader size={75} color={"#000"} />
    </Flex>
  );
};

export default ScreenLoading;
