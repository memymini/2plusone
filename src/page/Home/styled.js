import styled from "styled-components";
import heartImg from "../../assets/image/main_heart.png";

export const Root = styled.div``;

export const HeartImg = styled.img.attrs({
  src: heartImg,
  alt: "heart",
})`
  width: 590px;
  height: auto;
`;
