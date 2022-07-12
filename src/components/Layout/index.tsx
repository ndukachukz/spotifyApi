import Navbar from "../Navbar";
import { MotionConfig, motion } from "framer-motion";
import { Stack } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import Footer from "../Footer";

const Layout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <div
    /*  initial="hidden"
      animate="visible"
      variants={
        {
                  hidden: { opacity: 0 },
        visible: { opacity: 1 }, 
        }
      } */
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
