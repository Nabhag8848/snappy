import config from '@/config/general.config';
import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Hero from 'src/components/landing/Hero';
import SEO from 'src/components/SEO/SEO';

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} is a Figma Plugin which helps you generate copyright free ad assets directly inside Figma`}
        image={`https://asset.cloudinary.com/demonicirfan/47a469f3a5af187cad96111da00c3f5b`}
      />
      <Container maxW='full' p='0'>
        <Hero />
      </Container>
    </div>
  );
};

export default Home;
