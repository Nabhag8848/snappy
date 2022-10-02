import { Container, Heading, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { InstallOnFigma, InstallOnSketch } from '../Buttons/Install.Button';
import HeroAnimation from './HeroAnimation';

const Hero2 = () => {
  const [index, setIndex] = useState(0);
  const parallax = useParallax({
    speed: -8,
  });

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
      <Stack
        transform={'translateY(3rem)'}
        ref={parallax.ref as React.RefObject<HTMLDivElement>}
        mx="auto"
        maxW="78rem"
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
            <Stack
              pt={'0.5rem'}
              direction="row"
              gap={{ base: '0.2rem', md: '0.8rem' }}
            >
              <InstallOnFigma>GET PLUGIN</InstallOnFigma>
              <InstallOnSketch />
            </Stack>
            <Heading
              lineHeight={{ base: '2.6rem', md: '74px' }}
              letterSpacing={'-0.01em'}
              fontWeight="700"
              fontSize={{ base: '36px', md: '64px' }}
            >
              Generate ad assets from text inside Figma 🎨
            </Heading>
          </Stack>
        </Stack>
      </Stack>{' '}
      <HeroAnimation />
    </Container>
  );
};

export default Hero2;
