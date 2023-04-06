import { Link } from 'react-router-dom';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';

import { getPagePaths, YifyApiMovie } from '../core';

export interface MovieCardItemProps {
  movie: YifyApiMovie;
}

export function MovieCardItem({ movie }: MovieCardItemProps) {
  const pagePaths = getPagePaths();

  return (
    <Link
      style={{
        all: 'unset',
      }}
      to={pagePaths.movieDetails.dynamic({
        movieId: movie.id.toString(),
      })}
    >
      <Card>
        <CardActionArea>
          <img width="100%" alt={movie.title} src={movie.medium_cover_image} />
          <CardContent>
            <Typography
              marginBottom={2}
              variant="body1"
              component="h2"
              fontWeight={500}
            >
              {movie.title}{' '}
              <Typography fontWeight={500} color="gray" component="span">
                ({movie.year})
              </Typography>
            </Typography>
            <Box onClick={(e) => e.stopPropagation()} display="flex" gap={1}>
              {movie.torrents.map((torrent) => {
                return (
                  <Chip
                    key={torrent.hash}
                    label={torrent.quality}
                    component="a"
                    href={torrent.url}
                    target="_blank"
                    clickable
                  />
                );
              })}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
