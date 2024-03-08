import { Box, Flex, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { Container } from '../Container';
import { FooterLinks } from './FooterLinks';
import { FooterSignUpForm } from './FooterSignUpForm';

export const Footer: FC = () => (
  <Container>
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
