import React from 'react'
import Footer from '../footer/Footer'

import { Wrapper, Main, Navigation, NavList,
        NavItem, NavButton, Card, Header, SubHeader,
        Button
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
            <Button>OUR STORE</Button>
            <SubHeader style={{marginTop: '100px', color: '#000'}}>Make a difference</SubHeader>
          </Card>
        </Main>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default Home;
