export const FetchData = () => {
  const API_KEY = '29b8896f73834eaedc8383a04ab95123';

  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
