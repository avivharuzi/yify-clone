import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Box, Pagination } from '@mui/material';

import { BrowseMoviesForm, MovieCardList } from '../components';
import {
  cleanYifyApiMovieListQueryParams,
  getYifyApiMovieListQueryParamsKeys,
  useYifyApiMovieList,
  YifyApiMovieListQueryParams,
  YifyApiMovieListQueryParamsKeys,
} from '../core';

export function Component() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultQueryParams: Partial<YifyApiMovieListQueryParams> =
    useMemo(() => {
      const qp: Partial<YifyApiMovieListQueryParams> = {};

      const sp = new URLSearchParams(window.location.search);

      for (const key of sp.keys()) {
        const possibleKey = key as YifyApiMovieListQueryParamsKeys;

        if (!getYifyApiMovieListQueryParamsKeys().includes(possibleKey)) {
          searchParams.delete(possibleKey);
          continue;
        }

        const value = sp.get(possibleKey);

        if (!value) {
          continue;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        qp[possibleKey] = value;
      }

      return qp;
    }, []);

  const [queryParams, setQueryParams] = useState<
    Partial<YifyApiMovieListQueryParams>
  >({
    ...defaultQueryParams,
    page: defaultQueryParams.page ? +defaultQueryParams.page : 1,
  });

  const { movies, pageCount } = useYifyApiMovieList(queryParams);

  const pagination = (
    <Pagination
      color="primary"
      size="large"
      count={pageCount}
      page={queryParams.page || 1}
      onChange={(_, page) => {
        setQueryParams((qp) => {
          return {
            ...qp,
            page,
          };
        });

        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
      }}
    />
  );

  const handleBrowseMoviesFormChange = (
    values: Partial<YifyApiMovieListQueryParams>
  ) => {
    setQueryParams((qp) => {
      const updatedQP = {
        ...qp,
        ...values,
        page: 1,
      };

      const cleanedQP = cleanYifyApiMovieListQueryParams(updatedQP);

      setSearchParams(new URLSearchParams(cleanedQP as Record<string, string>));

      return cleanedQP;
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={6}>
      <BrowseMoviesForm
        defaultValues={defaultQueryParams}
        onChange={handleBrowseMoviesFormChange}
      />

      {pagination}

      <MovieCardList movies={movies} />

      {pagination}
    </Box>
  );
}
