import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

//COMPONENTS
import About from './components/about/About'
import AboutMore from './components/about/AboutMore'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/login/Login'
import StoreHomePage from './components/store/StoreHomePage'
import Navigation from './components/home/Navigation'


// <About />
// <AboutMore />
// <Contact />
// <Login />
// <StoreHomePage />

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <hr />


        </div>

      </Router>
    );
  }
}

export default App;
