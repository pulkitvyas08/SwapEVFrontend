import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const StationMap: React.FC = () => {
  return (
    <Flex>
      <Head>
        <title>Charging Stations</title>
      </Head>
      <Text>StationMap</Text>
    </Flex>
  );
};

export default StationMap;
