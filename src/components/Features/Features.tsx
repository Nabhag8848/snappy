import { Center, Container } from '@chakra-ui/react';
import Count from './Count';
import Feature1 from './feature1/Feature1';
import Feature2 from './feature2/Feature2';

const Features = () => {
  return (
    <Container minW={'full'} bg="white" m="0">
      <Container
        minW="full"
        position={'absolute'}
        bottom="0"
        margin="0"
        p="0"
        maxH="20rem"
        overflow={'hidden'}
        display={{ base: 'none', md: 'inline-block' }}
      >
        <Center
          overflow={'hidden'}
          mx="auto"
          maxW={'6xl'}
          alignItems={'flex-start'}
          justifyContent="start"
        >
          <Center
            overflow={'hidden'}
            transform={'translateY(10rem)'}
            border={'1px solid #2c2c2c22'}
            rounded="full"
            w="30rem"
            h="30rem"
          >
            <Center
              overflow={'hidden'}
              border={'1px solid #2c2c2c44'}
              rounded="full"
              w="25rem"
              h="25rem"
            >
              <Center
                border={'1px solid #2c2c2c66'}
                rounded="full"
                w="20rem"
                h="20rem"
              >
                {' '}
              </Center>
            </Center>
          </Center>
        </Center>
      </Container>
      <Count />
      <Feature1 />
      <Feature2 />
    </Container>
  );
};

export default Features;
