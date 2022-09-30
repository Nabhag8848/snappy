import {
    Center,
    Container,
    Heading,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react';
import FeatureImage from './FeatureImage';

const Feature2 = () => {
  return (
    <Container maxW="6xl">
      <Stack
        px="1rem"
        alignItems={'center'}
        justify="center"
        direction={{ base: 'column-reverse', md: 'row-reverse' }}
      >
        <VStack
          gap="0.8rem"
          maxW="24rem"
          alignItems={{ base: 'center', md: 'start' }}
          textAlign={{ base: 'center', md: 'start' }}
          w="full"
        >
          <Heading fontSize={{ base: '20px', md: '32px' }} fontWeight={'500'}>
            Powered by Stability Diffusion
          </Heading>
          <Text>
            Snappy uses stability diffusion to generate assets for you.
          </Text>
        </VStack>
        <Center overflow={{ base: 'hidden', md: 'visible' }} maxW="100vw">
          <FeatureImage />
        </Center>
      </Stack>
    </Container>
  );
};

export default Feature2;
