import { Flex, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type FooterItemProps = {
  icon: any;
  size: string;
  name: string;
  selected: string;
};

const FooterItem: React.FC<FooterItemProps> = ({
  icon,
  size,
  name,
  selected,
}) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    setSelectedItem(name === selected);
  }, [name, selected]);

  return (
    <Flex
      borderRadius="full"
      bgColor={selectedItem ? "#D1D2D5" : "transparent"}
      onClick={() => router.push(name)}
    >
      <IconButton
        m="5px"
        color={selectedItem ? "#1A202C" : "white"}
        fontSize={size}
        bgColor={selectedItem ? "white" : "transparent"}
        aria-label="Footer Icon"
        icon={icon}
      />
    </Flex>
  );
};

export default FooterItem;
