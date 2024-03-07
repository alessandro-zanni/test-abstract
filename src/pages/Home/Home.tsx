import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import { LoremIpsum } from '../../components';

export const Home: FC = () => (
  <Container maxW="8xl" h="100%" py="4">
    <LoremIpsum count={10} />
  </Container>
);
