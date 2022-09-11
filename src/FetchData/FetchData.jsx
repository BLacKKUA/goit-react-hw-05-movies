const API_KEY = '29b8896f73834eaedc8383a04ab95123';

export const FetchData = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const FetchInfoAboutMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const FetchInfo = (id, what) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/${what}?api_key=${API_KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
