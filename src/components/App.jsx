import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './Home/Home';
import styled from 'styled-components';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Movie } from './Movies/Movies';

export const App = () => {
  const NavItem = styled(NavLink)`
    text-decoration: none;
    margin: 4px;
    color: black;

    &.active {
      color: red;
    }
  `;

  return (
    <>
      <nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movie">Movie</NavItem>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
