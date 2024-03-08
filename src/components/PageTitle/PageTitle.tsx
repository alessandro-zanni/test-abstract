import { type FC } from 'react';
import { Heading } from '@chakra-ui/react';

export interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <Heading as="h1" size="xl" mb={4}>
    {title}
  </Heading>
);
