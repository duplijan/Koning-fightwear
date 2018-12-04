import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import './App.css';

import About from './components/about/About'
import AboutMore from './components/about/AboutMore'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <AboutMore />
        <Contact />
        <Login />
      </div>
    );
  }
}

export default App;
