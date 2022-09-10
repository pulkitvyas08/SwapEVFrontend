import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiTwotoneHome, AiFillCar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import FooterItem from "lib/components/FooterItem";

const Footer = () => {
  const router = useRouter();
  const activePage = router.query;
  const [selectedPage, setSelectedPage] = useState("home");

  useEffect(() => {
    if (activePage === undefined) setSelectedPage("home");
    else setSelectedPage(String(activePage));
  }, [activePage]);

  return (
    <Flex
      as="footer"
      width="100%"
      justifyContent="space-evenly"
      position="absolute"
      bottom="0"
      maxW="700px"
      p="10px 0 10px 0"
      borderTop="1px solid rgba(255, 255, 255, 0.16)"
    >
      <FooterItem
        selected={selectedPage}
        name="home"
        size="21px"
        icon={<AiTwotoneHome />}
      />
      <FooterItem
        selected={selectedPage}
        name="find"
        size="21px"
        icon={<MdLocationOn />}
      />
      <FooterItem
        selected={selectedPage}
        name="info"
        size="21px"
        icon={<AiFillCar />}
      />
      <FooterItem
        selected={selectedPage}
        name="user"
        size="18px"
        icon={<FaUser />}
      />
    </Flex>
  );
};

export default Footer;
