import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Movies from './components/Movies.jsx'
import Error from './components/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AllMovies from './components/AllMovies';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/movies/:movieCategory',
    element: <Movies />
  },
  {
    path: '/movies',
    element: <AllMovies />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
