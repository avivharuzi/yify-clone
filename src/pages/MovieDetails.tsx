import { useParams } from 'react-router-dom';

import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Chip, Grid, Rating, Stack, Typography } from '@mui/material';

import {
  BackButton,
  Image,
  MovieCastList,
  MovieDownload,
  SimilarMovies,
  YoutubeTrailer,
} from '../components';
import {
  getImdbTitleUrl,
  useYifyApiMovieDetails,
  useYifyApiMovieSuggestions,
} from '../core';
import { formatNumber } from '../utils';

export function Component() {
  const { movieId } = useParams<{ movieId: string }>();

  const { movieDetails } = useYifyApiMovieDetails(movieId as string);

  const { movieSuggestions } = useYifyApiMovieSuggestions(movieId as string);

  return (
    <>
      {movieDetails && (
        <Box>
          <Box marginBottom={2}>
            <BackButton />
          </Box>
          <Grid marginBottom={4} spacing={4} container>
            <Grid md={3} sm={6} xs={12} item>
              <Stack gap={2}>
                <Image
                  src={movieDetails.large_cover_image}
                  alt={movieDetails.title}
                />
                <MovieDownload isPrimary torrents={movieDetails.torrents} />
              </Stack>
            </Grid>
            <Grid md={6} sm={6} xs={12} item>
              <Typography
                marginBottom={3}
                component="h1"
                variant="h4"
                fontWeight={500}
              >
                {movieDetails.title_long}
              </Typography>
              <Box marginBottom={2} display="flex" alignItems="center" gap={1}>
                <a
                  style={{
                    height: '24px',
                  }}
                  target="_blank"
                  href={getImdbTitleUrl(movieDetails.imdb_code)}
                  rel="noreferrer"
                >
                  <img height="100%" src="/images/imdb.png" alt="IMDB" />
                </a>

                <Rating
                  size="small"
                  name="read-only"
                  value={movieDetails.rating}
                  max={10}
                  readOnly
                />
                <Typography>{movieDetails.rating}/10</Typography>
              </Box>

              <Box marginBottom={4} display="flex" gap={1} flexWrap="wrap">
                {movieDetails.genres.map((genre) => (
                  <Chip key={genre} label={genre} />
                ))}
              </Box>

              <Typography marginBottom={4}>
                {movieDetails.description_full}
              </Typography>

              <Stack marginBottom={4} spacing={2}>
                <Stack direction="row" spacing={1}>
                  <DownloadIcon color="info" />
                  <Typography>
                    {formatNumber(movieDetails.download_count || 0)} Downloads
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <FavoriteIcon color="error" />
                  <Typography>
                    {formatNumber(movieDetails.like_count || 0)} Likes
                  </Typography>
                </Stack>
              </Stack>

              <YoutubeTrailer youtubeId={movieDetails.yt_trailer_code} />
            </Grid>
            <Grid md={3} sm={12} item>
              <MovieCastList cast={movieDetails.cast || []} />
            </Grid>
          </Grid>
          <SimilarMovies movies={movieSuggestions} />
        </Box>
      )}
    </>
  );
}
