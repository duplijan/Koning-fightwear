
import React from 'react'
import { Main, Navigation, NavList,
        NavItem, NavButton } from '../home/Home-styled-components'
import {Content, Text, Section, AboutButton,AboutWrapper, AbouHeader, ImageContainer, Image} from './About-styled-components'

import bjj from '../../assets/about-bjj.jpg'
import mma from '../../assets/about-mma.jpg'

console.log()
const AboutMore = () => {
  return (
    <AboutWrapper>
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
        <Section left>
          <ImageContainer>
            <Image src={`${mma}`} />
          </ImageContainer>
          <AbouHeader>MMA and Boxing</AbouHeader>
          <Content primary>
            <Text>
            In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.
            </Text>
            <Text>
            In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.
            </Text>
          </Content>
          <AboutButton>Find the perfect fit for you</AboutButton>
        </Section>
        <Section>
          <AbouHeader>Brazilian Jiu Jitsu</AbouHeader>
          <Content primary>
            <Text>In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.</Text>
            <Text>
              In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.
            </Text>
          </Content>
          <AboutButton>Get the best equipment</AboutButton>
          <ImageContainer>
            <Image src={`${bjj}`} />
          </ImageContainer>
        </Section>
      </Main>
    </AboutWrapper>
  )
}
export default AboutMore;
