import { Container, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { HeaderLinks } from './HeaderLinks';
import { HeaderSearchInput } from './HeaderSearchInput';
import { Logo } from './Logo';

export const Header: FC = () => (
  <Container maxW="8xl" h="100%">
    <Flex align="center" justify="space-between" h="100%">
      <Logo />
      <HeaderLinks />
      <HeaderSearchInput />
    </Flex>
  </Container>
);
