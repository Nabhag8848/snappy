import { CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Divider,
  HStack,
  keyframes,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const animationKeyframes = keyframes`
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
`;

const animation = `${animationKeyframes} 0.6s cubic-bezier(.36,.07,.19,.97) 2s both`;

const Plugin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log('in view');
  }, [isInView]);

  return (
    <VStack
      // ref={ref}
      animation={animation}
      shadow={'xl'}
      w="220px"
      h="340px"
      bg="white"
      p="0.2rem"
      color={'blackAlpha.700'}
      gap="0"
      spacing={'0'}
      fontWeight={'400'}
      fontSize={'10px'}
      justify="space-between"
    >
      {' '}
      <VStack alignItems={'flex-start'} justify="flex-start" w="100%">
        <HStack
          p="0.35rem 0.5rem 0.0rem 0.4rem"
          alignItems={'center'}
          w="full"
          justify={'space-between'}
        >
          <HStack>
            <Center w="1rem">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="19" height="19" rx="3" fill="#FFFF1E" />
                <rect
                  x="8"
                  y="5"
                  width="7.73806"
                  height="4.84039"
                  fill="black"
                />
                <rect
                  x="4"
                  y="8"
                  width="7.73806"
                  height="4.84039"
                  fill="black"
                />
              </svg>
            </Center>
            <Text fontWeight={'600'}>Snappy</Text>
          </HStack>
          <CloseIcon w={2} h={2} />
        </HStack>{' '}
        <Divider />
        <Tabs borderColor="white" w="100%" size="xs" colorScheme="black">
          <TabList px="0.8rem" gap={'0.9rem'}>
            <Tab
              _selected={{ fontWeight: '500', color: 'black' }}
              color="blackAlpha.600"
              border="none"
              fontWeight={'400'}
            >
              Text
            </Tab>
            <Tab
              _selected={{ fontWeight: '500', color: 'black' }}
              color="blackAlpha.600"
              border="none"
              fontWeight={'400'}
            >
              Image
            </Tab>
            <Tab
              _selected={{ fontWeight: '500', color: 'black' }}
              color="blackAlpha.600"
              border={'none'}
              fontWeight={'400'}
            >
              Explore
            </Tab>
          </TabList>
          <Divider />
          <TabPanels pt="0.7rem">
            <TabPanel p={'0'}>
              <VStack p="0" m="0">
                <VStack align={'flex-start'} w="100%" px="0.8rem">
                  <Text>Prompt</Text>
                  <Textarea
                    color="blackAlpha.500"
                    value={'hello world'}
                    fontSize="10px"
                    size="xs"
                    h="2rem"
                    resize={'none'}
                  />
                </VStack>
                <VStack align={'flex-start'} w="100%" p="0.8rem">
                  <Text>Selected Node</Text>
                  <Text> # Rectangle </Text>
                </VStack>
              </VStack>
              <Button
                backgroundColor="snappy.yellow"
                _hover={{ backgroundColor: '#B5B527' }}
                textTransform={'none'}
                borderRadius={'4px'}
                p="0.2rem"
                h="1.6rem"
                fontSize={'10px'}
                w="85%"
                m="1rem"
                mb=""
              >
                Render
              </Button>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
      <Text mt="auto" pb="1.2rem" fontSize={'8px'} color="blackAlpha.500">
        Powered by Stability Diffusion
      </Text>
    </VStack>
  );
};

export default Plugin;
