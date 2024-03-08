import { createStandaloneToast } from '@chakra-ui/react';
import axios, { isAxiosError, type AxiosRequestConfig } from 'axios';
import { theme } from '../theme';

const { toast } = createStandaloneToast({ theme });

export const swrFetcher = async <T = any, D = any>(
  args: AxiosRequestConfig<D>
) => {
  try {
    const res = await axios<T>(args);
    return res.data;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      toast({
        title: error.name,
        description: error.message,
        status: 'error',
        duration: 6000,
        position: 'top-right',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Oops!',
        description: 'Something went wrong. Please try again later.',
        status: 'error',
        duration: 6000,
        position: 'top-right',
        isClosable: true,
      });
    }
    return null;
  }
};
