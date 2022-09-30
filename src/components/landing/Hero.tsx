import {
  Center,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import ReactTextTransition, { presets } from 'react-text-transition';
import { InstallOnFigma, InstallOnSketch } from '../Buttons/Install.Button';
import SnappyComponent from './SnappyComponent';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);

  const texts = ['Figma', 'Sketch'];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container
      maxW="8xl"
      py={{ base: '2rem', md: '4rem', lg: '6rem', xl: '4vh' }}
      px="0"
    >
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent m="5vw" rounded={'md'}>
          <ModalCloseButton />
          <ModalBody border="2px solid red">
            <ReactPlayer
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              // playing={isPlaying}
              width="100%"
              height="100%"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack
        mx="auto"
        maxW="78rem"
        minH="75vh"
        direction={{ base: 'column', lg: 'column' }}
        justify="space-between"
        alignItems={'center'}
        gap={{ base: '2rem', md: '2rem' }}
      >
        <Stack
          zIndex={'1'}
          justifyContent={'space-between'}
          alignItems={'center'}
          maxW="3xl"
          textAlign={'center'}
        >
          <Stack
            mx="auto"
            w="full"
            gap={{ base: '0.5rem', md: '0.8rem' }}
            alignItems={'center'}
          >
            <Center bg="snappy.yellow" rounded="0.3rem" p="0.3rem 0.5rem">
              <Text fontWeight={'600'} fontSize={{ base: '10px', md: '14px' }}>
                A PLUGIN FOR DESIGN TOOLS
              </Text>
            </Center>
            <Heading
              lineHeight={{ base: '2.6rem', md: '72px' }}
              letterSpacing={'-0.01em'}
              fontWeight="600"
              fontSize={{ base: '36px', md: '57px' }}
            >
              Generate ad assets from text inside {''}
              <ReactTextTransition
                springConfig={presets.stiff}
                style={{ margin: '0 2px' }}
                inline
              >
                {texts[index % texts.length]}
              </ReactTextTransition>{' '} 🎨
            </Heading>
            <Text
              fontSize={{ base: '15px', md: '18px' }}
              color="snappy.dark_gray"
              fontWeight="500"
              maxW={{ base: '80vw', md: '30rem' }}
            >
              A plugin for copyright-free images, using AI directly in your
              favorite design tool.
            </Text>
            <Stack
              pt={'0.5rem'}
              direction="row"
              gap={{ base: '0.2rem', md: '0.8rem' }}
            >
              <InstallOnFigma>GET PLUGIN</InstallOnFigma>
              <InstallOnSketch>COMING SOON</InstallOnSketch>
              {/* <Center
                onClick={onOpen}
                as="button"
                fontWeight="600"
                fontSize={{ base: '14px', md: '16px' }}
                p="0.3rem"
                textTransform={'capitalize'}
              >
                <Icon as={HiPlay} w={[6, 8]} h={[6, 8]} mx="0.5rem" />
                Watch Demo
              </Center> */}
            </Stack>
          </Stack>
        </Stack>
        <Stack  zIndex={'0'}>
          <SnappyComponent />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
