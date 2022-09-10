import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Home = () => {
  return (
    <Flex direction="column">
      <Head>
        <title>Home</title>
      </Head>
      <NextSeo title="Home" />
    </Flex>
  );
};

export default Home;
