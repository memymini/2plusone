import styled from "styled-components";

export const Root = styled.div``;

export const BackContainer = styled.div`
  width: 1280px;
  height: 181px;
  flex-shrink: 0;
  background: #F0F0F0;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 54px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 10px;
`;


export const Description = styled.p`
  font-size: 20px;
  color: #666666;
  margin-top: 10px;
`;

/*밑에부터는 그림 페이지*/

export const WhiteGround = styled.div`
  width: 1280px;
  height: 900px;
  flex-shrink: 0;
  background: #FFFFFF;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px; 
`;

export const WhiteGroundImage = styled.img`
  width: 300px;
  height: 300px; 
  object-fit: cover;
  border-radius: 13%;
  margin: 50px;
  border: 3px solid #000000; 
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 20px;
  background-color: ${({ isActive }) => (isActive ? '#000000' : '#FFFFFF')};
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#000000')};
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;