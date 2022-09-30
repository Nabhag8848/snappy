import {
  Center,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import FeatureImage from './FeatureImage';

const Feature1 = () => {
  return (
    <Container
      maxW="6xl"
      pt={{ base: '3rem', md: '4rem' }}
      pb={{ base: '2rem', md: '' }}
    >
      <Stack
        px="1rem"
        alignItems={'center'}
        justify="center"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <VStack
          pb="4rem"
          gap="0.8rem"
          maxW="24rem"
          alignItems={{ base: 'center', md: 'start' }}
          textAlign={{ base: 'center', md: 'start' }}
          w="full"
        >
          <Heading fontSize={{ base: '20px', md: '32px' }} fontWeight={'500'}>
            Unlimited assets on both figma & sketch
          </Heading>
          <Text>
            Generate unlimited custom images and save thousands of dollars
          </Text>
        </VStack>
        <Center overflow={{ base: 'hidden', md: 'visible' }} maxW="100vw">
          <FeatureImage />
        </Center>
      </Stack>
    </Container>
  );
};

export default Feature1;
