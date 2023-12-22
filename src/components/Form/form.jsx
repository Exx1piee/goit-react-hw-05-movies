import { useState } from 'react';

import css from './form.module.css';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={css.input}
          type="text"
          placeholder="Name movie"
          autoFocus
          value={query}
          onChange={handleSearchParams}
        />
      </label>
      <button className={css.button} type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};

export default Form;