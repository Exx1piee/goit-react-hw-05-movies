import { getReviewsMovie } from 'servers/movieslib';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        if (setReviews) {
          setReviews(Reviews);
        } else {
          console.log('There are no movie reviews here');
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div className={css.box}>
      {reviews.length === 0 ? (
        <h3 className={css.text}>There are no movie reviews here</h3>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li className={css.item} key={id}>
              <h3 className={css.text}>
                <span>Author:</span> {author}
              </h3>
              <p className={css.text}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;