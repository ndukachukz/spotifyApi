import Navbar from "../Navbar";
import { Stack } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import Footer from "../Footer";
import { MotionConfig, motion } from "framer-motion";

const Layout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
