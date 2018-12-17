import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import StoreCategory from './category/StoreCategory'
import HomePage from './homePage'

class StoreHomePage extends Component {
  render (){
    const {url} = this.props.match;
    return (
      <Fragment>
          <Navbar {...this.props}/>
          <StoreCategory />

          <Router>
            <Switch>
              <Route exact path={url} component={ HomePage} />
              <Route path={`${url}/m`} render={(props) =>  <StoreCategory {...props}/>} />
            </Switch>
          </Router>
      </Fragment>
    )
  }
}

export default StoreHomePage;

// <Route path="/womens" render={()=>  <h2>WOMENS</h2>} />
// <Route path="/kids" render={()=> <h2>KIDS</h2>} />
// <Route path="/no-gi" render={ ()=><h2>NO-GI</h2>} />
// <Route path="/mma&boxing" render={ ()=><h2>MMA & BOXING</h2>} />
// <Route path="/clothing" render={ ({})=><h2>CLOTHING</h2>} />
