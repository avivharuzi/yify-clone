import { Link } from 'react-router-dom';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

import { getPagePaths, YifyApiMovie } from '../core';

export interface SimilarMoviesProps {
  movies: YifyApiMovie[];
}

export function SimilarMovies({ movies }: SimilarMoviesProps) {
  const pagePaths = getPagePaths();

  return (
    <Box>
      <Typography marginBottom={3} component="h2" variant="h5" fontWeight={500}>
        Similar Movies
      </Typography>
      <Grid spacing={4} container>
        {movies.map((movie) => (
          <Grid key={movie.id} md={2} sm={6} xs={6} item>
            <Card>
              <Link
                style={{
                  all: 'unset',
                }}
                to={pagePaths.movieDetails.dynamic({
                  movieId: movie.id.toString(),
                })}
              >
                <CardActionArea>
                  <img
                    width="100%"
                    alt={movie.title}
                    src={movie.medium_cover_image}
                  />
                  <CardContent>
                    <Typography noWrap>{movie.title}</Typography>
                    <Typography color="grey" noWrap>
                      {movie.year}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
