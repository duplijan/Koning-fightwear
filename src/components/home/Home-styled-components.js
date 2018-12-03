
import styled from 'styled-components';
import { gradientBackground, fontPrimary } from '../mixins'
import background from '../../assets/mma.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* //overflow: hidden; */
  position: relative;
  /* font-family: 'Montserrat Alternates', sans-serif; */
  ${fontPrimary}
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  opacity: 0.8;
  /* ::after {
    ${gradientBackground};
  } */
`
export const Main = styled.section`
  width: 80%;
  height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Navigation = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
`
export const NavList = styled.div`
  width: 45%;
  display: inline-block;
  height: auto;
  margin-bottom: 10px;
  text-align: right;
`
export const NavItem = styled.a`
  padding: 5px 7px;
  margin: 0 5px;
  cursor: pointer;
  color: #fff;
  :hover {
    border-bottom: 2px solid red;
  }
`
export const NavButton = styled.a`
  color: ${props => props.primary ? '#FFF' : '#CCC'};
  border: ${props => props.primary ? '5px solid red' : '5px solid #CCC'};
  padding: 5px 15px;
  font-size: 0.8em;
  margin: 0 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background: ${props => props.primary ? 'red' : '#CCC'};
    color: #fff;
  }
`
export const Card = styled.div`
  width: 45%;
  height: 90%;
  background-color: white;
  opacity: 0.9;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgb(250,250,250,0.1);
`
export const Header = styled.h1`
  font-size: 3.5em;
  letter-spacing: 5px;
  text-align: center;
  padding: 50px;
`
export const SubHeader = styled.h4`
  font-size: 1.2em;
  letter-spacing: 5px;
  font-weight: 200;
  color: red;
  margin-top: -50px;
  font-weight: light;
  text-align: center;
`
export const StoreButton = styled.span`
  width: 60%;
  height: auto;
  padding: 30px;
  background: red;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgb(0,0,0,0.2);
  margin: 150px auto;
  display: block;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #fff;
    color: red;
  }
`
