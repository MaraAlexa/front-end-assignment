// packages
import React from 'react';
import PropTypes from 'prop-types';

// components
import SuggestionListItem from './SuggestionListItem';

const SuggestionList = ({ query, items }) => {
  let highlightedItem, highlightedNrResults; 
  return (
    <ul className="suggestions" id="items">
      {
        items.map((object, index) => {
        let keywordIndex = object.searchterm.indexOf(query);
        
        if (keywordIndex > -1){
          highlightedItem = [
            (<span key={index} className="highlight">
              {object.searchterm.substring(keywordIndex, keywordIndex + query.length)}
            </span>),
            object.searchterm.substring(keywordIndex + query.length)
          ];
          highlightedNrResults = 
            (<span key={index} className="highlight">
              ({object.nrResults})
            </span>);
        }
          return <SuggestionListItem key={object.searchterm} name={highlightedItem} results={highlightedNrResults} className="suggestions-list" />
        })
      }
    </ul>
  );
};

SuggestionList.propTypes = {
  query: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default SuggestionList;