import { Avatar, Flex, Heading, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { CarList } from "../CarInfo/sampleCars";
import { SwapData } from "lib/types/swapData";
import { User } from "lib/types/user";
import { Vehicle } from "lib/types/vehicle";

import { sampleSwaps } from "./sampleSwaps";
import { SampleUser } from "./sampleUser";

const UserProfile: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);
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
        <Avatar src={user?.avatarUrl} size="xl" />
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
          <Image width="auto" height="60px" src="/images/porche.png" />
          <Flex direction="column" rowGap="5px">
            <Text>{vehicle?.model}</Text>
            <Text>{vehicle?.manufacturer}</Text>
          </Flex>
        </Flex>
        <Heading size="sm">Recent Battery Swaps:</Heading>
        <Flex flexDirection="column" alignItems="right">
          {swapData &&
            swapData.map((item) => (
              <Flex
                fontSize="12px"
                columnGap="15px"
                alignItems="center"
                key={String(item.date)}
              >
                <Text>{moment(item.date).format("Do MMM YYYY")}</Text>
                <Text>{item.location}</Text>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
