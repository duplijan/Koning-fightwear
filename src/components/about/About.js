import React from 'react'
import background from '../../assets/about.jpg'

import { Wrapper, Main, Card, Header, SubHeader,Button} from '../home/Home-styled-components'
import { StyledLink } from '../navbar/navigation-styled-components'
import { Content, Text} from './About-styled-components'

const About = () => {
  return (
    <Wrapper style={{backgroundImage:`url( ${background})`}}>
      <Main>
        <Card>
          <Header>ABOUT US</Header>
          <SubHeader>-the story begins-</SubHeader>
          <Content>
            <Text>
              Nunc nec risus id risus hendrerit sodales ac at eros. Fusce maximus venenatis arcu, in imperdiet ex luctus at. Maecenas pulvinar, purus in rutrum vulputate, felis odio sollicitudin massa, vel finibus erat urna id enim. In dapibus tortor et enim pretium ullamcorper.
            </Text>
            <Text>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Suspendisse nunc arcu, facilisis sed enim id, rutrum sagittis neque. Etiam ac tellus et libero semper euismod...
            </Text>
          </Content>
          <StyledLink to="/about-more">
            <Button style={{marginTop: '30px'}}>READ MORE..</Button>
          </StyledLink>

        </Card>
      </Main>
    </Wrapper>
  )
}

export default About;
