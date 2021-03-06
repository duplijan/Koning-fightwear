import React, { Fragment } from "react";
import background from "../../assets/images/about.jpg";
import AboutInfo from "./AboutInfo";

import {
  Wrapper,
  Main,
  Card,
  Header,
  SubHeader
} from "../home/Home-styled-components";
import { Content, Text } from "./About-styled-components";

const About = () => {
  return (
    <Fragment>
      <Wrapper style={{ backgroundImage: `url( ${background})` }}>
        <Main>
          <Card>
            <Header>ABOUT US</Header>
            <SubHeader>-the story begins-</SubHeader>
            <Content style={{ textAlign: "justify" }}>
              <Text style={{ color: "#000" }}>
                Nunc nec risus id risus hendrerit sodales ac at eros. Fusce
                maximus venenatis arcu, in imperdiet ex luctus at. Maecenas
                pulvinar, purus in rutrum vulputate, felis odio sollicitudin
                massa, vel finibus erat urna id enim. In dapibus tortor et enim
                pretium ullamcorper.
              </Text>
              <Text style={{ color: "#000" }}>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Nulla facilisi. Suspendisse nunc arcu, facilisis sed enim id,
                rutrum sagittis neque. Etiam ac tellus et libero semper
                euismod...
              </Text>
            </Content>
          </Card>
        </Main>
      </Wrapper>
      <AboutInfo />
    </Fragment>
  );
};

export default About;
