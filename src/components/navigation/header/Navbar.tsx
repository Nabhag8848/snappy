import {
  Badge,
  Box,
  Center,
  Collapse,
  Container,
  Flex,
  ScaleFade,
  useDisclosure
} from '@chakra-ui/react';
import { Slant as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import Logo from 'src/components/Logo';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Container p='0.3rem' maxW="full">
      <Center
        display="flex"
        maxW="8xl"
        mx="auto"
        flexDirection="column"
        p={{ base: '0.8rem 0.4rem', sm: '0.6rem 2rem', md: '0.6rem 3rem' }}
      >
        <Flex
          w={'100%'}
          h={{base:12, md:20}}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Link href="/">
            <Box
              maxW={'4rem'}
              as="button"
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
                bg="snappy.yellow"
                color="black"
                fontSize="sm"
                position="absolute"
                transform="translate(-0.75rem, -1.1rem)"
                transition={'all 0.3s ease'}
              >
                2
              </Badge>
            </ScaleFade>
          </Center>
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
                  Discover
                </Box>
                <Badge
                  px="0.4rem"
                  variant={'solid'}
                  rounded={'full'}
                  bg="snappy.yellow"
                  fontSize="md"
                  color="black"
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
              >
                Demo
              </Box>
            </Link>
            <Link href="/hire">
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onClose()}
                as="button"
                transition={'all 0.3s ease'}
              >
                Pricing
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
          </Flex>
        </Collapse>
      </Center>
    </Container>
  );
};
export default Navbar;
