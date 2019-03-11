// packages
import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// components
import Search from '../screens/search/Search';
import SuggestionList from '../components/SuggestionList';
import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';

// styles
import '../index.css';
import '../screens/search/Search.css';

// the main app view
storiesOf('screens/search/Search', module)
.add('the app', () => (
  <div className="search-wrapper">
    <Search />
  </div> 
));

// the Search Input
storiesOf('components/SearchInput', module)
  .add('empty search input', () => (
    <div className="search-wrapper">
      <form className="search-form">
        <SearchInput query="" />
      </form>
    </div> 
  ))
  .add('with user input', () => (
    <div className="search-wrapper">
      <form className="search-form expand">
        <SearchInput query="c" />
      </form>
    </div> 
  ))
  .add('with event handlers', () => (
    <div className="search-wrapper">
      <form className="search-form">
        <SearchInput 
          onChange={action("search field changed")} 
          onKeyUp={action("trigger debounced API call")} 
        />
      </form>
    </div>  
  ));

// the Suggestion List
storiesOf('components/SuggestionList', module)
  .add('with query.length > 2 that matches the items key values', () => (
    <div className="search-wrapper">
      <SuggestionList query="cal" items={[{searchterm: "calvin klein trui", nrResults: 54}, {searchterm: "calvin klein trui heren rood", nrResults: 40}, {searchterm: "calvin klein trui heren blauw", nrResults: 50}, {searchterm: "calvin klein trui heren oranje", nrResults: 42}]} />
    </div> 
  ))

// the Submit Button
storiesOf('components/SearchButton', module)
  .add('with query.length < 0', () => (
    <div className="search-wrapper">
      <SearchButton query="" />
    </div> 
  ))
  .add('with query.length > 0', () => (
    <div className="search-wrapper">
      <SearchButton query="c" />
    </div> 
  ));

