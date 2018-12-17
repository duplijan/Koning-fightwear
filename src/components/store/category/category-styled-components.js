import styled from 'styled-components';

import { Header } from '../../home/Home-styled-components'


export const StyledHeader = styled(Header)`
  max-width: 20%;
  margin: 0 auto;
  font-size: 2.5em;
  padding: 10px;
  border-bottom: 5px solid red;
`

export const ProductWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  align-items: center;
  grid-row-gap: 50px;
  grid-column-gap: 10px;

`
export const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
export const ProductImage = styled.div`
  width: 100%;
  height: 400px;
  background: #444;
  box-shadow: 0 5px 15px rgb(0,0,0,0.2);
  border-radius: 6px;
`
export const ProductInfo = styled.p`
  display: block;
  padding: 5px;
`

export const Price = styled.span`
  width: 100%;
  padding: 20px 0;
  font-size: 1.2em;
`

//
// <ProductWrapper>
//   <ProductCard>
//     <ProductImage>
//       <Image />
//     </ProductImage>
//     <ProductInfo>
//
//     </ProductInfo>
//     <Price>
//     </Price>
//   </ProductCard>
// </ProductWrapper>
