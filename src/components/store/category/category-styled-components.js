import styled from "styled-components";

import { Header } from "../../home/Home-styled-components";

export const StyledHeader = styled(Header)`
  max-width: 20%;
  margin: 0 auto;
  font-size: 2.5em;
  padding: 10px;
  border-bottom: 5px solid red;
`;
export const ProductWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  align-items: center;
  grid-row-gap: 50px;
  grid-column-gap: 10px;
`;
