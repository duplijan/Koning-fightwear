import styled from 'styled-components';
import { gradientBackground, fontSecondary } from '../mixins'
import background from '../../assets/about.jpg'

export const Content = styled.div`
  font-size: 0.9em;
  padding: 5px;
  padding: 20px 50px;
  ${fontSecondary}
  text-align: justify;
`
export const Text = styled.p`
  font-size: 0.8em;
  padding: 5px;
`
