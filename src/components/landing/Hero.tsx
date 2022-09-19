import {
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { HiArrowNarrowDown, HiPlay } from 'react-icons/hi';
import ReactPlayer from 'react-player';
import InstallButton from '../Buttons/Install.Button';
import SnappyComponent from './SnappyComponent';

const Hero = () => {
  // const [isPlaying, setIsPlaying] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      maxW="8xl"
      py={{ base: '3rem', md: '4rem', lg: '6rem', xl: '9vh' }}
      px='0'
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
        minH='75vh'
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        //gap="4rem"
      >
        <Stack
          justifyContent={'space-between'}
          pl="2rem"
          alignItems={'start'}
          maxW={'28rem'}
        >
          <Stack  maxW='25rem' gap={{ base: '0.7rem', md: '1rem' }} alignItems={'start'}>
            <Center bg="snappy.yellow" rounded="0.3rem" p="0.3rem 0.5rem">
              <Text fontWeight={'600'} fontSize="14px">
                 PLUGIN
              </Text>
            </Center>
            <Heading
              lineHeight={{ base: '4rem', md: '72px' }}
              letterSpacing={'-0.01em'}
              fontWeight="600"
              fontSize={{ base: '62px', md: '72px' }}
            >
              Generate ad assets from text.
            </Heading>
            <Text
              fontSize={{ base: '20px', md: '22px' }}
              color="snappy.dark_gray"
              fontWeight="500"
              maxW={{base:'70vw', md:'20rem'}}
            >
              Get copyright-free images,
              using AI directly in
              Figma.
            </Text>
            <Stack pt={'0.5rem'} direction="row" gap={{ base: '0.2rem', md: '0.8rem' }}>
              <InstallButton />
              <Center
                onClick={onOpen}
                as="button"
                fontWeight="600"
                fontSize={{ base: '14px', md: '16px' }}
                p="0.3rem"
                textTransform={'capitalize'}
              >
                <Icon as={HiPlay} w={[6, 8]} h={[6, 8]} mx="0.5rem" />
                Watch Demo
              </Center>
            </Stack>
          </Stack>
          <HStack display={{ base: 'none', md: 'flex' }}>
            <Center>
              <Icon as={HiArrowNarrowDown} w={6} h={6} />
            </Center>
            <Text color='snappy.dark_gray' fontSize='sm'>Discover how it works</Text>
          </HStack>
        </Stack>
        <Stack>
          <SnappyComponent />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
