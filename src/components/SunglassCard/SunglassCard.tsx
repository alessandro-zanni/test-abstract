import { GridItem, AspectRatio, Image, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { type Sunglass } from '../../models';

export interface SunglassCardProps {
  sunglass: Sunglass;
}

export const SunglassCard: FC<SunglassCardProps> = ({
  sunglass: { UPC, name },
}) => (
  <GridItem w="100%">
    <AspectRatio maxW="400px" ratio={1}>
      <Image
        boxSize="400px"
        objectFit="cover"
        src={`https://picsum.photos/id/${UPC}/400`}
        alt={`${name} image`}
      />
    </AspectRatio>
    <Text mt={2} textAlign="center">
      {name}
    </Text>
  </GridItem>
);
