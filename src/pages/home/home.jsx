import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'servers/movieslib';
import FilmsList from 'components/FilmList/filmlist';
import css from './home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <main className={css.section}>
      <h1 className={css.title}>Trending today</h1>
      <FilmsList movies={movies} />
    </main>
  );
};

export default Home;