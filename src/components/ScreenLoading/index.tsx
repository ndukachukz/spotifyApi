import { Center } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { PuffLoader } from "react-spinners";

const ScreenLoading: FC = (): ReactElement => {
  return (
    <Center>
      <PuffLoader size={75} color={"#000"} />
    </Center>
  );
};

export default ScreenLoading;
