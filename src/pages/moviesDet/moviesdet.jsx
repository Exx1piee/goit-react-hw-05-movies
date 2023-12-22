import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

import css from './moviesdet.module.css';
import { getMovieById } from 'servers/movieslib';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <Link className={css.link} to={backLinkHref}>
        Go back
      </Link>

      <div className={css.box}>
        {
          <img
            src={`${
              movie.poster_path
                ? BASE_POSTER_URL + movie.poster_path
                : PLACEHOLDER + '?text=' + movie.original_title
            }`}
            alt="get"
          />
        }
        <div className={css.textBox}>
          <h2>{movie.original_title}</h2>
          <p>Rating: {Math.round(movie.vote_average)}</p>
          <ul className={css.list}>
            {movie.overview && (
              <li>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </li>
            )}
            <li>
              {movie.genres && movie.genres.length > 0 && (
                <div>
                  <h4>Genres</h4>
                  <ul className={css.listGenres}>
                    {movie.genres?.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={css.linkBox}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink className={css.link} to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
