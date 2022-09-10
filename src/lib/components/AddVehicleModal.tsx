import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { addVehicleModalState } from "lib/state/AddVehicleModalAtom";

const AddVehicleModal = () => {
  const [addVehicleModalOpen, setAddVehicleModalOpen] =
    useRecoilState(addVehicleModalState);
  return (
    <Modal
      isOpen={addVehicleModalOpen}
      onClose={() => setAddVehicleModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add another vehicle</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Test</ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => setAddVehicleModalOpen(false)}
          >
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddVehicleModal;
