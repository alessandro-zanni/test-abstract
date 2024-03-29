import { Link, type LinkProps } from '@chakra-ui/react';
import { type FC } from 'react';
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
      borderColor: 'black',
    }}
    _activeLink={{
      borderColor: 'black',
    }}
    {...rest}
  >
    {label}
  </Link>
);
