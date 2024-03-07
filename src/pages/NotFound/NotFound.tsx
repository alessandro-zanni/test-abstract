import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

export const NotFound: FC = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <Center minH="100vh">
      <Box textAlign="center">
        <Image
          src="/images/error.svg"
          alt="Dan Abramov"
          display="inline-block"
          mb={6}
        />
        <Heading as="h1" size="3xl" mb={4}>
          Whoops!
        </Heading>
        <Heading as="h2" size="xl" fontWeight="normal" mb={8}>
          Something went wrong
        </Heading>
        <Text fontWeight="medium">
          Error: {error.statusText || error.message}
        </Text>
      </Box>
    </Center>
  );
};
