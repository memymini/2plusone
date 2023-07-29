import styled, { css } from "styled-components";
import 'semantic-ui-css/semantic.min.css'

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom ||
      "0px"} ${props.left || "0px"}`};
`;

const fontWeight = css`
  font-weight: ${(props) => props.fontWeight || "600"};
`;

export const Root = styled.div``;

export const BackContainer = styled.div`
  width: 100%;
  height: 2000px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100vw;
  height: 180px;
  flex-shrink: 0;
  margin-left:60px;
`;

export const Typo = styled.div`
  display: flex;
  color: ${(props) => props.color || "black"};
  font-family: Inter;
  font-size: ${(props) => props.size || "15px"};
  font-style: normal;
  ${fontWeight}
  line-height: 129.73%
  letter-spacing: -0.8px;
  ${customMargin};
  justify-content: left;
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: grid;
  grid-template-columns: 1000px 1fr;
  background-color: transparent;
    `;

export const GridItem = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 680px;
  height: 450px;
`;

export const BigImage = styled.img`
  width: 680px;
  height: 450px;
  border-radius: 12px;
`;

export const VoteContainer = styled.div`
  display: flex;
  width: 364px;
  height: 670px;
  padding-bottom: 0px;
  align-items: flex-start;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 5px 16px -3px rgba(0, 0, 0, 0.2);
`;

export const TextContainer = styled.div`
        align-items: flex-start;
        gap: 20px;
        display: flex;
        width: 648px;
        height: auto;
        flex-direction: column;
        flex-shrink: 0;
        margin-top: 40px;
x
       `;

export const ButtonContainer = styled.div`
  display: flex;
  width: 760px;
  flex-direction: row;
  align-items: center;
  gap:0px;
  margin-top:50px;
  margin-bottom:10px;
  background-color: transparent;
  justify-content: space-between;
  width: 65%;

`;


export const VoteCoinButton = styled.button`
        display: flex;
        width: 315.7px;
        min-height: 48px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 12px;
        background: linear-gradient(180deg, #F9DB74 0%, #F3BC51 100%);
        padding: '10px 20px'
        ${customMargin};
       `;

export const VoteAcoountButton = styled.button`
         display: flex;
         width: 315.7px;
         min-height: 48px;
         justify-content: center;
         align-items: center;
         flex-shrink: 0;
         border-radius: 12px;
         background: linear-gradient(180deg, #FDB933 0%, #F99A32 100%);
         padding: '10px 20px'
         ${customMargin};
       `;



       export const TextGroup = styled.div`
       display: flex;
       width: 648px;
       padding-bottom: 0px;
       flex-direction: column;
       align-items: flex-start;
       gap: -1px;
       `;
       
       export const Blank = styled.div`
       width: 100px;
       height: 15px;
       flex-shrink: 0;
       background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
       `;
       
       
       export const More = styled.div`
       color: #333;
       text-align: center;
       font-family: Inter;
       font-size: 15px;
       font-style: normal;
       font-weight: 400;
       line-height: 0px;
       text-decoration-line: underline;
       margin-top:0;
       &::before {
           content: "더보기";
           display: block; 
         }
        
       `;

export const Line = styled.div`

width: 648px;
height: 1px;
flex-shrink: 0;
border-top: 1px solid #C8C8C8;
margin-top: 20px;
margin-bottom: 0px;

`;

export const CommentContainer = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
    `;

    export const Line2 = styled.div`
    display: flex;
    width: 648px;
    height: 1px;
    flex-shrink: 0;
    border-top: 1px solid #C8C8C8;
    margin-top: 0px;
    margin-bottom: 0px;
    flex-direction: column;
    align-items: center;
    `;