import {
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HiArrowNarrowDown, HiPlay } from 'react-icons/hi';
import ReactPlayer from 'react-player';
import SnappyComponent from './SnappyComponent';

const Hero = () => {
  // const [isPlaying, setIsPlaying] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      maxW="8xl"
      py={{ base: '3rem', md: '4rem', lg: '5rem', xl: '8vh' }}
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
          <ModalBody>
            <ReactPlayer
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              // playing={isPlaying}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack
        mx="auto"
        maxW="78rem"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        gap="4rem"
      >
        <Stack
          justifyContent={'space-between'}
          pl="1rem"
          alignItems={'start'}
          maxW={'28rem'}
        >
          <Stack gap={{ base: '0.7rem', md: '1rem' }} alignItems={'start'}>
            <Center bg="snappy.yellow" rounded="0.3rem" p="0.3rem 0.5rem">
              <Text fontWeight={'600'} fontSize="12px">
                FIGMA PLUGIN
              </Text>
            </Center>
            <Heading
              lineHeight={{ base: '3.5rem', md: '4rem' }}
              letterSpacing={'-0.02em'}
              fontWeight="900"
              fontSize={{ base: '5xl', md: '6xl' }}
            >
              Generate assets from sentence.
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '22px' }}
              color="snappy.dark_gray"
              fontWeight="500"
            >
              Get copyright-free ad assets, using Stable Diffusion directly in
              Figma.
            </Text>
            <Stack direction="row" gap={{ base: '0.2rem', md: '0.8rem' }}>
              <Button size={{ base: 'sm', md: 'md' }}>INSTALL PLUGIN</Button>
              <Center
                onClick={onOpen}
                as="button"
                fontWeight="700"
                fontSize={{ base: '14px', md: '16px' }}
                p="0.3rem"
                textTransform={'capitalize'}
              >
                <Icon as={HiPlay} w={[6, 8]} h={[6, 8]} mx="0.5rem" />
                Watch Demo
              </Center>
            </Stack>
          </Stack>
          <Center display={{ base: 'none', md: 'flex' }}>
            <Icon as={HiArrowNarrowDown} w={6} h={6} />
          </Center>
        </Stack>
        <Stack>
          <SnappyComponent />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
