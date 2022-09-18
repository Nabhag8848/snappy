import { ChildInterface } from '@/interfaces/children/child.interface';
import { Container } from '@chakra-ui/react';
import Navbar from './navigation/header/Navbar';

const Layout = ({ children }: ChildInterface) => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      maxW='full'
      p='0'
    >
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
