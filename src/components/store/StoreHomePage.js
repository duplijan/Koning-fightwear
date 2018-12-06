import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import background from '../../assets/mma.jpg'
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/about-bjj.jpg'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import cardS1 from '../../assets/cardS1.jpg'
import cardS2 from '../../assets/cardS2.jpg'
import cardS3 from '../../assets/cardS3.png'
import cardS4 from '../../assets/cardS4.png'
import logo from '../../assets/logo-light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Main,NavButton } from '../home/Home-styled-components'

import { Wrapper, TopBar, Logo, CenterContainer, TopBarButtons, ShopCart, Navigation, NavList,
        NavItem, CarouselContainer,CarouselItem, CarouselImage, CarouselText,
        CardsContaioner, Card, CardText,
        Header
} from './store-styled-components'

class StoreHomePage extends Component {
  constructor(){
    super()
  }

  render (){
    return (
      <Wrapper>
        <TopBar>
          <CenterContainer>
            <Logo>
              <img src={logo} alt='logo' />
            </Logo>

            <TopBarButtons>
              <NavButton primary>sign up</NavButton>
              <NavButton>login</NavButton>
              <ShopCart><FontAwesomeIcon icon={faShoppingCart} />(0)</ShopCart>
            </TopBarButtons>
          </CenterContainer>
        </TopBar>
        <Main style={{padding: 0}}>
          <Navigation>
            <NavList>
              <NavItem>MENS</NavItem>
              <NavItem>WOMENS</NavItem>
              <NavItem>KIDS</NavItem>
              <NavItem>NO-GI</NavItem>
              <NavItem>MMA & BOXING</NavItem>
              <NavItem>CLOTHING</NavItem>
            </NavList>
          </Navigation>
          <CarouselContainer>
            <Carousel>
              <CarouselItem>
                <CarouselText>STAY FOCUS </CarouselText>
                <CarouselImage src={`${carousel2}`} />
              </CarouselItem>
              <CarouselItem>
                <CarouselText>STAY FOCUS </CarouselText>
                <CarouselImage src={`${carousel1}`} />

              </CarouselItem>
              <CarouselItem>
                <CarouselText>STAY FOCUS </CarouselText>
                <CarouselImage src={`${carousel3}`} />
              </CarouselItem>
            </Carousel>
          </CarouselContainer>
          <CardsContaioner large>
            <Card large style={{backgroundImage: `url(${carousel2})`}}>
              <CardText top>BJJ</CardText>
            </Card>
            <Card large style={{backgroundImage: `url(${card1})`}}>
              <CardText top>MMA/Boxing</CardText>
            </Card>
            <Card large style={{backgroundImage: `url(${card2})`}}>
              <CardText top>Clothing</CardText>
            </Card>
          </CardsContaioner>
          <Header>comming soon..</Header>
          <CardsContaioner>
            <Card style={{backgroundImage: `url(${cardS1})`}}>
              <CardText small> Boxing gloves</CardText>
            </Card>
            <Card style={{backgroundImage: `url(${cardS2})`}}>
              <CardText small> T-shirts/Hoodies</CardText>
            </Card>
            <Card style={{backgroundImage: `url(${cardS3})`}}>
              <CardText small>MMA gloves </CardText>
            </Card>
            <Card style={{backgroundImage: `url(${cardS4})`}}>
              <CardText small>BJJ tape</CardText>
            </Card>
          </CardsContaioner>
        </Main>

      </Wrapper>
    )
  }
}

export default StoreHomePage;
