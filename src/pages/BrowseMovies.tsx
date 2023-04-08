import { useState } from 'react';

import { Box, Pagination } from '@mui/material';

import { BrowseMoviesForm, MovieCardList } from '../components';
import { useYifyApiMovieList, YifyApiMovieListQueryParams } from '../core';

export function Component() {
  const [queryParams, setQueryParams] = useState<
    Partial<YifyApiMovieListQueryParams>
  >({
    page: 1,
  });

  const { movies, pageCount } = useYifyApiMovieList(queryParams);

  const pagination = (
    <Pagination
      color="primary"
      size="large"
      count={pageCount}
      page={queryParams.page || 1}
      onChange={(_, page) =>
        setQueryParams((qp) => {
          return {
            ...qp,
            page,
          };
        })
      }
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

      Object.entries(updatedQP).forEach(([key, value]) => {
        if (value === '') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          delete updatedQP[key];
        } else if (value === 'All') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          delete updatedQP[key];
        }
      });

      return updatedQP;
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={6}>
      <BrowseMoviesForm onChange={handleBrowseMoviesFormChange} />

      {pagination}

      <MovieCardList movies={movies} />

      {pagination}
    </Box>
  );
}
