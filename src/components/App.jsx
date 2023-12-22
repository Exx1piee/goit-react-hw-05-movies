import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/sharedlayout.jsx';

const Home = lazy(() => import('./../pages/home/home.jsx'));
const MoviesDetails = lazy(() =>
  import('./../pages/moviesDet/moviesdet.jsx')
);
const Movies = lazy(() => import('./../pages/movies/movies.jsx'));
const Cast = lazy(() => import('./Cast/cast.jsx'));
const Reviews = lazy(() => import('./Reviews/reviews.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};