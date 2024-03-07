import { Link, LinkProps } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink as RRLink } from 'react-router-dom';

export interface HeaderLinkProps extends LinkProps {
  label: string;
  to: string;
}

export const HeaderLink: FC<HeaderLinkProps> = ({ label, to, ...rest }) => (
  <Link
    as={RRLink}
    to={to}
    h="100%"
    textTransform="uppercase"
    display="flex"
    alignItems="center"
    justifyContent="center"
    fontWeight="medium"
    borderBottom="3px solid"
    borderColor="transparent"
    _hover={{
      textDecoration: 'none',
      borderColor: 'blue.500',
    }}
    _activeLink={{
      borderColor: 'blue.500',
    }}
    {...rest}
  >
    {label}
  </Link>
);
