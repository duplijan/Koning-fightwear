import styled from 'styled-components';

import { Wrapper, Button } from '../home/Home-styled-components'

export const  AboutButton = styled(Button)`
  margin: 10px auto;
`
export const AboutWrapper = styled(Wrapper)`
  width: 100%;
  height: auto;
  background: #000;
  opacity: 0.8;
`
export const Header = styled.h1`
  width: 80%;
  margin: 0 auto;
  font-size: 2.5em;
  letter-spacing: 5px;
  padding: 10px 0;
  text-align: left;
  border-bottom: 5px solid red;
`
 export const Section = styled.div`
   width: 90%;
   height: auto;
   margin: 0 auto;
   opacity: 0.9;
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(to right, #434343,#000);
`
export const Content = styled.div`
  flex: 1;
  padding: 10px;
  text-align: left;
  color: #fff;
`
export const Text = styled.p`
  width: 80%;
  margin: 15px auto;
  font-size: 1.2em;
  letter-spacing: 1.5px;
  padding: 10px 0;
`
export const ImageContainer = styled.div`
  flex: 1;
  margin: 10px auto;
  height: auto;
  opacity: 0.9;
  box-shadow: 0px 10px 15px -6 rgb(0,0,0,0.5);
`
export const Image = styled.img.attrs({
  src: ''
})`
  width: 100%;
  height: 100%;
`
