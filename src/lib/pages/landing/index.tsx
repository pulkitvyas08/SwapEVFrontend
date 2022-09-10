import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import type React from "react";

const Landing: React.FC = () => {
  return (
    <Flex>
      <Head>
        <title>SwapEV</title>
      </Head>
      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        flexDirection="column"
      />
      <Flex flexDirection="column" />
    </Flex>
  );
};

export default Landing;
