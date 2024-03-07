import { Button, HStack, Input } from '@chakra-ui/react';
import { FC } from 'react';

export const HeaderSearchInput: FC = () => (
  <HStack spacing={2}>
    <Input placeholder="Search..." />
    <Button colorScheme="blue">RESET</Button>
  </HStack>
);
