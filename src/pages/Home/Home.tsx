import { type FC } from 'react';
import { Container, LoremIpsum } from '../../components';

export const Home: FC = () => (
  <Container>
    <LoremIpsum count={10} />
  </Container>
);
