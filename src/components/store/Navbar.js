import React from 'react'
import { Navigation, NavList, NavItem, StyledLink} from './store-styled-components'

const Navbar = (props) => {
  const { url} = props.match;
  console.log(props)

  return (
    <Navigation>
      <NavList>
        <StyledLink to={`${url}/mens`}>
          <NavItem>MENS</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/womens`}>
          <NavItem>WOMENS</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/kids`}>
          <NavItem>KIDS</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/no-gi`}>
          <NavItem>NO-GI</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/mma&boxing`}>
          <NavItem>MMA & BOXING</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/clothing`}>
          <NavItem>CLOTHING</NavItem>
        </StyledLink>
      </NavList>
    </Navigation>
  )
}

export default Navbar;
