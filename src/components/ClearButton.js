// packages
import React from 'react';
import PropTypes from 'prop-types';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes)

const ClearButton = ({ handleClick, active }) => {
  return (
    <button
      className={`empty-form ${active ? 'show-clear-button' : ''}`}
      aria-label="annuleren"
      type="button"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon="times" className="times-icon" />
    </button>
  );
};

ClearButton.propTypes = {
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ClearButton;