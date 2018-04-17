import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/search";
import Saved from "./components/saved";
import Results from "./components/results";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Results />
        <Saved />
      </div>
    );
  }
}

export default App;
