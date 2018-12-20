
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dropdown from "./dropdown";
import Product from "../product-list";
import ProductDetail from "../product-detail";

import { Main } from "../../home/Home-styled-components";
import { Wrapper } from "../store-styled-components";
import { Select, SelectText, DropdownMenu } from "./dropdown/styled-components";
import { StyledHeader, ProductWrapper } from "./category-styled-components";

const StoreCategory = props => {
  const { name } = props.match.params;
  const { url } = props.match;
  return (
    <Wrapper>
      <Main>
        <StyledHeader>{name}</StyledHeader>
        <Select>
          <SelectText>sort by:</SelectText>
          <DropdownMenu>
            <Dropdown />
          </DropdownMenu>
        </Select>
        <ProductWrapper>
          <Product {...props} />
        </ProductWrapper>
      </Main>
      <Switch>
        <Router>
          <Route
            path={`${url}/:id`}
            render={props => <ProductDetail {...props} />}
          />
        </Router>
      </Switch>
    </Wrapper>
  );
};

import React, { Component} from 'react';

import Dropdown from './dropdown'

import { Main } from '../../home/Home-styled-components'
import { Wrapper,  Section } from '../store-styled-components';
import { Select, SelectText, DropdownMenu } from './dropdown/styled-components';
import { StyledHeader, ProductWrapper, ProductCard, ProductImage, ProductInfo, Price} from './category-styled-components';

class StoreCategory extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Wrapper>
        <Main>
          <StyledHeader>MENS</StyledHeader>
          <Select>
            <SelectText>sort by:</SelectText>
            <DropdownMenu>
              <Dropdown />
            </DropdownMenu>
          </Select>
          <ProductWrapper>
            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>

            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>

            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>

            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>

            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>

            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>
            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>
            <ProductCard>
              <ProductImage>
              </ProductImage>
              <ProductInfo>
                basic 2.0 - grey
              </ProductInfo>
              <Price>£79.95</Price>
            </ProductCard>

          </ProductWrapper>
        </Main>
      </Wrapper>
    )
  }
}

export default StoreCategory;
