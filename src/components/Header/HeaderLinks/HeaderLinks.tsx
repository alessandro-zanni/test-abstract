import { HStack } from '@chakra-ui/react';
import { type FC } from 'react';
import { HEADER_LINKS } from '../../../utils/constants';
import { HeaderLink } from './HeaderLink';

export const HeaderLinks: FC = () => (
  <HStack spacing={8} mx={8} h="100%">
    {HEADER_LINKS.map((link) => (
      <HeaderLink key={link.label} label={link.label} to={link.to} />
    ))}
  </HStack>
);
