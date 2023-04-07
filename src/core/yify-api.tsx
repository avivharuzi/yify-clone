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
  minimum_rating: string;
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
  movies?: YifyApiMovie[];
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

export interface YifyApiSortByOption {
  id: string;
  label: string;
  value: Partial<Pick<YifyApiMovieListQueryParams, 'order_by' | 'sort_by'>>;
}

export interface YifyApiQualityOption {
  id: string;
  label: string;
  value: string;
}

export const YIFY_API_BASE_URL = 'https://yts.mx/api/v2';

export const YIFY_API_MOVIE_LIST_URL = `${YIFY_API_BASE_URL}/list_movies.json`;

export const YIFY_API_MOVIE_DETAILS_URL = `${YIFY_API_BASE_URL}/movie_details.json`;

export const YIFY_API_MOVIE_SUGGESTIONS_URL = `${YIFY_API_BASE_URL}/movie_suggestions.json`;

export const getYifyApiMovieQualities = (): string[] => [
  'All',
  '720p',
  '1080p',
  '2160p',
  '3D',
];

export const getYifyApiMovieGenres = (): string[] => [
  'All',
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'Game-Show',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'News',
  'Reality-TV',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Talk-Show',
  'Thriller',
  'War',
  'Western',
];

export const YIFY_API_MAX_RATING = 9;

export const getYifyApiMovieRatings = (): YifyApiQualityOption[] => {
  const ratings = [
    {
      id: 'rating_all',
      label: 'All',
      value: 'All',
    },
  ];

  for (let i = 0; i < YIFY_API_MAX_RATING; i++) {
    const rating = Math.abs(i - YIFY_API_MAX_RATING).toString();

    ratings.push({
      id: `rating_${rating}`,
      label: `${rating}+`,
      value: rating,
    });
  }

  return ratings;
};

export const getYifySortByOptions = (): YifyApiSortByOption[] => [
  {
    id: 'date_added',
    label: 'Date Added',
    value: {
      order_by: 'desc',
      sort_by: 'date_added',
    },
  },
  {
    id: 'date_added_oldest',
    label: 'Date Added (Oldest First)',
    value: {
      order_by: 'asc',
      sort_by: 'date_added',
    },
  },
  {
    id: 'title',
    label: 'Year',
    value: {
      order_by: 'desc',
      sort_by: 'year',
    },
  },
  {
    id: 'title_oldest',
    label: 'Year (Oldest First)',
    value: {
      order_by: 'asc',
      sort_by: 'year',
    },
  },
  {
    id: 'rating',
    label: 'Rating',
    value: {
      order_by: 'desc',
      sort_by: 'rating',
    },
  },
  {
    id: 'rating_lowest',
    label: 'Rating (Lowest First)',
    value: {
      order_by: 'asc',
      sort_by: 'rating',
    },
  },
  {
    id: 'likes',
    label: 'Likes',
    value: {
      order_by: 'desc',
      sort_by: 'like_count',
    },
  },
  {
    id: 'likes_lowest',
    label: 'Likes (Lowest First)',
    value: {
      order_by: 'asc',
      sort_by: 'like_count',
    },
  },
  {
    id: 'alphabetical',
    label: 'Alphabetical',
    value: {
      order_by: 'asc',
      sort_by: 'title',
    },
  },
  {
    id: 'alphabetical_z',
    label: 'Alphabetical (Z-A)',
    value: {
      order_by: 'desc',
      sort_by: 'title',
    },
  },
  {
    id: 'download_count',
    label: 'Download Count',
    value: {
      order_by: 'desc',
      sort_by: 'download_count',
    },
  },
  {
    id: 'download_count_lowest',
    label: 'Download Count (Lowest First)',
    value: {
      order_by: 'asc',
      sort_by: 'download_count',
    },
  },
  {
    id: 'peers',
    label: 'Peers',
    value: {
      order_by: 'desc',
      sort_by: 'peers',
    },
  },
  {
    id: 'peers_lowest',
    label: 'Peers (Lowest First)',
    value: {
      order_by: 'asc',
      sort_by: 'peers',
    },
  },
  {
    id: 'seeds',
    label: 'Seeds',
    value: {
      order_by: 'desc',
      sort_by: 'seeds',
    },
  },
  {
    id: 'seeds_lowest',
    label: 'Seeds (Lowest First)',
    value: {
      order_by: 'asc',
      sort_by: 'seeds',
    },
  },
];

export const getYifyApiTrackers = (): string[] => [
  'udp://open.demonii.com:1337/announce',
  'udp://tracker.openbittorrent.com:80',
  'udp://tracker.coppersurfer.tk:6969',
  'udp://glotorrents.pw:6969/announce',
  'udp://tracker.opentrackr.org:1337/announce',
  'udp://torrent.gresille.org:80/announce',
  'udp://p4p.arenabg.com:1337',
  'udp://tracker.leechers-paradise.org:6969',
];

export const getYifyApiMagnetUrl = ({
  hash,
  url,
}: YifyApiMovieTorrent): string => {
  const encodedUrl = encodeURIComponent(url);
  const trackers = getYifyApiTrackers()
    .map((tracker) => `&tr=${encodeURIComponent(tracker)}`)
    .join('');

  return `magnet:?xt=urn:btih:${hash}&dn=${encodedUrl}${trackers}`;
};
