import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./navigation";
import StoreCategory from "./category/StoreCategory";
import HomePage from "./homePage";
import Banner from "./homePage/Banner";

class StoreHomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { url } = this.props.match;
    return (
      <Fragment>
        <Banner />
        <Navbar {...this.props} />
        <Router>
          <Switch>
            <Route exact path={url} component={HomePage} />
            <Route
              path={`${url}/category-:name`}
              render={props => (
                <StoreCategory {...props} categories={this.props.categories} />
              )}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default StoreHomePage;

// <Route path="/womens" render={()=>  <h2>WOMENS</h2>} />
// <Route path="/kids" render={()=> <h2>KIDS</h2>} />
// <Route path="/no-gi" render={ ()=><h2>NO-GI</h2>} />
// <Route path="/mma&boxing" render={ ()=><h2>MMA & BOXING</h2>} />
// <Route path="/clothing" render={ ({})=><h2>CLOTHING</h2>} />
