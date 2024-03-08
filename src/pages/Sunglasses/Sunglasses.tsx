import {
  AspectRatio,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
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

      {(!data || data.length === 0) && (
        <p>There are no sunglasses available at the moment.</p>
      )}

      {data && (
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={2}
        >
          {data.map((sunglass) => (
            <GridItem key={sunglass.UPC} w="100%">
              <AspectRatio maxW="400px" ratio={1}>
                <Image
                  boxSize="400px"
                  objectFit="cover"
                  src={`https://picsum.photos/id/${sunglass.UPC}/400`}
                  alt={`${sunglass.name} image`}
                />
              </AspectRatio>
              <Text mt={2} textAlign="center">
                {sunglass.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      )}
    </Container>
  );
};
