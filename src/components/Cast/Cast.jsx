import { FetchInfo } from '../../FetchData/FetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchInfo(movieId, 'credits').then(cast => {
      if (cast.cast.length >= 20) {
        setCredits(cast.cast.slice(0, 20));
      } else {
        setCredits(cast.cast);
      }
    });
  }, [movieId]);
  return (
    <div>
      {credits.length !== 0 ? (
        credits.map(actors => {
          return (
            <div key={actors.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${actors.profile_path}`}
                alt={actors.name}
              />
              <p>{actors.name}</p>
              <p>Character: {actors.character}</p>
            </div>
          );
        })
      ) : (
        <p>We don't have :(</p>
      )}
    </div>
  );
};
