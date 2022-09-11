import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type HomeButtonProps = {
  imageUrl: string;
  buttonText: string;
  disabled?: boolean;
  functionToExecute: any;
};

const HomeButton: React.FC<HomeButtonProps> = ({
  imageUrl,
  buttonText,
  disabled,
  functionToExecute,
}) => {
  return (
    <Flex
      direction="column"
      border="2px solid white"
      borderRadius="xl"
      maxW="150px"
      p="15px"
      cursor={disabled ? "default" : "pointer"}
      rowGap="15px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      opacity={disabled ? "0.5" : "1"}
      onClick={() => {
        if (disabled) return;
        functionToExecute();
      }}
    >
      <Image width="80px" height="65px" src={imageUrl} />
      <Text fontWeight="bold">{buttonText}</Text>
    </Flex>
  );
};

export default HomeButton;
