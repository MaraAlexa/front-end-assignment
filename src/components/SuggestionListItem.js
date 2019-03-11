// packages
import React from 'react';
import PropTypes from 'prop-types';

const SuggestionListItem = ({ name, results }) => {
  return (
    <li className="suggestions-list"> {name} {results} </li>
  );
};

SuggestionListItem.propTypes = {
  name: PropTypes.array.isRequired,
  results: PropTypes.object.isRequired
};

export default SuggestionListItem;