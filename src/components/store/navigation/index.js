import React from "react";
import {
  Navigation,
  NavList,
  NavItem,
  StyledLink
} from "../store-styled-components";

const Navbar = props => {
  const { url } = props.match;

  return (
    <Navigation>
      <NavList>
        <StyledLink to={`${url}/category/:categoryId`}>
          <NavItem>MENS</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/category/:categoryId`}>
          <NavItem>WOMENS</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/category/:categoryId`}>
          <NavItem>KIDS</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/category/:categoryId`}>
          <NavItem>NO-GI</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/category/:categoryId`}>
          <NavItem>MMA & BOXING</NavItem>
        </StyledLink>
        <StyledLink to={`${url}/category/:categoryId`}>
          <NavItem>CLOTHING</NavItem>
        </StyledLink>
      </NavList>
    </Navigation>
  );
};

export default Navbar;
