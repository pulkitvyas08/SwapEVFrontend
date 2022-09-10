import { Flex, Box, Image, useMediaQuery } from "@chakra-ui/react";
import type React from "react";

const Landing: React.FC = () => {
  return (
    <Flex 
      h="100%"
      w="100%"
      direction="column"
      >
      
        <Flex
          w='100%'
          pt='1.5%'
          justifyContent='space-between'
        >
          <Flex
          h="100%"
          w='69%'
          justifyContent=''
          pl='10%'
          fontSize='1.5rem'
          font-family= 'Comfortaa'
          >
            SwapEV
          </Flex>
          <Flex
            justifyContent='space-around'
            w='50%'
          >
            <Box
            fontSize={{ base: "0.81rem", md: "1rem" }}
            >
              About
            </Box>
            <Box
            fontSize={{ base: "0.81rem", md: "1rem" }}
            >
              SignIn
            </Box>
            <Box
            fontSize={{ base: "0.81rem", md: "1rem" }}
            >
              Register
            </Box>
          </Flex>
        </Flex>
        <Flex
>
        <Flex
        display={{ base: 'none', md: 'flex' }}
        h='50%'
        w='27%'
        mt='10%'
        ml='5%'
        direction='column'
        >
          <Box
          fontSize='6xl'
          >
            Sign In to SwapEV
          </Box>
          <Box
          fontSize='1.8xl'
          mt='12%'
          >
            If you dont have a account what are you waiting for
          </Box>
        </Flex>
        <Flex
        display={{ base: 'none', md: 'flex' }}
        >
          <Box
          pt='21%'
          overflow='hidden'
          h='auto'
          >
            <img src='https://cdn.discordapp.com/attachments/941091409509896283/1018129380083515402/unknown.png'/>
          </Box>
        </Flex>
        <Flex
        pl='6%'
        pt='15%'
        direction={'column'}
        backgroundcolor='blue'
        >
          <Box>
            <img src="https://cdn.discordapp.com/attachments/941091409509896283/1018124648837296258/Rectangle_2.png"></img>
          </Box>
          <Box pt='15%'>
            <img src="https://cdn.discordapp.com/attachments/941091409509896283/1018124648837296258/Rectangle_2.png"></img>
          </Box>
          <Box 
          pl='60%'
          pt='3%'
          fontSize={{ base: "0.81rem", md: "1rem" }}
          >
            Recover Password?
          </Box>
        <Flex>
          <Box
            pt='5%'
            pr='1%'
          >
            <img src='https://cdn.discordapp.com/attachments/941091409509896283/1018136519501946890/Line_2.png'></img>
          </Box>
          <Box
          pt='2%'
          fontSize={{ base: "0.81rem", md: "1rem" }}
          >
            or continue with
          </Box>
          <Box
          pt='5%'
          pl='1%'
          >
            <img src='https://cdn.discordapp.com/attachments/941091409509896283/1018136519501946890/Line_2.png'></img>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <img src="https://cdn.discordapp.com/attachments/941091409509896283/1018138290848809020/Google.png"></img>
          </Box>
          <Box>
            <img src='https://cdn.discordapp.com/attachments/941091409509896283/1018138310415224832/Apple.png'></img>
          </Box>
          <Box>
            <img src="https://cdn.discordapp.com/attachments/941091409509896283/1018138308531994714/Facebook.png"></img>
          </Box>
        </Flex>
        <Box
        display={{ base: 'flex', md: 'none' }}
        >
          <img src="https://cdn.discordapp.com/attachments/941091409509896283/1018159662828371999/pngtree-new-energy-vehicle-electric-vehicle-png-image_2828299-removebg-preview.png"></img>
        </Box>
        </Flex>
        </Flex>
    </Flex>
  );
};

export default Landing;
