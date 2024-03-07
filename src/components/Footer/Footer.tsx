import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterSignUpForm } from './FooterSignUpForm';

export const Footer: FC = () => (
  <Container maxW="8xl" h="100%" py="4">
    <Box h="100%">
      <Flex align="start" justify="space-between">
        <Text>Subscribe to our newsletter</Text>
        <FooterSignUpForm />
      </Flex>

      <Flex align="start" justify="end" mt={2}>
        <FooterLinks />
      </Flex>
    </Box>
  </Container>
);
