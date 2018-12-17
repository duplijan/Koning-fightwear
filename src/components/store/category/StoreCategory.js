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
          {/*
            <ProductWrapper>
              <ProductCard>
                <ProductImage>
                  <Image />
                </ProductImage>
                <ProductInfo>

                </ProductInfo>
                <Price>
                </Price>
              </ProductCard>
            </ProductWrapper>

            */}
        </Main>
      </Wrapper>
    )
  }
}

export default StoreCategory;
