import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Movies from './components/Movies.jsx'
import Error from './components/Error.jsx';
import Login  from './components/Login.jsx';

import MovieDisplay from './components/MovieDisplay.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LanguageContext from './contexts/LanguageContext';
import { LanguageContextProvider } from './contexts/LanguageContext';
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
  },
  {
 path: '/movie/:movieId',
    element: <MovieDisplay />,
  },
  {
    path: '/login',
    element: <Login/>
  }
]);

const Root = () => {
  const [language,setLanguage] = useState('English');
  return (
    <LanguageContextProvider>
      <RouterProvider router={appRouter} />
    </LanguageContextProvider>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
