import { Button, HStack, Input } from '@chakra-ui/react';
import { FC } from 'react';

export const FooterSignUpForm: FC = () => (
  <HStack spacing={2}>
    <Input bg="white" />
    <Button>SIGN UP</Button>
  </HStack>
);
