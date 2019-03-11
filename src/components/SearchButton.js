// packages
import React from 'react';
import PropTypes from 'prop-types';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch)

const SearchButton = ({ handleSubmit, query }) => {
  return (
    <button
      className={`form-submit ${query.length > 0 ? 'pink' : ''}`}
      aria-label="zoeken"
      type="submit"
      onClick={handleSubmit}
    >
      <FontAwesomeIcon icon="search" className="search-icon" />
    </button>
  );
};

SearchButton.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchButton;