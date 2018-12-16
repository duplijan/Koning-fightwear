
import styled from 'styled-components'
import background from '../../assets/images/mma.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: ${props => props.center ? '50% 30%' : 'left center' };
  opacity: 0.8;
`
export const Main = styled.section`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  padding: 200px 20px;
`
export const Card = styled.div`
  width:50%;
  height: 600px;
  background-color: white;
  opacity: 0.9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px 0 rgb(0,0,0,1);
`
export const Header = styled.h1`
  font-size: 3.5em;
  letter-spacing: 5px;
  text-align: center;
  padding: 50px;
`
export const SubHeader = styled.h4`
  font-size: 1.2em;
  letter-spacing: 5px;
  font-weight: 200;
  color: red;
  margin-top: -50px;
  font-weight: light;
  text-align: center;
`
export const Button = styled.span`
  width: 60%;
  padding: 30px;
  background: red;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgb(0,0,0,0.2);
  margin: 20px auto;
  display: block;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #eee;
    color: red;
    font-weight: bold;
  }
`
