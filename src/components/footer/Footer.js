import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Wrapper, FooterNav, FooterSection, Header, FooterNavLink,IconGroup, Icon } from './Footer-styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <FooterNav>
      <FooterSection>
        <FooterNavLink>store</FooterNavLink>
        <FooterNavLink>privacy policy</FooterNavLink>
        <FooterNavLink>terms & conditions</FooterNavLink>
      </FooterSection>
      <FooterSection>
        <Header>customer service</Header>
        <FooterNavLink>returns</FooterNavLink>
        <FooterNavLink>shipping</FooterNavLink>
        <FooterNavLink>contact us</FooterNavLink>
      </FooterSection>
      <FooterSection>
          <Header>stay connected</Header>
          <IconGroup>
          <Icon><FontAwesomeIcon icon={faFacebook} /></Icon>
          <Icon><FontAwesomeIcon icon={faInstagram} /></Icon>
          <Icon><FontAwesomeIcon icon={faTwitter} /></Icon>
          </IconGroup>
      </FooterSection>
      </FooterNav>
    </Wrapper>
  )
}

export default Footer;
