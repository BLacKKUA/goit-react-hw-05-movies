import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchInfoAboutMovie } from '../../FetchData/FetchData';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    FetchInfoAboutMovie(movieId).then(setMovie);
  }, [movieId]);
  const NavItem = [
    { href: 'cast', name: 'Cast' },
    { href: 'reviews', name: 'Reviews' },
  ];
  if (!movie) {
    return null;
  }
  return (
    <>
      <div>
        <NavLink to={location.state?.from ?? '/'}>Go to back</NavLink>
        <h1>{movie.name ?? movie.title}</h1>
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt=""
        />
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>
          {movie.genres.map(genre => {
            return genre.name + ' ';
          })}
        </p>
        <h4>Additional information</h4>
        {NavItem.map(button => {
          return (
            <NavLink
              key={`${button.href}`}
              to={`${button.href}`}
              state={location.state?.from ?? '/'}
            >
              {button.name}
            </NavLink>
          );
        })}
        <Outlet />
      </div>
    </>
  );
};
