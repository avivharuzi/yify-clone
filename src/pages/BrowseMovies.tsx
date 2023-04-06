import useSWR from 'swr';

import { MovieCardList } from '../components';
import {
  YIFY_API_MOVIE_LIST_URL,
  YifyApiBaseResponse,
  YifyApiMovieListResponse,
} from '../core';
import { fetcher } from '../utils';

export function Component() {
  const { data: moviesData } = useSWR<
    YifyApiBaseResponse<YifyApiMovieListResponse>
  >(YIFY_API_MOVIE_LIST_URL, fetcher);

  const movies = moviesData?.data?.movies ?? [];

  return <MovieCardList movies={movies} />;
}
