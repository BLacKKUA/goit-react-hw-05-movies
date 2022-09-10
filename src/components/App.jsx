import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>}>
            <Route path=":movieId" element={<div>TEST</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
// Layout
// // Home --- top15 movies
// // Movies -> Movie/:id -> cast -> reviews
// // Movies --- search
// key ad24807293275bef83ede161311e71e0
