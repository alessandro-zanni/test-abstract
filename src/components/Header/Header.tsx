import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { HEADER_HEIGHT } from '../../utils/constants';
import { Container } from '../Container';
import { HeaderLinks } from './HeaderLinks';
import { HeaderSearchForm } from './HeaderSearchForm';
import { Logo } from './Logo';

export const Header: FC = () => (
  <Box
    pos="fixed"
    top="0"
    left="0"
    w="100%"
    h={`${HEADER_HEIGHT}px`}
    bg="white"
    borderBottom="1px solid"
    borderColor="black"
  >
    <Container py="0">
      <Flex align="center" justify="space-between" h="100%">
        <Logo />
        <HeaderLinks />
        <HeaderSearchForm />
      </Flex>
    </Container>
  </Box>
);
