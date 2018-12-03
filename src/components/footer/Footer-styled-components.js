
import styled from 'styled-components';
import { gradientBackground, font } from '../mixins'

export const Wrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 30px;
  ${font};
  background: linear-gradient(to right, #434343,#000);
  /* ::after {
    ${gradientBackground};
  } */
`
export const FooterNav = styled.div`
  width:90%;
  height: auto;
  /* position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`
export const FooterSection = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  text-align: left;
`
export const Header = styled.h3`
  color: #fff;
`
export const FooterNavLink = styled.p`
  padding: 10px;
  font-weight: 300;
  font-size: 0.8em;
  color: #fff;
`
export const IconGroup = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
`
export const Icon = styled.span`
  color: #fff;
  margin: 0 15px;
  text-align: center;
  :hover {
    cursor: pointer;
    color: #ccc;
  }
`
