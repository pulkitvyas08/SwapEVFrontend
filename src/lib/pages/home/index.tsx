import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

// eslint-disable-next-line import/no-cycle
import Footer from "lib/layout/Footer";

const Home = () => {
  return (
    <Flex
      border="1px solid yellow"
      direction="column"
      minHeight="100vh"
      w="full"
    >
      <Head>
        <title>Home</title>
      </Head>
      <NextSeo title="Home" />
      <Footer />
    </Flex>
  );
};

export default Home;
