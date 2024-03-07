import { Image, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink as RRLink } from 'react-router-dom';

export const Logo: FC = () => (
  <Link as={RRLink} to="/" display="block" h="100%" py={2}>
    <Image
      src="/images/logo.svg"
      alt="Logo"
      objectFit="contain"
      h="100%"
      maxW="150px"
    />
  </Link>
);
