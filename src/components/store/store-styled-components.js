import styled from 'styled-components';
import carousel3 from '../../assets/about-bjj.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #eee;
  opacity: 0.8;
`
export const CenterContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`
///TOP NAVBAR< BUTTONS< SHOPPING CART ICON
export const TopBar = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background: linear-gradient(to right, #434343,#000);
`
export const Logo = styled.img.attrs({
  src: ''
})`
  width: 20%;
  height: 20%;
`
// export const Logo = styled.span`
//   width: 50%;
//   text-align: left;
//   display: inline-block;
//   padding: 20px;
//   color: #fff;
// `

export const TopBarButtons = styled.div`
    display: inline-block;
    width: 50%;
    text-align: right;
`
export const ShopCart = styled.div `
  color: #fff;
  font-size: 1.2em;
  display: inline-block;
  margin-left: 5px;
`

//MAIN NAVBAR AND NAVIGATION
export const Navigation = styled.div`
  width: 100%;
  height: auto;
  margin: 50px 0;
`
export const NavList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgb(0,0,0,0.1)
`
export const NavItem = styled.span`
  padding: 10px;
  flex: 1;
  color: #333333;
  cursor: pointer;
  background: #ccc;
  transition: all 0.2s;
  :hover {
    transform: translateY(-8%);
    box-shadow: 0 1px  10px rgb(0,0,0,0.2);
    color: red;
  }
`
//CAROUSEL
export const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 50px 0;
`
export const CarouselItem = styled.div`
  width: 100%;
  max-height: 600px;
  margin: 0 auto;
`
export const CarouselImage = styled.img.attrs({
  src: ''
})`
  width: 100%;
  height: 80%
  position: relative;
`
export const CarouselText = styled.span`
  color: white;
  font-size: 2em;
  position: absolute;
  left: 20%;
  width: 100%;
  z-index: 3;
`
//FAVOURITE CATEGORIES CARDS
export const CardsContaioner = styled.div`
  width: 100%;
  height: auto;
  margin: ${props => props.large ? '50px 0 20px 0' : '10px 0 '};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Card = styled.div`
  flex: 1;
  height: ${props => props.large ? '300px' : '200px'};
  box-shadow: 0 2px 10px rgb(0,0,0,0.2);
  margin: 5px;
  cursor: pointer;
  background-image: '';
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
  /*SELECT CARD TEXT*/
  &:hover > * {
    transform: translateY(0);
  }
`
export const CardText = styled.p`
  width: 100%;
  padding: 10px;
  font-size: ${props => props.small ? '1em' : '1.5em'}
  background: rgb(0,0,0,0.5);
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  transition: all 0.2s;
`
export const Header = styled.h3`
  width: 100%;
  text-align: left;
  color: #333333;
  padding: 20px 0 0 0;
`
