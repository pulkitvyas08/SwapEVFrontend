import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Car } from "lib/types/car";

import { CarList } from "./sampleCars";

const CarInfo: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (CarList) setCars(CarList);
  }, []);

  return (
    <Flex>
      <Head>
        <title>About your car</title>
      </Head>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading width="100%">Your Vehicle Info</Heading>
        <Image mt="50px" src="/images/porche.png" />
        {cars &&
          cars.map((car) => (
            <Flex mt="20px" direction="column" rowGap="10px">
              <Flex columnGap="10px">
                <Text fontWeight="semibold">Company: </Text>
                <Text fontWeight="light">{car.company}</Text>
              </Flex>
              <Flex columnGap="10px">
                <Text fontWeight="semibold">Model: </Text>
                <Text fontWeight="light">{car.model}</Text>
              </Flex>
              <Flex columnGap="10px">
                <Text fontWeight="semibold">License No.: </Text>
                <Text fontWeight="light">{car.licenseNo}</Text>
              </Flex>
              <Flex columnGap="10px">
                <Text fontWeight="semibold">Date Purchased: </Text>
                <Text fontWeight="light">
                  {moment(car.carPurchaseDate).format("Do MMM YYYY")}
                </Text>
              </Flex>
              <Flex columnGap="10px" alignItems="center">
                <Text fontWeight="semibold" fontSize="13px">
                  Battery Purchase Date:{" "}
                </Text>
                <Text fontWeight="light">
                  {moment(car.lastBatteryPurchase).format("Do MMM YYYY")}
                </Text>
              </Flex>
            </Flex>
          ))}
        <Button mt="30px" display="flex" alignItems="center">
          <AiOutlinePlus />
          Add New Car
        </Button>
      </Flex>
    </Flex>
  );
};
export default CarInfo;
