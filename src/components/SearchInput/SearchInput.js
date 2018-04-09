// @flow
import React from 'react';
import SearchIcon from 'react-icons/lib/md/search';

import './SearchInput.css';

type Props = {
  onChange: () => void,
};

const SearchInput = ({ onChange }: Props) => (
  <div className="search">
    <input type="text" placeholder="Search cars.." onChange={onChange} />
    <SearchIcon className="search-icon" />
  </div>
);

export default SearchInput;
