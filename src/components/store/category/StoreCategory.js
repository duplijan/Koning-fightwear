import React, { Component, Fragment} from 'react';

import { Main, Header } from '../../home/Home-styled-components'
import { Wrapper,  Section } from '../store-styled-components';

class StoreCategory extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Wrapper>
        <Main>
          <Header>MENS</Header>
        </Main>
      </Wrapper>
    )
  }
}

export default StoreCategory;
