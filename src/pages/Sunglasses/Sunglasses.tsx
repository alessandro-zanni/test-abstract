import { Spinner } from '@chakra-ui/react';
import { type FC } from 'react';
import { Container, PageTitle } from '../../components';
import { useSunglasses } from '../../hooks';

export const Sunglasses: FC = () => {
  const { data, isLoading } = useSunglasses();

  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  return (
    <Container>
      <PageTitle title="Sunglasses" />
    </Container>
  );
};
