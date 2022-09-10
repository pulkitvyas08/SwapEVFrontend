import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" minH="100vh" transition="0.5s ease-out">
      <Box margin="0">
        <Box as="main">{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
