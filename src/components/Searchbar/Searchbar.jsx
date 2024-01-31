import React, { useState } from 'react';

import { useAppContext } from 'components/AppContext/AppContext';

import style from 'components/styles.module.css';

export const Searchbar = () => {
  const { setPage, setImages, setQuery } = useAppContext();
  const [localQuery, setlocalQuery] = useState('');

  const handleChange = event => {
    setlocalQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setPage(1);
    setQuery(localQuery);
    setImages([]);
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={localQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
