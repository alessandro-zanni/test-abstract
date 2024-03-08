import { AspectRatio, GridItem, Skeleton } from '@chakra-ui/react';
import { type FC } from 'react';

export const SunglassesListLoader: FC = () => {
  const skeletons = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {skeletons.map((skeleton) => (
        <GridItem key={skeleton} w="100%">
          <AspectRatio maxW="400px" ratio={1}>
            <Skeleton h="100%" />
          </AspectRatio>
          <Skeleton mt={2} h="20px" />
        </GridItem>
      ))}
    </>
  );
};
