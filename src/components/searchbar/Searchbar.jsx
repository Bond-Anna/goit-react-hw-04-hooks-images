import { useState } from 'react';
import css from './searchbar.module.css';
export const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleOnChange = e => {
    setName(e.currentTarget.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      return;
    }
    onSubmit(name);
  };

  return (
    <header className={css.Searchbar} onSubmit={handleOnSubmit}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={handleOnChange}
        />
      </form>
    </header>
  );
};
