import styled, { css } from "styled-components";
import heartImg from "../../../../assets/image/main_heart.png";

const commonMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;

const commonFontSize = css`
  font-size: ${(props) => props.size || "50px"};
`;

export const IntroRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${commonMargin}// Reuse the common margin
`;

export const HeartImg = styled.img.attrs({
  src: heartImg,
  alt: "heart",
})`
  width: 620px;
  height: 610px;
  transform: scale(1.09);
`;

export const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${commonMargin}// Reuse the common margin
`;

export const Typo = styled.div`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "fit-content"};
  color: #000;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  ${commonFontSize} // Reuse the common font size
  ${commonMargin}
`;

export const OrangeTypo = styled.span`
  color: #ff7425;
  ${commonFontSize}// Reuse the common font size
`;

export const Button = styled.button`
  display: flex;
  width: 212px;
  height: 64px;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  background: #ff7425;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  ${commonMargin}; // Reuse the common margin
  transition: 0.3s;
  &:hover {
    background: #ea580c;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  height: 100%;
`;

export const InfoIcon = styled.img`
  width: 90px;
  height: 85px;
`;
