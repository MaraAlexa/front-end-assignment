// packages
import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onChange, onKeyUp, refInput, query }) => {
  return (
    <input
      type="search"
      aria-label="zoeken"
      aria-required
      className="form-control"
      value={query}
      placeholder="Zoeken"
      ref={refInput}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};
  
SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  refInput: PropTypes.func.isRequired,
}

export default SearchInput;