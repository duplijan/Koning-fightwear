import React from 'react'
import Footer from '../footer/Footer'
import Navbar from './Navigation'

import { Wrapper, Main, Navigation, NavList,
        NavItem, NavButton, Card, Header, SubHeader,
        Button
} from './Home-styled-components'

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Main>
          <Navbar />
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
