import { type FC } from 'react';
import { Container, PageTitle, SunglassesList } from '../../components';
import { useSunglasses } from '../../hooks';

export const Sunglasses: FC = () => {
  const { data, isLoading } = useSunglasses();

  return (
    <Container>
      <PageTitle title="Sunglasses" />
      <SunglassesList sunglasses={data} isLoading={isLoading} />
    </Container>
  );
};
