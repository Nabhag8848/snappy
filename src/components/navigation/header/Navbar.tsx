import {
  Badge,
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  ScaleFade,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { Slant as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import Logo from 'src/components/Logo';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Container maxW="full">
      <Center
        display="flex"
        maxW="8xl"
        mx="auto"
        flexDirection="column"
        p={{ base: '1rem 1rem', sm: '0.6rem 2rem', md: '0.8rem 3rem' }}
      >
        <Flex
          w={'100%'}
          h={20}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Center display={{ base: 'flex', lg: 'none' }}>
            <Hamburger
              toggled={isOpen}
              toggle={onToggle}
              size={30}
              duration={0.4}
              rounded
            />
            <ScaleFade initialScale={0} in={!isOpen}>
              <Badge
                px="0.4rem"
                variant={'solid'}
                rounded={'full'}
                bg="#FD6444"
                fontSize="sm"
                position="absolute"
                transform="translate(-0.75rem, -1.1rem)"
                transition={'all 0.3s ease'}
              >
                2
              </Badge>
            </ScaleFade>
          </Center>
          <Link href="/">
            <Box
              display={{ base: 'none', md: 'flex' }}
              as="button"
              fontSize={['xl', '3xl']}
              fontWeight={'800'}
              transition={'all 0.3s ease'}
              _hover={{
                color: 'grey',
              }}
              h="fit-content"
            >
              <Logo />
            </Box>
          </Link>
          <nav>
            <Center
              ml="auto"
              display={{ base: 'none', lg: 'flex' }}
              flexDirection="row"
              fontSize="16px"
              minH="100%"
              gap={{ base: '0', md: '2vw', lg: '4rem' }}
              maxW="20rem"
              fontWeight="700"
            >
              <Center>
                <Box as="button" transition={'all 0.3s ease'}>
                  Discover
                </Box>
              </Center>
              <Center>
                <Box as="button" transition={'all 0.3s ease'}>
                  Demo
                </Box>
              </Center>

              <Center>
                <Box as="button" transition={'all 0.3s ease'}>
                  Pricing
                </Box>
              </Center>
            </Center>
          </nav>
          <Button
            onClick={() => {
              //onModalOpen();
            }}
            p="1rem"
            size={['sm', 'md']}
            gap={'0.5rem'}
          >
            {/* <Center ml='0.5rem'>
              <FigmaLogo />
            </Center> */}
            <Text mr="0.5rem">Install Plugin</Text>
          </Button>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            display={{ base: 'flex', lg: 'none' }}
            flexDirection="column"
            alignItems="start"
            fontSize="22px"
            p="2rem 1rem"
            gap="1.4rem"
          >
            {/* <Link href='/about'>
                  <Box
                    display='flex'
                    alignItems={'start'}
                    w='100%'
                    onClick={() => onClose()}
                    as='button'
                    transition={'all 0.3s ease'}
                    _hover={{
                      color: 'grey',
                    }}
                    fontWeight='500'
                  >
                    About
                  </Box>
                </Link> */}
            <Link href="/jobs">
              <Flex
                direction={'row'}
                alignItems="center"
                justify={'space-between'}
                w="100%"
              >
                <Box
                  display="flex"
                  alignItems={'start'}
                  w="100%"
                  onClick={() => onClose()}
                  as="button"
                  transition={'all 0.3s ease'}
                  _hover={{
                    color: 'grey',
                  }}
                  fontWeight="500"
                >
                  Job Hunt
                </Box>
                <Badge
                  px="0.4rem"
                  variant={'solid'}
                  rounded={'full'}
                  bg="#FD6444"
                  fontSize="md"
                >
                  2
                </Badge>
              </Flex>
            </Link>
            <Link href="/hire">
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onClose()}
                as="button"
                transition={'all 0.3s ease'}
                _hover={{
                  color: 'grey',
                }}
                fontWeight="500"
              >
                Hire Talent
              </Box>
            </Link>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              w="84vw"
              as="button"
              transition={'all 0.3s ease'}
            >
              {/* {useColorModeValue('Dark Mode', 'Light Mode')}
                  <Switch /> */}
            </Box>
            <Box w="100%" h="0.09rem" bg="gray.500" />
          </Flex>
        </Collapse>
      </Center>
    </Container>
  );
};
export default Navbar;
