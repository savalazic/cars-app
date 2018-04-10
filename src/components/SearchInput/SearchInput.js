// @flow
import React from 'react';
import SearchIcon from 'react-icons/lib/md/search';

import Input from '../../ui-components/Input';

import './SearchInput.css';

type Props = {
  onChange: () => void,
};

const SearchInput = ({ onChange }: Props) => (
  <div className="search">
    <Input type="text" placeholder="Search cars.." onChange={onChange} />
    <SearchIcon className="search-icon" />
  </div>
);

export default SearchInput;
