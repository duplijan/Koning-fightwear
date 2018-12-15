import React from 'react'
import { Navigation, NavigationWrapper, NavList, ButtonList, NavItem, NavButton, StyledLink} from './navigation-styled-components'

const Navbar = ({match}) => {
  return (
    <Navigation>
      <NavigationWrapper>
        <NavList>
          <StyledLink to="/">
            <NavItem>Home</NavItem>
          </StyledLink>
          <StyledLink to="/about">
            <NavItem>About</NavItem>
          </StyledLink>
          <StyledLink to="/store">
            <NavItem>Store</NavItem>
          </StyledLink>
          <StyledLink to="/contact">
            <NavItem>Contact</NavItem>
          </StyledLink>
        </NavList>

        <ButtonList>
          <StyledLink to="/sign up">
            <NavButton primary>sign up</NavButton>
          </StyledLink>
          <StyledLink to="/login">
            <NavButton>login</NavButton>
          </StyledLink>
        </ButtonList>

      </NavigationWrapper>
    </Navigation>
  )
}

export default Navbar;
