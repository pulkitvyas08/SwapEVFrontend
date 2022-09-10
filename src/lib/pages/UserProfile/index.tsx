import { Avatar, Flex, Heading, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { CarList } from "../CarInfo/sampleCars";
import { Car } from "lib/types/car";
import { SwapData } from "lib/types/swapData";
import { User } from "lib/types/user";

import { sampleSwaps } from "./sampleSwaps";
import { SampleUser } from "./sampleUser";

const UserProfile: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [vehicle, setVehicle] = useState<Car | undefined>(undefined);
  const [swapData, setSwapData] = useState<SwapData[] | undefined>(undefined);

  useEffect(() => {
    setUser(SampleUser);
    setVehicle(CarList[0]);
    setSwapData(sampleSwaps);
  }, []);

  return (
    <Flex justifyContent="center">
      <Head>
        <title>Your Profile</title>
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        rowGap="25px"
        justifyContent="center"
      >
        <Avatar size="xl" />
        <Flex columnGap="5px">
          <Heading>{user?.firstName}</Heading>
          <Heading>{user?.lastName}</Heading>
        </Flex>
        <Heading size="md">Vehicles:</Heading>
        <Flex
          onClick={() => router.push("/info")}
          cursor="pointer"
          border="1px solid gray"
          p="20px"
          borderRadius="lg"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image width="auto" height="60px" src="/images/jeep.png" />
          <Flex direction="column" rowGap="5px">
            <Text>{vehicle?.model}</Text>
            <Text>{vehicle?.company}</Text>
          </Flex>
        </Flex>
        <Heading size="sm">Recent Battery Swaps:</Heading>
        <Flex flexDirection="column" alignItems="right">
          {swapData &&
            swapData.map((item) => (
              <Flex columnGap="10px" alignItems="center">
                <Text fontSize="12px">
                  {moment(item.date).format("Do MMM YYYY")}
                </Text>
                <Text>{item.location}</Text>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
