import styled, { css } from "styled-components";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom ||
      "0px"} ${props.left || "0px"}`};
`;

const commonFontSize = css`
  font-size: ${(props) => props.size || "50px"};
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 181px;
  flex-shrink: 0;
  background-color: #f0f0f0;
  &:hover {
    background: rgba(108, 106, 106, 0.2);
  }
`;

export const Typo = styled.span`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "fit-content"};
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  ${commonFontSize} // Reuse the common font size
  ${customMargin}
  `;

export const TypoOrange = styled.span`
  color: #ff7425;
`;

export const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 181px;
  flex-shrink: 0;
`;

export const CategoryBox = styled.div`
  display: flex;
  width: 100vw;
  height: 38px;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  padding-left: 80px;
  padding-right: 80px;
`;

export const CategoryButton = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: rgba(220, 220, 220, 0.2);
  &:hover {
    background: rgba(108, 106, 106, 0.2);
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;
  flex-shrink: 0;
  padding-top: 70px;
  padding-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: center;
  flexdiraction: row;
  gap: 50px;
`;

export const Contents = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 24px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 24px;
`;

export const Shadow = styled.button`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  background-color: rgba(92, 91, 91, 0.6);
  border-radius: 25px;
  position: absolute;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const TypoWhite = styled.span`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "fit-content"};
  color: #fff;
  text-align: left;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  ${commonFontSize} // Reuse the common font size
  ${customMargin}
`;

export const DonateButton = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #ff7425;
  &:hover {
    background: #d55711;
  }
  margin-top: 25px;
  justify-content: ${(props) => props.justify || "flex-start"};
`;

export const FullBar = styled.div`
  position: relative;
  display: flex;
  width: 350px;
  height: 10.919px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
  margin-top: 15px;
`;

export const Bar = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: ${(props) => props.width || "350px"};
  height: 10.919px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ff7425;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 181px;
  flex-shrink: 0;
  background-color: #fff;
`;