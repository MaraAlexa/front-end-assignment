// packages
import React, { Component } from 'react';
import _ from 'lodash';

// styles
import './Search.css';

// components
import SearchInput from '../../components/SearchInput';
import SuggestionList from '../../components/SuggestionList';
import SearchButton from '../../components/SearchButton';
import ClearButton from '../../components/ClearButton';
import getSearchResults from '../../api/search';

class Search extends Component {
  constructor(props) {
    super(props)

    this.search = React.createRef()

    this.state = {
      query: '',
      active: false,
      items: [],
    }

    this.getDebouncedSuggestions = _.debounce(this.getSuggestions, 1000);
  }

  getSuggestions = async () => {
    const response = await getSearchResults(this.state.query);
    this.setState({ items: response });
  }

  handleClearInput = () => {
    this.setState({
      query: '',
      active: false,
      items: [],
    })
    this.search.focus();
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
    if (this.search.value.length > 0 && this.state.active === false) {
      this.setState({
        active: true,
      })
    } else if (this.search.value.length === 0 && this.state.active === true) {
      this.setState({
        active: false,
      })
    }
  }

  handleSubmit = (e) => {
    // prevent reset to keep the value to make it more user friendly
    e.preventDefault();
    console.log('show results ON BUTTON press or enter');
  }

  render() {
    const { query, active, items } = this.state;
    return (
      <form className={`search-form ${active ? 'expand' : ''}`}>
        <SearchInput 
          onChange={this.handleInputChange} 
          onKeyUp={this.getDebouncedSuggestions} 
          refInput={input => this.search = input}
          query={query} 
        />

        {query.length > 2 ? <SuggestionList query={query} items={items} /> : ''}
        
        <SearchButton handleSubmit={this.handleSubmit} query={query}  />
        <ClearButton handleClick={this.handleClearInput} active={active} />
      </form>
    )
  }
}

export default Search;
