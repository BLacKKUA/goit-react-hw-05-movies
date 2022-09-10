import { useEffect, useState } from 'react';
import { FetchData } from '../../FetchData/FetchData';
import { Box } from '../Box/Box';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [trandingMovies, settrandingMovies] = useState([]);

  useEffect(() => {
    FetchData().then(item => settrandingMovies(item.results));
  }, []);
  return (
    <>
      <h1>Tranding Today</h1>
      <Box as="aside" display="flex" flexDirection="column">
        {trandingMovies.map(movie => (
          <NavLink key={`${movie.id}`} to={`movie/${movie.id}`}>
            {movie.title ?? movie.name}
          </NavLink>
        ))}
      </Box>
    </>
  );
};
