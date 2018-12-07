import React from 'react'
import { Route, Link } from 'react-router-dom'

import About from '../about/About'
import Home from './Home'

import { Navigation, NavList, NavItem, NavButton} from './Home-styled-components'

const Navbar = ({match}) => {
  return (
    <Navigation>
      <NavList>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/about">
          <NavItem>About</NavItem>
        </Link>

        <NavItem>Store</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
      <NavList style={{width: '50%' }}>
        <NavButton primary>sign up</NavButton>
        <NavButton>login</NavButton>
      </NavList>

      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Navigation>
  )
}

export default Navbar;
