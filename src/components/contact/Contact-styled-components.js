
import styled from 'styled-components';
import background from '../../assets/images/contact-bg.jpg'
import { Wrapper, Header } from '../home/Home-styled-components'

export const Wrapp = styled(Wrapper)`
  background-image: url(${background});
  background-size: contain;
`
export const FormGroup = styled.div`
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
`
export const Center = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`
export const ContactHeader = styled(Header)`
  color: #fff;
  font-size: 2em;
  padding: 10px;
  text-align: left;
  border-bottom: ${props => props.underline ? '5px solid red' : 'none'}
`
export const ContactForm = styled.form`

  padding: 50px 30px;
  position: relative;
  border: 5px solid red;
  border-radius: 10px;
  background: rgb(0,0,0,0.5);
`
export const Input= styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 25px 0;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 3px solid red;
  border-radius: 3px;
`
export const LoginInput= styled(Input)`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 25px 0;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 3px solid red;
  border-radius: 3px;
  &::-webkit-input-placeholder {
    font-size: 1em;
    color: #fff;
}
`


export const TextArea= styled.input`
  width: 80%;
  padding:10px;
  margin-top: 50px;
  color: #fff;
  background: none;
  border: none;
  border-bottom: 3px solid red;
  border-radius: 3px;
`
export const IconGroup = styled.div`
  margin: 20px 0;
  text-align: center;
`
export const Icon = styled.span`
  color: #fff;
  text-align: center;
  margin: 10px;
  font-size: 1.5em;
  cursor: pointer;
  :hover {
    color: #ccc;
  }
`
