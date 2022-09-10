import { Flex } from "@chakra-ui/react";
import type React from "react";

const Landing: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        flexDirection="column"
      />
      <Flex flexDirection="column" />
    </Flex>
  );
};

export default Landing;
