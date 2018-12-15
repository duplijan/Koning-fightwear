import React from 'react'
import { Wrapper, Main, Card, Header, SubHeader,Button} from './Home-styled-components'
import { StyledLink } from '../navbar/navigation-styled-components'

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Main>
          <Card>
            <Header>KONING</Header>
            <SubHeader>-fightwear-</SubHeader>
            <StyledLink to="/store">
              <Button>OUR STORE</Button>
            </StyledLink>
            <SubHeader style={{marginTop: '100px', color: '#000'}}>Make a difference</SubHeader>
          </Card>
        </Main>
      </Wrapper>
    </div>
  )
}

export default Home;
