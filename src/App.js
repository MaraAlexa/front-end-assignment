// packages
import React, { Component } from 'react';

// screens
import Search from '../src/screens/search/Search';

class App extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <Search />
      </div>
    );
  }
}

export default App;
