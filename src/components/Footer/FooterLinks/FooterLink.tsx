import { Link, type LinkProps } from '@chakra-ui/react';
import { type FC } from 'react';

export interface FooterLinkProps extends LinkProps {
  label: string;
  href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ label, href, ...rest }) => (
  <Link
    href={href}
    isExternal
    textTransform="lowercase"
    fontWeight="bold"
    textDecoration="underline"
    {...rest}
  >
    {label}
  </Link>
);
