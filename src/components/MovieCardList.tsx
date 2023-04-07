import { Grid } from '@mui/material';

import { YifyApiMovie } from '../core';
import { MovieCardItem } from './MovieCardItem';

export interface MovieCardListProps {
  movies: YifyApiMovie[];
}

export function MovieCardList({ movies }: MovieCardListProps) {
  return (
    <Grid spacing={4} container>
      {movies.map((movie) => (
        <Grid
          lg={3}
          xs={6}
          key={`${movie.id}_${movie.date_uploaded_unix}`}
          item
        >
          <MovieCardItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
