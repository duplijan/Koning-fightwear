import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CarouselWrapper from './carousel/CarouselWrapper'

import card1 from '../../assets/images/card1.jpg'
import card2 from '../../assets/images/card2.jpg'
import cardS1 from '../../assets/images/cardS1.jpg'
import cardS2 from '../../assets/images/cardS2.jpg'
import cardS3 from '../../assets/images/cardS3.png'
import cardS4 from '../../assets/images/cardS4.png'
import logo from '../../assets/images/logo-light.png'
import card3 from '../../assets/images/carousel2.jpg'

import { Main } from '../home/Home-styled-components'
import { Wrapper, TopBar, Logo, Cart,  CartText, CardsContaioner, Card, CardText, Header, Section } from './store-styled-components'

import Navbar from './Navbar'
import StoreCategory from './category/StoreCategory'

class StoreHomePage extends Component {
  constructor(props){
    super(props)
  }
  render (){
    return (
      <Wrapper>
        <TopBar>
          <Logo>
            <img src={logo} alt='logo' />
          </Logo>
          <Cart>
            <CartText> your shopping</CartText>
            <FontAwesomeIcon icon={faShoppingCart} />(0)
          </Cart>
        </TopBar>
        <Main style={{padding: 0}}>
          <Navbar />
          <CarouselWrapper />
          <CardsContaioner large>
            <Card large style={{backgroundImage: `url(${card3})`}}>
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
        <Section></Section>
        <StoreCategory />

      </Wrapper>
    )
  }
}

export default StoreHomePage;

// <Router>
//   <Fragment>
//     <Route path="/StoreCategory"
//       render={ props => <StoreCategory {...props} />} />
//   </Fragment>
// </Router>
