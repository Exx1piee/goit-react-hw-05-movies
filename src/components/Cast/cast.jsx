import { getCastMovie } from 'servers/movieslib';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './cast.module.css';

export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
export const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        
        if (cast) {
          setCast(cast);
        } else {
          console.log('There is no information about the cast here');
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={css.box}>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li className={css.item} key={id}>
              <img
                className={css.image}
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span>Actor:</span> {original_name}
              </p>
              <p>
                <span className={css.text}>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>We don't have info about cast for the movie.</p>
      )}
    </div>
  );
};

export default Cast;