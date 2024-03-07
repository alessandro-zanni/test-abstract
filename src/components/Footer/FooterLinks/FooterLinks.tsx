import { HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { SOCIAL_LINKS } from '../../../utils/constants';
import { FooterLink } from './FooterLink';

export const FooterLinks: FC = () => (
  <HStack spacing={3}>
    {SOCIAL_LINKS.map((link) => (
      <FooterLink key={link.label} label={link.label} href={link.href} />
    ))}
  </HStack>
);
