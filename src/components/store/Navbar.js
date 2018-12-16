import React from 'react'
import { Navigation, NavList, NavItem, StyledLink} from './store-styled-components'

const Navbar = (props) => {
  
  return (
    <Navigation>
      <NavList>
        <StyledLink to='/storeCategory'>
          <NavItem>MENS</NavItem>
        </StyledLink>
        <StyledLink to='/'>
          <NavItem>WOMENS</NavItem>
        </StyledLink>
        <StyledLink to='/'>
          <NavItem>KIDS</NavItem>
        </StyledLink>
        <StyledLink to='/'>
          <NavItem>NO-GI</NavItem>
        </StyledLink>
        <StyledLink to='/'>
          <NavItem>MMA & BOXING</NavItem>
        </StyledLink>
        <StyledLink to='/'>
          <NavItem>CLOTHING</NavItem>
        </StyledLink>
      </NavList>
    </Navigation>
  )
}

export default Navbar;
