import { useState } from 'react';

export const Movie = () => {
  const [query, setQuery] = useState('');

  const eventFrom = e => {
    e.preventDefault();

    setQuery(e.currentTarget.query.value);
  };
  return (
    <form action="#" onSubmit={() => eventFrom}>
      <input name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};
