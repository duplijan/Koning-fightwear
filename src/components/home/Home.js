import React from 'react'
import styled from 'styled-components';
import background from '../../assets/mma.jpg'

const Home = () => {
  return (
    <Wrapper>
      <Main>
        <Navigation>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Store</NavItem>
            <NavItem>Contact</NavItem>
          </NavList>
        </Navigation>
        <Card>
          <Header>KONING</Header>
          <SubHeader>-fightwear-</SubHeader>
          <StoreButton>OUR STORE</StoreButton>
          <SubHeader style={{marginTop: '-130px', color: '#000'}}>Make a difference</SubHeader>
        </Card>
      </Main>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: 'Montserrat Alternates', sans-serif;
  background: linear-gradient(to right, #434343,#000);
  opacity: 0.8;
  ::after  {
    content: "";
    background-image: url(${background});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 100%;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`
const Main = styled.section`
  width: 70%;
  height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Navigation = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
`
const NavList = styled.div`
  width: 45%;
  height: auto;
  margin-bottom: 10px;
  text-align: right;
`

const NavItem = styled.a`
  padding: 5px 7px;
  margin: 0 5px;
  cursor: pointer;
  color: #fff;
  :hover {
    border-bottom: 2px solid red;
  }
`
const Card = styled.div`
  width: 45%;
  height: 90%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgb(0,0,0,0.1);
`
const Header = styled.h1`
  font-size: 3.5em;
  letter-spacing: 5px;
  text-align: center;
  padding: 50px;
`

const SubHeader = styled.h4`
  font-size: 1.2em;
  letter-spacing: 5px;
  font-weight: 200;
  color: red;
  margin-top: -50px;
  font-weight: light;
  text-align: center;
`
const StoreButton = styled.span`
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
