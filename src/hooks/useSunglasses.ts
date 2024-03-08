import useSWR from 'swr';
import { type Sunglass } from '../models';
import { SUNGLASSES_ENDPOINT } from '../utils/constants';
import { swrFetcher } from './swrFetcher';

export const useSunglasses = () =>
  useSWR(SUNGLASSES_ENDPOINT, (url) =>
    swrFetcher<Sunglass[]>({ url, method: 'GET' })
  );
