import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import styled from 'styled-components';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  const NavItem = styled(Link)`
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
        <Route path="movie" element={<div>Movies</div>} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
