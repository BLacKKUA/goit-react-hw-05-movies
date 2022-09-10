import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchInfoAboutMovie } from '../../FetchData/FetchData';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    FetchInfoAboutMovie(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);
  if (!movie) {
    return null;
  }
  return (
    <>
      <div>
        <h1>{movie.name ?? movie.title}</h1>
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt=""
        />
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>
          {/* {movie.genres.map(genre => {
            return genre;
          })} */}
        </p>
      </div>
    </>
  );
};
