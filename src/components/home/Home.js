import React from 'react'
import Footer from '../footer/Footer'
import About from '../about/About'

import { Wrapper, Main, Navigation, NavList,
        NavItem, NavButton, Card, Header, SubHeader,
        StoreButton
} from './Home-styled-components'

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Main>
          <Navigation>
            <NavList>
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Store</NavItem>
              <NavItem>Contact</NavItem>
            </NavList>
            <NavList style={{width: '50%' }}>
              <NavButton primary>sign up</NavButton>
              <NavButton>login</NavButton>
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
      <About />
      <Footer />
    </div>
  )
}

export default Home;
