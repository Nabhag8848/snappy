import config from '@/config/general.config';
import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ParallaxProvider } from 'react-scroll-parallax';
import Features from 'src/components/Features/Features';
import Hero2 from 'src/components/landing/Hero2';
import SEO from 'src/components/SEO/SEO';

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} is a Figma Plugin which helps you generate copyright free ad assets directly inside Figma`}
        image={`https://asset.cloudinary.com/demonicirfan/47a469f3a5af187cad96111da00c3f5b`}
      />
      <ParallaxProvider>
        <Container maxW='full' p='0' display={'flex'} flexDirection='column' gap={'14rem'}>
          <Hero2 />
          <Features />
        </Container>
      </ParallaxProvider>
    </div>
  );
};

export default Home;
