import { Flex } from "@chakra-ui/react";
// import { GrMapLocation } from "react-icons/gr";

import FooterItem from "lib/components/FooterItem";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="space-evenly"
      border="1px solid red"
      position="absolute"
      bottom="0"
    >
      <FooterItem />
    </Flex>
  );
};

export default Footer;
