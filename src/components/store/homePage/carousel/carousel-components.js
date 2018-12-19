import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 50px 0;
`;
export const CarouselItem = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
`;
export const CarouselImage = styled.img.attrs({
  src: ""
})`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const CarouselText = styled.span`
  color: white;
  font-size: 2em;
  position: absolute;
  left: 20%;
  width: 100%;
  z-index: 3;
`;
export const CarouselButton = styled.div`
  padding: 0 20px;
  color: #fff;
  font-size: 3em;
  cursor: pointer;
  transform: rotate(${props => (props.rotate ? "90deg" : "-90deg")});
  transition: font-size 0.2s;
  : hover {
    font-size: 3.2em;
    color: #ccc;
  }
`;
