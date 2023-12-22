import { useLocation, Link } from 'react-router-dom';
import css from './filmlist.module.css';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title }) => (
        <li key={id} className={css.item}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;