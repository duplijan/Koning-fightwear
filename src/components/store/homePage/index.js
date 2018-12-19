import React from "react";

import card1 from "../../../assets/images/card1.jpg";
import card2 from "../../../assets/images/card2.jpg";
import cardS1 from "../../../assets/images/cardS1.jpg";
import cardS2 from "../../../assets/images/cardS2.jpg";
import cardS3 from "../../../assets/images/cardS3.png";
import cardS4 from "../../../assets/images/cardS4.png";
import card3 from "../../../assets/images/carousel2.jpg";

import CarouselWrapper from "./carousel/CarouselWrapper";
import { Main } from "../../home/Home-styled-components";
import {
  Wrapper,
  CardsContaioner,
  Card,
  CardText,
  Header,
  Section
} from "../store-styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <Main style={{ padding: 0 }}>
        <CarouselWrapper />
        <CardsContaioner large>
          <Card large style={{ backgroundImage: `url(${card3})` }}>
            <CardText top>BJJ</CardText>
          </Card>
          <Card large style={{ backgroundImage: `url(${card1})` }}>
            <CardText top>MMA/Boxing</CardText>
          </Card>
          <Card large style={{ backgroundImage: `url(${card2})` }}>
            <CardText top>Clothing</CardText>
          </Card>
        </CardsContaioner>
        <Header>comming soon..</Header>
        <CardsContaioner>
          <Card style={{ backgroundImage: `url(${cardS1})` }}>
            <CardText small> Boxing gloves</CardText>
          </Card>
          <Card style={{ backgroundImage: `url(${cardS2})` }}>
            <CardText small> T-shirts/Hoodies</CardText>
          </Card>
          <Card style={{ backgroundImage: `url(${cardS3})` }}>
            <CardText small>MMA gloves </CardText>
          </Card>
          <Card style={{ backgroundImage: `url(${cardS4})` }}>
            <CardText small>BJJ tape</CardText>
          </Card>
        </CardsContaioner>
      </Main>
    </Wrapper>
  );
};

export default HomePage;
