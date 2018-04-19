import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Search from "./components/search";
import Saved from "./components/saved";

const App = () => {
    return (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Search} />
    </div>
  </Router>
    );
  }


export default App;
