import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { getPagePaths } from './core';
import { RootLayout } from './layouts';

const pagePaths = getPagePaths();

const NavigateToBrowseMovies = () => (
  <Navigate to={pagePaths.browseMovies.static} replace />
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <NavigateToBrowseMovies />,
      },
      {
        path: pagePaths.browseMovies.static,
        lazy: () => import('./pages/BrowseMovies'),
      },
      {
        path: pagePaths.movieDetails.static,
        lazy: () => import('./pages/MovieDetails'),
      },
      {
        path: '*',
        element: <NavigateToBrowseMovies />,
      },
    ],
  },
]);

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
