import React, { Fragment } from 'react'

import {Content, Text, Header, Section, AboutWrapper, ImageContainer, Image} from './About-styled-components'
//AboutButton
import bjj from '../../assets/about-bjj.jpg'
import mma from '../../assets/about-mma.jpg'

const  About2 = () => {
  return (
    <Fragment>
      <AboutWrapper>
        <Section>
          <ImageContainer>
            <Image src={`${mma}`} />
          </ImageContainer>
          <Content>
            <Header>MMA and Boxing</Header>
            <Text>
            In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.
            </Text>
            <Text>
            In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.
            </Text>
          </Content>
        </Section>
        <Section>
          <Content>
            <Header>Brazilian Jiu Jitsu</Header>
            <Text>In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.</Text>
            <Text>
              In ac aliquet dolor, a malesuada mi. In ut consequat odio. Sed eget turpis sit amet est fermentum placerat a eu lacus. Nunc tempus, elit at convallis cursus, justo mi faucibus erat, ac fermentum tortor nulla sit amet sapien.
            </Text>
          </Content>
          <ImageContainer>
            <Image src={`${bjj}`} />
          </ImageContainer>
        </Section>
      </AboutWrapper>
    </Fragment>
  )
}

export default About2;
