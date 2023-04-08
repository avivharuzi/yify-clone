import { Link } from 'react-router-dom';

import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';

import { getPagePaths, YifyApiMovie } from '../core';
import { MovieDownload } from './MovieDownload';

export interface MovieCardItemProps {
  movie: YifyApiMovie;
}

export function MovieCardItem({ movie }: MovieCardItemProps) {
  const pagePaths = getPagePaths();

  return (
    <Card>
      <CardActionArea>
        <Link
          style={{
            all: 'unset',
          }}
          to={pagePaths.movieDetails.dynamic({
            movieId: movie.id.toString(),
          })}
        >
          <img width="100%" alt={movie.title} src={movie.medium_cover_image} />
          <CardContent>
            <Typography
              marginBottom={2}
              variant="body1"
              component="h2"
              fontWeight={500}
            >
              {movie.title}{' '}
              <Typography fontWeight={500} color="grey" component="span">
                ({movie.year})
              </Typography>
            </Typography>
            <Box display="flex" gap={0.5} flexWrap="wrap">
              {movie.genres.map((genre) => (
                <Chip size="small" key={genre} label={genre} />
              ))}
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <MovieDownload torrents={movie.torrents} />
      </CardActions>
    </Card>
  );
}
