import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
]);

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
