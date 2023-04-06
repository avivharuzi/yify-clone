export interface PagePath<Params = unknown> {
  static: string;
  dynamic: (params: Params) => string;
}

export type PagePaths = {
  browseMovies: PagePath;
  movieDetails: PagePath<{ movieId: string }>;
};

export const getPagePaths = (): PagePaths => {
  const BROWSE_MOVIES_PATH = '/browse-movies';
  const MOVIE_DETAILS_PATH = '/browse-movies/:movieId';

  return {
    browseMovies: {
      static: BROWSE_MOVIES_PATH,
      dynamic: () => BROWSE_MOVIES_PATH,
    },
    movieDetails: {
      static: MOVIE_DETAILS_PATH,
      dynamic: ({ movieId }) => `${BROWSE_MOVIES_PATH}/${movieId}`,
    },
  };
};
