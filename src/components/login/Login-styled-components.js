import styled from 'styled-components';
import background from '../../assets/login.jpg'

import { Wrapper, Header, Button } from '../home/Home-styled-components'
import { Input } from '../contact/Contact-styled-components'

export const Wrapp = styled(Wrapper)`
  background-image: url(${background});
  background-size: contain;
  background-position: center
`
export const LoginHeader = styled(Header)`
  color: #fff;
  padding: 10px;
  border-bottom: ${props => props.underline ? '5px solid red' : 'none'}
`
export const LoginForm = styled.form`
  width: 60%;
  padding: 50px 30px;
  position: relative;
  margin: 0 auto;
  border: 5px solid red;
  border-radius: 10px;
  background: rgb(0,0,0,0.5);
`
export const LoginInput= styled(Input)`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 3px solid red;
  border-radius: 3px;
`
export const LoginButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
`
export const InputGroup = styled.div`
  width: 80%;
  margin: 0 auto;
`
export const ChechBox = styled.input`
  display: inline-block;
  margin: 10px 0;
`
export const Label = styled.label`
  color: #fff;
  margin: 10px;
`
export const Group = styled.div`
  width: 80%;
  position: relative;
  margin: 0 auto;
`
export const HelpButton = styled.p`
  font-weight: 200;
  color: #ccc;
  opacity: 0.5;
  font-size: 0.8em;
  padding: 5px;
  display: inline-block;
  width: 50%;
  cursor: pointer;
  text-align: ${props => props.left ? 'left' : 'right'};
  :hover {
    opacity: 1;
  }
`
