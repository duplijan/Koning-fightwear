import styled from "styled-components";

export const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 400px;
  background: #444;
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.2);
  border-radius: 6px;
`;
export const ProductInfo = styled.p`
  display: block;
  padding: 5px;
`;

export const Price = styled.span`
  width: 100%;
  padding: 20px 0;
  font-size: 1.2em;
`;
