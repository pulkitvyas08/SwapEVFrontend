import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from "recoil";

import AddVehicleModal from "lib/components/AddVehicleModal";
import { addVehicleModalState } from "lib/state/AddVehicleModalAtom";
import { Vehicle } from "lib/types/vehicle";

import { CarList } from "./sampleCars";

const CarInfo: React.FC = () => {
  const [cars, setCars] = useState<Vehicle[]>([]);
  const [addVehicleModalOpen, setAddVehicleModalOpen] =
    useRecoilState(addVehicleModalState);

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
            <Flex
              mt="20px"
              key={car.licenseNo}
              direction="column"
              rowGap="10px"
            >
              <Flex
                alignItems="center"
                columnGap="5px"
                textAlign="center"
                justifyContent="center"
                border="1px solid white"
                borderRadius="lg"
                p="10px"
                m="5px 0 5px 0"
              >
                <Text>Live battery status:</Text>
                <Text
                  color={
                    car.chargePercentage
                      ? car?.chargePercentage > 75
                        ? "green.400"
                        : car?.chargePercentage < 30
                        ? "red"
                        : "yellow"
                      : "red"
                  }
                >
                  {car.chargePercentage ? car.chargePercentage : "Error"}%
                </Text>
              </Flex>
              <Flex columnGap="10px">
                <Text fontWeight="semibold">Company: </Text>
                <Text fontWeight="light">{car.manufacturer}</Text>
              </Flex>
              <Flex columnGap="10px">
                <Text fontWeight="semibold">Model: </Text>
                <Text fontWeight="light">{car.model}</Text>
              </Flex>
              <Flex columnGap="10px" alignItems="center">
                <Text fontWeight="semibold" fontSize="13px">
                  License No.:{" "}
                </Text>
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
        <Button
          mt="30px"
          display="flex"
          alignItems="center"
          cursor="pointer"
          columnGap="5px"
          onClick={() => setAddVehicleModalOpen(true)}
        >
          <AiOutlinePlus />
          Add New Car
        </Button>
      </Flex>
      {addVehicleModalOpen && <AddVehicleModal />}
    </Flex>
  );
};
export default CarInfo;
