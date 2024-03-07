import { type FC } from 'react';
import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

export const Container: FC<ContainerProps> = (props) => (
  <ChakraContainer maxW="8xl" h="100%" py="4" {...props} />
);
