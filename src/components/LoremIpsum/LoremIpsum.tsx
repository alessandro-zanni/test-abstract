import { type FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

export interface LoremIpsumProps {
  count?: number;
}

export const LoremIpsum: FC<LoremIpsumProps> = ({ count = 1 }) => {
  const paragraphs = Array.from({ length: count }, (_, i) => i);

  if (count <= 0) {
    return null;
  }

  return (
    <Box>
      {paragraphs.map((n) => (
        <Text key={n} mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
          dictum fusce ut placerat orci nulla pellentesque dignissim enim.
          Tortor dignissim convallis aenean et tortor at risus viverra
          adipiscing. Blandit cursus risus at ultrices mi tempus imperdiet.
          Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
          tellus. Lorem sed risus ultricies tristique nulla aliquet. Lacus
          viverra vitae congue eu consequat ac felis donec et. Id donec ultrices
          tincidunt arcu non sodales. Tortor condimentum lacinia quis vel.
          Tortor vitae purus faucibus ornare suspendisse sed nisi. Ultrices
          tincidunt arcu non sodales neque sodales ut etiam sit. At ultrices mi
          tempus imperdiet nulla malesuada pellentesque. Aliquet porttitor lacus
          luctus accumsan tortor posuere. Vitae tempus quam pellentesque nec.
          Non sodales neque sodales ut etiam sit amet nisl. Sed vulputate mi sit
          amet mauris commodo quis imperdiet. Mauris pellentesque pulvinar
          pellentesque habitant morbi tristique senectus. At erat pellentesque
          adipiscing commodo elit at imperdiet dui accumsan.
        </Text>
      ))}
    </Box>
  );
};
