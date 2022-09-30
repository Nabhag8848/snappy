import {
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HiPlay } from 'react-icons/hi';
import ReactTextTransition, { presets } from 'react-text-transition';

const Count = () => {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index) => {
          if (index === 9) {
            return 0;
          }
          return index + 1;
        });
      },
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Container
      maxW={'4xl'}
      transform="translateY(-2rem)"
      display={'flex'}
      flexDir="column"
      gap="8rem"
    >
      <VStack
        alignItems={'center'}
        gap={{ base: '0.8rem', md: '2rem' }}
        minW="full"
      >
        <Center w={{ base: '5rem', md: '8rem' }} h="4rem">
          <svg
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_183_26)">
              <rect
                x="14"
                y="6"
                width="81"
                height="81"
                rx="12"
                fill="#FEF79E"
              />
              <rect
                x="51.4668"
                y="31.92"
                width="26.5232"
                height="14.58"
                fill="black"
              />
              <rect
                x="31.8203"
                y="43.2599"
                width="26.5232"
                height="14.58"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_183_26"
                x="0"
                y="0"
                width="109"
                height="109"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_183_26"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_183_26"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Center>
        <Center gap={{ base: '0.3rem', md: '' }} flexDirection="column">
          <Heading fontSize={{ base: '5xl', md: '6xl' }} fontWeight="600">
            5,46
            <ReactTextTransition
              springConfig={presets.gentle}
              style={{ margin: '0 2px' }}
              inline
            >
              {index}
            </ReactTextTransition>{' '}
          </Heading>
          <Text color={'snappy.dark_gray'} fontSize={{ base: 'sm', md: 'md' }}>
            Assets generated
          </Text>
          <Center
            py="1rem"
            as="button"
            fontWeight="500"
            transform={'translateX(-0.6rem)'}
            fontSize={{ base: '14px', md: '18px' }}
            textTransform={'capitalize'}
          >
            <Icon as={HiPlay} w={[6, 7]} h={[6, 7]} mx="0.5rem" />
            Watch Demo
          </Center>
        </Center>
      </VStack>
      <VStack maxW="3xl" mx="auto" gap={{ base: '1.0rem', md: '1.2rem' }}>
        <Heading
          fontSize={{ base: '22px', md: '4xl' }}
          fontWeight={'500'}
          textAlign="center"
        >
          Get perfect images directly inside your design tool with just one
          click{' '}
        </Heading>
        <Text
          fontSize={{ base: '14px', md: '17px' }}
          px={{ base: '0.5rem', md: '5rem' }}
          fontWeight={'400'}
          textAlign="center"
          color={'snappy.dark_gray'}
        >
          Snappy will help you get copyright free images without leaving your
          artboard with just few words. Save your time and money.
        </Text>
        <Flex
          maxW="38rem"
          w="full"
          px="4rem"
          alignItems={'flex-end'}
          direction="column"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.61815 2.94512L5.34098 14.6596C5.61257 15.5142 6.78484 15.607 7.18752 14.8058L9.50203 10.2006C9.59447 10.0167 9.7414 9.86582 9.92278 9.76851L14.0382 7.56068C14.7984 7.15281 14.72 6.03817 13.9101 5.74077L2.91589 1.70354C2.13536 1.41692 1.36632 2.15268 1.61815 2.94512Z"
              fill="#FEF79E"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Count;
