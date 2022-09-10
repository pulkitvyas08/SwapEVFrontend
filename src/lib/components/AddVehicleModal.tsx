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
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { useRecoilState } from "recoil";

import { addVehicleModalState } from "lib/state/AddVehicleModalAtom";
import { Vehicle } from "lib/types/vehicle";

const AddVehicleModal = () => {
  const [addVehicleModalOpen, setAddVehicleModalOpen] =
    useRecoilState(addVehicleModalState);
  const [vehicleValues, setVehicleValues] = useState<Vehicle>({
    manufacturer: "",
    carPurchaseDate: new Date(),
    lastBatteryPurchase: new Date(),
    licenseNo: "",
    model: "",
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(vehicleValues);
  };

  return (
    <Modal
      isOpen={addVehicleModalOpen}
      onClose={() => setAddVehicleModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add another vehicle</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={(event) => handleSubmit(event)}>
          <ModalBody>
            <Text fontSize="13px" mb="5px">
              Manufacturer:
            </Text>
            <Input
              value={vehicleValues.manufacturer}
              onChange={(event) =>
                setVehicleValues((prev) => ({
                  ...prev,
                  manufacturer: event.target.value,
                }))
              }
              type="text"
            />

            <Text fontSize="13px" mb="5px" mt="15px">
              Model
            </Text>
            <Input
              value={vehicleValues.model}
              onChange={(event) =>
                setVehicleValues((prev) => ({
                  ...prev,
                  model: event.target.value,
                }))
              }
              type="text"
            />

            <Text fontSize="13px" mb="5px" mt="15px">
              License No.
            </Text>
            <Input
              value={vehicleValues.licenseNo}
              onChange={(event) =>
                setVehicleValues((prev) => ({
                  ...prev,
                  licenseNo: event.target.value,
                }))
              }
              type="text"
            />

            <Text fontSize="13px" mb="5px" mt="15px">
              Date Purchased:
            </Text>
            <Input
              onChange={(event) =>
                setVehicleValues((prev) => ({
                  ...prev,
                  carPurchaseDate: new Date(Date.parse(event.target.value)),
                }))
              }
              type="datetime-local"
            />

            <Text fontSize="13px" mb="5px" mt="15px">
              Date of purchase of the battery:
            </Text>
            <Input
              onChange={(event) =>
                setVehicleValues((prev) => ({
                  ...prev,
                  lastBatteryPurchase: new Date(Date.parse(event.target.value)),
                }))
              }
              type="datetime-local"
            />
          </ModalBody>
          <ModalFooter alignItems="center" justifyContent="center">
            <Button borderRadius="lg" width="150px" type="submit">
              Add Vehicle
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddVehicleModal;
