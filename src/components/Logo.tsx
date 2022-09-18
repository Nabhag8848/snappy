import { Box, Center } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Center transform={'scale(1.0)'}>
      <Center h="3rem">
        <Box
          bgColor="black"
          w="2rem"
          h="1.2rem"
          transform={'translate(0.2rem, 0.3rem)'}
        />
        <Box
          bgColor="black"
          w="2rem"
          h="1.2rem"
          transform={'translate(-0.2rem, -0.3rem)'}
        />
      </Center>
    </Center>
  );
};

export default Logo;
