export interface YifyApiBaseResponse<T> {
  status: string;
  status_message: string;
  data: T;
  '@meta': YifyApiBaseResponseMeta;
}

export interface YifyApiBaseResponseMeta {
  server_time: number;
  server_timezone: string;
  api_version: number;
  execution_time: string;
}

export interface YifyApiMovieListQueryParams {
  limit: number;
  page: number;
  quality: string;
  minimum_rating: number;
  query_term: string;
  genre: string;
  sort_by: string;
  order_by: string;
}

export interface YifyApiMovieDetailsQueryParams {
  movie_id: string;
  with_images: boolean;
  with_cast: boolean;
}

export interface YifyApiMovieSuggestionsQueryParams {
  movie_id: string;
}

export interface YifyApiMovieListResponse {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: YifyApiMovie[];
}

export interface YifyApiMovieDetailsResponse {
  movie: YifyApiMovieDetails;
}

export interface YifyApiMovieSuggestionsResponse {
  movie_count: number;
  movies: YifyApiMovie[];
}

export interface YifyApiMovie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: YifyApiMovieTorrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface YifyApiMovieDetails {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  download_count: number;
  like_count: number;
  description_intro: string;
  description_full: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
  cast: YifyApiMovieCastPerson[];
  torrents: YifyApiMovieTorrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface YifyApiMovieCastPerson {
  name: string;
  character_name: string;
  url_small_image: string;
  imdb_code: string;
}

export interface YifyApiMovieTorrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export const YIFY_API_BASE_URL = 'https://yts.mx/api/v2';

export const YIFY_API_MOVIE_LIST_URL = `${YIFY_API_BASE_URL}/list_movies.json`;

export const YIFY_API_MOVIE_DETAILS_URL = `${YIFY_API_BASE_URL}/movie_details.json`;

export const YIFY_API_MOVIE_SUGGESTIONS_URL = `${YIFY_API_BASE_URL}/movie_suggestions.json`;
