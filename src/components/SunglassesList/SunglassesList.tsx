import { Grid, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { type Sunglass } from '../../models';
import { SunglassCard } from '../SunglassCard';
import { SunglassesListLoader } from './SunglassesListLoader';

export interface SunglassesListProps {
  sunglasses?: Sunglass[];
  isLoading: boolean;
}

export const SunglassesList: FC<SunglassesListProps> = ({
  sunglasses,
  isLoading,
}) => {
  if (!isLoading && sunglasses?.length === 0) {
    return <Text>There are no sunglasses available at the moment.</Text>;
  }

  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={2}
    >
      {isLoading && <SunglassesListLoader />}

      {!isLoading &&
        sunglasses?.map((sunglass) => (
          <SunglassCard key={sunglass.UPC} sunglass={sunglass} />
        ))}
    </Grid>
  );
};
