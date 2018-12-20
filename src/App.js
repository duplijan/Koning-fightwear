import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import StoreHomePage from "./components/store";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";

class App extends Component {
  state = {
    categories: ["mens", "womens", "kids", "no-gi", "mma&boxing", "clothing"]
  };
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/store-Homepage"
              render={props => (
                <StoreHomePage {...props} categories={this.state.categories} />
              )}
            />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
