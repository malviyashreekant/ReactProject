import React, { Component } from 'react';
import './App.css';
import Autocomplete from './AutoComplete.js';
import countries from './countries';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Autocomplete
          suggestions={countries}
        />
      </div>
    );
  }
}
export default App;
