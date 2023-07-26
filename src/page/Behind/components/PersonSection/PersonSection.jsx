import React, { useState } from 'react';
import {Button, BackContainer, Title, Description, WhiteGround, ImageGroup, WhiteGroundImage, ButtonContainer} from "./styled";

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