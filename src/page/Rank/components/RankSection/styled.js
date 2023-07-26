import styled from "styled-components";

export const BackContainer = styled.div`
  width: 1280px;
  height: 1664px;
  flex-shrink: 0;
  background: #FFF7ED;
  margin-top: 0px;
  padding-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const ImageTextGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => props.bottomMargin && `margin-bottom: ${props.bottomMargin};`}
`;

export const OrangeTypo = styled.span`
  color: #ff7425;
  font-size: 35px;
`;

export const Typo = styled.div`
  display: ${(props) => props.display || "block"};
  width: ${(props) => props.width || "fit-content"};
  color: #000;
  font-family: Noto Sans KR;
  font-weight: ${(props) => props.weight || 700};
  line-height: normal;
  font-size: ${(props) => props.size || "35px"};
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;
export const MedalImage = styled.img`
  width: 128px;
  height: 183px; 
  object-fit: cover;
  margin-left: 50px;
  margin-right: 50px;
`;

export const ImageText = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 10px;
`;

/*Ranking List*/

export const List = () => {
    return (
        <h1>helloworld</h1>
    );
};