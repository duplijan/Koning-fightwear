import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const Navigation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  background: black;
  opacity: 0.8;
`;
export const NavigationWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
export const NavList = styled.div`
  flex: 1;
`;
export const ButtonList = styled.div`
  \flex: 1;
  margin-top: 5px;
  text-align: right;
`;
export const NavItem = styled.span`

  font-size: 1.2em;
  padding: 5px 7px;
  margin: 5px 10px;
  color: #fff;
  transition: all 0.2s;
  :hover {
    max-width: 50px
    border-bottom: 3px solid red;
    color: red;
  }
`;
export const NavButton = styled.span`
  color: ${props => (props.primary ? "#FFF" : "#CCC")};
  border: ${props => (props.primary ? "5px solid red" : "5px solid #CCC")};
  padding: 5px 15px;
  font-size: 1em;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background: ${props => (props.primary ? "red" : "#CCC")};
    color: #fff;
  }
`;
