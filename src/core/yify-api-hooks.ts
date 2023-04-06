import useSWR from 'swr';

import { addQueryParams, fetcher } from '../utils';
import {
  YIFY_API_MOVIE_DETAILS_URL,
  YIFY_API_MOVIE_LIST_URL,
  YIFY_API_MOVIE_SUGGESTIONS_URL,
  YifyApiBaseResponse,
  YifyApiMovie,
  YifyApiMovieDetails,
  YifyApiMovieDetailsQueryParams,
  YifyApiMovieDetailsResponse,
  YifyApiMovieListQueryParams,
  YifyApiMovieListResponse,
  YifyApiMovieSuggestionsQueryParams,
  YifyApiMovieSuggestionsResponse,
} from './yify-api';

export const useYifyApiMovieList = (
  queryParams: Partial<YifyApiMovieListQueryParams>
) => {
  const url = addQueryParams(YIFY_API_MOVIE_LIST_URL, queryParams);

  const { data } = useSWR<YifyApiBaseResponse<YifyApiMovieListResponse>>(
    url,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  let movies: YifyApiMovie[];
  let pageCount: number;

  if (data) {
    const moviesData = data.data;
    movies = moviesData.movies;
    pageCount = Math.ceil(moviesData.movie_count / moviesData.limit);
  } else {
    movies = [];
    pageCount = 1;
  }

  return {
    movies,
    pageCount,
  };
};

export const useYifyApiMovieDetails = (movieId: string) => {
  const url = addQueryParams<Partial<YifyApiMovieDetailsQueryParams>>(
    YIFY_API_MOVIE_DETAILS_URL,
    {
      movie_id: movieId,
      with_images: true,
      with_cast: true,
    }
  );

  const { data } = useSWR<YifyApiBaseResponse<YifyApiMovieDetailsResponse>>(
    url,
    fetcher
  );

  let movieDetails: YifyApiMovieDetails | null;

  if (data) {
    movieDetails = data.data.movie;
  } else {
    movieDetails = null;
  }

  return {
    movieDetails,
  };
};

export const useYifyApiMovieSuggestions = (movieId: string) => {
  const movieSuggestionsUrl = addQueryParams<
    Partial<YifyApiMovieSuggestionsQueryParams>
  >(YIFY_API_MOVIE_SUGGESTIONS_URL, {
    movie_id: movieId,
  });

  const { data } = useSWR<YifyApiBaseResponse<YifyApiMovieSuggestionsResponse>>(
    movieSuggestionsUrl,
    fetcher
  );

  let movieSuggestions: YifyApiMovie[];

  if (data) {
    movieSuggestions = data.data.movies;
  } else {
    movieSuggestions = [];
  }

  return {
    movieSuggestions,
  };
};
