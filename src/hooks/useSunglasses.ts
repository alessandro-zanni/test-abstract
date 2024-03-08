import useSWR from 'swr';
import { SUNGLASSES_ENDPOINT } from '../utils/constants';
import { swrFetcher } from './swrFetcher';

export const useSunglasses = () =>
  useSWR(SUNGLASSES_ENDPOINT, (url) => swrFetcher({ url, method: 'GET' }));
