import { useEffect, useState } from 'react';
import { FetchInfo } from 'FetchData/FetchData';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchInfo(movieId, 'reviews').then(reviews => {
      if (reviews.results.length >= 20) {
        setReviews(reviews.results.slice(0, 20));
      } else {
        setReviews(reviews.results);
      }
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        reviews.map(review => {
          return (
            <div key={review.author}>
              <h4>Authour: {review.author}</h4>
              <p>{review.content}</p>
            </div>
          );
        })
      ) : (
        <p>We don't have</p>
      )}
    </div>
  );
};
