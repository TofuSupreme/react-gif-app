import React from 'react';

const SearchBar = (props) => {
  const { searchGiphy} = props;
  const handleChange = (event) => {
    searchGiphy(event.currentTarget.value);
  }
  return (
    <input type="text" className="form-search form-control" onChange={handleChange} placeholder="Search for a gif" />);
};

export default SearchBar;
