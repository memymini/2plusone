import React, { useState } from 'react';
import styled from "styled-components";

export const Root = styled.div``;

const BackContainer = styled.div`
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

const Title = styled.h2`
  font-size: 54px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 10px;
`;


const Description = styled.p`
  font-size: 20px;
  color: #666666;
  margin-top: 10px;
`;

export const Back = () => {
  return (
    <BackContainer>
      <Title>기부 비하인드</Title>
      <Description>
        여러분들의 성원아래 많은 분들이 다시 일어설 수 있었습니다
      </Description>
    </BackContainer>
  );
};

/*밑에부터는 그림 페이지*/

const WhiteGround = styled.div`
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

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px; 
`;

const WhiteGroundImage = styled.img`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
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

export const BottomBack = () => {
  const [currentGroup, setCurrentGroup] = useState('group1');

  const handleButtonClick = (group) => {
    setCurrentGroup(group);
  };
    return(
    <WhiteGround>
      {/*위 그룹*/}
      {currentGroup === 'group1' &&(
      <>
        <ImageGroup>
        <WhiteGroundImage src="/PangPang1.png"/>
        <WhiteGroundImage src="/PangPang2.png"/>
        <WhiteGroundImage src="/PangPang3.png"/>
      </ImageGroup>
      <ImageGroup>
        <WhiteGroundImage src="/PangPang4.png"/>
        <WhiteGroundImage src="/PangPang5.png"/>
        <WhiteGroundImage src="/PangPang6.png"/>
      </ImageGroup>
      </>
      )}

      {currentGroup === 'group2' &&(
      <>
        <ImageGroup>
        <WhiteGroundImage src="/OKJJI1.png"/>
        <WhiteGroundImage src="/OKJJI2.jpg"/>
        <WhiteGroundImage src="/OKJJI3.png"/>
      </ImageGroup>
      <ImageGroup>
        <WhiteGroundImage src="/OKJJI4.png"/>
        <WhiteGroundImage src="/OKJJI5.png"/>
        <WhiteGroundImage src="/OKJJI6.png"/>
      </ImageGroup>
      </>
      )}
    
    {currentGroup === 'group3' &&(
      <>
        <ImageGroup>
        <WhiteGroundImage src="/JJANG1.png"/>
        <WhiteGroundImage src="/JJANG2.png"/>
        <WhiteGroundImage src="/JJANG3.png"/>
      </ImageGroup>
      <ImageGroup>
        <WhiteGroundImage src="/JJANG4.png"/>
        <WhiteGroundImage src="/JJANG5.JPG"/>
        <WhiteGroundImage src="/JJANG6.JPG"/>
      </ImageGroup>
      </>
      )}

      <ButtonContainer>
        <Button
          isActive={currentGroup === 'group1'}
          onClick={() => handleButtonClick('group1')}
        >1</Button>
        <Button
          isActive={currentGroup === 'group2'}
          onClick={() => handleButtonClick('group2')}
        >2</Button>
        <Button
          isActive={currentGroup === 'group3'}
          onClick={() => handleButtonClick('group3')}
        >3</Button>
      </ButtonContainer>
    </WhiteGround>
    );
};
