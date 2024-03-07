import { Button, HStack, Input } from '@chakra-ui/react';
import { FC } from 'react';

export const HeaderSearchForm: FC = () => (
  <HStack spacing={2}>
    <Input placeholder="Search..." />
    <Button>RESET</Button>
  </HStack>
);
