import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import SuggestionList from '../src/components/SuggestionList';
import SuggestionListItem from '../src/components/SuggestionListItem';
import Search from '../src/screens/search/Search';
import ClearButton from '../src/components/ClearButton';
import SearchInput from './components/SearchInput';

it('renders whole app without crashing', () => {
  shallow(<App />);
});

describe('the searching results', () => {

  it('verifies number of results', () => {

    const query = 'cal';

    // give the exact values expected as props after typing cal
    const items = [
      {searchterm: "calvin klein trui", nrResults: 54},
      {searchterm: "calvin klein trui heren rood", nrResults: 40}, 
      {searchterm: "calvin klein trui heren blauw", nrResults: 50}, 
      {searchterm: "calvin klein trui heren oranje", nrResults: 42}
    ];

    // test full comp including child components
    const suggestionListComponent = mount(<SuggestionList query={query} items={items} />);

    // Check what is wrong 
    // console.log(suggestionListComponent.debug());

    // Expect the wrapper object to be defined
    expect(suggestionListComponent.find('ul.suggestions')).toBeDefined();

    // Expect to render exacly 4 list items
    expect(suggestionListComponent.find(SuggestionListItem).length).toBe(4);

  });
});

describe('Clear Button functionality', () => {

  it('should verify that the clear button resets the query state', () => {
    
    // set a query value
    const query = 'cal';

    const searchComponent = mount(<Search />);

    searchComponent.setState({ query: query });

    // simulate the click on ClearButton
    searchComponent.find(ClearButton).simulate('click');
    // expect the query state to be an empty string
    expect(searchComponent.find(SearchInput).props().query).toBe('');
  });

});




