import styled from 'styled-components';
import { fontSecondary,fontPrimary } from '../mixins'

import { Wrapper, Button, Header } from '../home/Home-styled-components'

//ADJUSTED COMPONENTS
export const  AboutButton = styled(Button)`
  margin: 10px auto;
`
export const AboutWrapper = styled(Wrapper)`
  background-image: none;
  background: linear-gradient(to right, #434343,#000);
  opacity: 0.8;
`
export const AbouHeader = styled(Header)`
  ${fontPrimary}
  font-size: 1.5em;
  padding: 20px;
  color: #fff
  text-align: left;
`
 //ABOUT-MORE PAGE
 export const Section = styled.div`
   width: 50%;
   height: auto;
   opacity: 0.9;
   padding: 30px;
   float: ${props => props.left ? 'left' : 'right'}
`
export const Content = styled.div`
  padding: 5px;
  ${fontSecondary}
  text-align: justify;
  color: ${props => props.primary ? '#FFF' : '#000'};
`
export const Text = styled.p`
  font-size: 0.8em;
  padding: 5px;
`
export const ImageContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  max-height: 300px;
  opacity: 0.9;
  box-shadow: 0px 5px 15px rgb(250,250,250,0.1);
`
export const Image = styled.img.attrs({
  src: ''
})`
  width: 100%;
  height: 100%;
`
