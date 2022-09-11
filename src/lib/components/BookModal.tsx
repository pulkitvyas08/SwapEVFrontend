import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { useRecoilState } from "recoil";

import { addVehicleModalState } from "lib/state/AddVehicleModalAtom";
import { Vehicle } from "lib/types/vehicle";

const BookModal = ({
  station,
  isOpen,
  setModalOpen,
}: {
  station: any;
  isOpen: boolean;
  setModalOpen: Function;
}) => {
  const [vehicleValues, setVehicleValues] = useState<Vehicle>({
    manufacturer: "",
    carPurchaseDate: new Date(),
    lastBatteryPurchase: new Date(),
    licenseNo: "",
    model: "",
  });
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(0);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(vehicleValues);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setOtp(0);
        setModalOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nearest station from entered location</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="xl" mb="5px">
            Location: {station.location}
          </Text>
          <Input value={`City: ${station.city}`} />
          <Text fontSize="18px" mb="5px" mt="15px" textAlign="center">
            Number of Slots Avaiable {station.number_of_slots}
          </Text>
          {otp != 0 ? (
            <Center mt="20px">
              <Text letterSpacing={"0.3em"} color={"green.400"}>
                OTP:{" "}
                <Text fontWeight={"bolder"} letterSpacing={"0.3em"}>
                  {otp}
                </Text>
              </Text>
            </Center>
          ) : null}
        </ModalBody>
        <ModalFooter alignItems="center" justifyContent="center">
          <Button
            onClick={async () => {
              setLoading(true);
              await new Promise((r) => setTimeout(r, 2000));
              setOtp(Math.floor(1000 + Math.random() * 9000));
              setLoading(false);
            }}
            isLoading={loading}
            disabled={otp !== 0}
            borderRadius="lg"
            width="180px"
            type="submit"
          >
            {otp === 0 ? "Book Slot" : "Swap your battery!"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default BookModal;
