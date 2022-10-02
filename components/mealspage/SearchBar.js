import clsx from 'clsx';
import React from 'react';

import classes from './SearchBar.module.scss';

function SearchBar({ searchText, setSearchText, className }) {
  return (
    <input
      placeholder="search meals"
      className={clsx(classes.input, className)}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />

  );
}

export default SearchBar;
