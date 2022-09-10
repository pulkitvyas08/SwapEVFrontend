import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

// eslint-disable-next-line import/no-cycle
import Footer from "lib/layout/Footer";
import Landing from "../landing";

const Home = () => {
  return (
    <Flex
    h="full"
    w="full">
      <Head>
        <title>Home</title>
      </Head>
      <Landing/>
    </Flex>
  );
};

export default Home;
