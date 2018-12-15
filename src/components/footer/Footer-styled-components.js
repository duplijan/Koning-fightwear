
import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 30px;
  background: linear-gradient(to right, #434343,#000);
`
export const FooterNav = styled.div`
  width:90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`
export const FooterSection = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  text-align: center;
`
export const Header = styled.h3`
  color: #fff;
  font-size: 0.8em;
`
export const FooterNavLink = styled.p`
  padding: 10px;
  font-weight: 300;
  font-size: 0.7em;
  color: #fff;
  cursor: pointer;
  :hover {
    color: #ccc;
  }
`
export const IconGroup = styled.div`
  margin: 10px 0;
`
export const Icon = styled.span`
  color: #fff;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  :hover {
    color: #ccc;
  }
`
