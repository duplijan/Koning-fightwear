import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>

    );
  }
}

export default App;
