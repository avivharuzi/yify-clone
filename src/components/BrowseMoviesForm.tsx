import { ChangeEvent, useRef } from 'react';

import { Box, Grid, MenuItem, TextField } from '@mui/material';
import { useFormik } from 'formik';

import {
  getYifyApiMovieGenres,
  getYifyApiMovieQualities,
  getYifyApiMovieRatings,
  getYifySortByOptions,
  YifyApiMovieListQueryParams,
} from '../core';

export interface BrowseMoviesFormProps {
  defaultValues?: Partial<YifyApiMovieListQueryParams>;
  onChange: (values: Partial<YifyApiMovieListQueryParams>) => void;
}

const BROWSE_MOVIES_FORM_DEBOUNCE_TIMEOUT = 300;

export const BrowseMoviesForm = ({
  defaultValues = {},
  onChange,
}: BrowseMoviesFormProps) => {
  const sortByOptionId = getYifySortByOptions().find((option) => {
    return (
      option.value.sort_by === defaultValues?.sort_by &&
      option.value.order_by === defaultValues?.order_by
    );
  });

  const formik = useFormik({
    initialValues: {
      query_term: defaultValues?.query_term || '',
      quality: defaultValues?.quality || 'All',
      genre: defaultValues?.genre || 'All',
      minimum_rating: defaultValues?.minimum_rating || 'All',
      sortByOptionId: sortByOptionId?.id || 'date_added',
    },
    onSubmit: () => {
      return;
    },
  });

  const debounceTimeoutRef = useRef<number | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    formik.handleChange(e);

    const { name, value } = e.target;

    let updatedValue: Partial<YifyApiMovieListQueryParams> = {
      [name]: value,
    };

    if (name === 'sortByOptionId') {
      const sortByOption = getYifySortByOptions().find(
        (option) => option.id === value
      );

      if (sortByOption) {
        updatedValue = {
          ...sortByOption.value,
        };
      }
    }

    const values = {
      ...formik.values,
      ...updatedValue,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete values.sortByOptionId;

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      onChange(values);
    }, BROWSE_MOVIES_FORM_DEBOUNCE_TIMEOUT);
  };

  return (
    <Box width="100%">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{
            mb: 2,
          }}
          fullWidth
          label="Search"
          type="search"
          variant="filled"
          name="query_term"
          value={formik.values.query_term}
          onChange={handleChange}
        />

        <Grid container spacing={4}>
          <Grid item lg={3} xs={12}>
            <TextField
              select
              fullWidth
              label="Quality"
              variant="filled"
              name="quality"
              value={formik.values.quality}
              onChange={handleChange}
            >
              {getYifyApiMovieQualities().map((quality) => (
                <MenuItem key={quality} value={quality}>
                  {quality}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={3} xs={12}>
            <TextField
              select
              fullWidth
              label="Genre"
              variant="filled"
              name="genre"
              value={formik.values.genre}
              onChange={handleChange}
            >
              {getYifyApiMovieGenres().map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={3} xs={12}>
            <TextField
              select
              fullWidth
              label="Rating"
              variant="filled"
              name="minimum_rating"
              value={formik.values.minimum_rating}
              onChange={handleChange}
            >
              {getYifyApiMovieRatings().map((rating) => (
                <MenuItem key={rating.id} value={rating.value}>
                  {rating.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={3} xs={12}>
            <TextField
              select
              fullWidth
              label="Order By"
              variant="filled"
              name="sortByOptionId"
              value={formik.values.sortByOptionId}
              onChange={handleChange}
            >
              {getYifySortByOptions().map((sortByOption) => (
                <MenuItem key={sortByOption.id} value={sortByOption.id}>
                  {sortByOption.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
