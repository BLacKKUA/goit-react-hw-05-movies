import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { searchMovie } from '../../FetchData/FetchData';

export const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [MovieItems, setMovieItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (
      searchParams.get('query') !== '' &&
      searchParams.get('query') !== null
    ) {
      searchMovie(searchParams.get('query')).then(movies =>
        setMovieItems(movies.results)
      );
    } else {
      setMovieItems([]);
    }
  }, [searchParams]);
  const eventFrom = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.query.value.trim() });
    e.currentTarget.query.value = '';
  };

  return (
    <>
      <form action="#" onSubmit={eventFrom}>
        <input name="query" type="text" />
        <button type="submit">Search</button>
      </form>
      {MovieItems.length !== 0
        ? MovieItems.map(movie => {
            return (
              <NavLink
                key={`${movie.id}`}
                to={`${movie.id}`}
                state={{ from: `${location.pathname + location.search}` }}
              >
                {movie.original_title}
              </NavLink>
            );
          })
        : ''}
    </>
  );
};
