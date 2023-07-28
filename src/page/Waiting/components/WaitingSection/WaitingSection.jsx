import React, { useState }from "react";
import {
  TopBox,
  Typo,
  TypoOrange,
  TypoContainer,
  CategoryBox,
  CategoryButton,
  ContentsBox,
  Contents,
  Image,
  Shadow,
  TypoWhite,
  DonateButton,
  FullBar,
  Bar,
  BottomBox,
} from "./styled";

export const WaitingSection = () => {

const ButtonComponent = () => {
  const [selectedButton, setSelectedButton] = useState('All');

  const handleButtonClick = (category) => {
    setSelectedButton(category);
  };
  return (
    <div>
      <button onClick={() => handleButtonClick("All")}>
        
      </button>
      <button onClick={() => handleButtonClick("두 번째 버튼")}>
        두 번째 버튼
      </button>
    </div>
  );
};
  return (
    <div>
      <TopBox>
        <Typo size="48px">기부하기</Typo>
        <Typo size="20px">서울시에 당신의 따뜻한 마음을 기부해주세요.</Typo>
      </TopBox>

      <TypoContainer>
        <Typo size="48px">
          다음 기부 목록에 <TypoOrange size="48px">투표</TypoOrange>하세요
        </Typo>
      </TypoContainer>

      <CategoryBox>
        <CategoryButton>
          <Typo size="14px" handleButtonClick>All</Typo>
        </CategoryButton>
        <CategoryButton>
          <Typo size="14px">동물</Typo>
        </CategoryButton>
        <CategoryButton>
          <Typo size="14px">재난</Typo>
        </CategoryButton>
        <CategoryButton>
          <Typo size="14px">사회적 약자</Typo>
        </CategoryButton>
        <CategoryButton>
          <Typo size="14px">다문화</Typo>
        </CategoryButton>
      </CategoryBox>

      <div>
        <ContentsBox>
          <Contents>
            <Image src="Waiting1.png" />
            <Shadow align="column">
              <TypoWhite size="24px">
                폭우로 인해 집과 가족을 잃은 이들
              </TypoWhite>
              <TypoWhite size="16px">서울시사회복지센터</TypoWhite>
              <DonateButton>
                <TypoWhite size="14px">투표하기</TypoWhite>
              </DonateButton>
              <TypoWhite size="14px" top="150px">
                달성률 83%
              </TypoWhite>
              <FullBar>
                <Bar width="290px" />
              </FullBar>
              <TypoWhite size="14px" top="15px">
                누적 토큰수 10,209,000/12,300,000개
              </TypoWhite>
            </Shadow>
          </Contents>
          <Contents>
            <Image src="Waiting2.png" />
            <Shadow align="column">
              <TypoWhite size="24px">이 아이가 배부름을 알까요</TypoWhite>
              <TypoWhite size="16px">세이브더칠드런</TypoWhite>
              <DonateButton>
                <TypoWhite size="14px">투표하기</TypoWhite>
              </DonateButton>
              <TypoWhite size="14px" top="150px">
                달성률 52%
              </TypoWhite>
              <FullBar>
                <Bar width="182px" />
              </FullBar>
              <TypoWhite size="14px" top="15px">
                누적 토큰수 6,396,000/12,300,000개
              </TypoWhite>
            </Shadow>
          </Contents>
          <Contents>
            <Image src="Waiting3.png" />
            <Shadow align="column">
              <TypoWhite size="24px">홍수로 집을 잃은 사람들</TypoWhite>
              <TypoWhite size="16px">강서구청</TypoWhite>
              <DonateButton>
                <TypoWhite size="14px">투표하기</TypoWhite>
              </DonateButton>
              <TypoWhite size="14px" top="150px">
                달성률 89%
              </TypoWhite>
              <FullBar>
                <Bar width="311px" />
              </FullBar>
              <TypoWhite size="14px" top="15px">
                누적 토큰수 10,947,000/12,300,000개
              </TypoWhite>
            </Shadow>
          </Contents>
        </ContentsBox>
        <ContentsBox>
          <Contents>
            <Image src="Waiting4.png" />
            <Shadow align="column">
              <TypoWhite size="24px">
                지영이가 다시 뛰어놀 수 있도록 도와주세요
              </TypoWhite>
              <TypoWhite size="16px">굿네이버스</TypoWhite>
              <DonateButton>
                <TypoWhite size="14px">투표하기</TypoWhite>
              </DonateButton>
              <TypoWhite size="14px" top="115px">
                달성률 42%
              </TypoWhite>
              <FullBar>
                <Bar width="147px" />
              </FullBar>
              <TypoWhite size="14px" top="15px">
                누적 토큰수 5,166,000/12,300,000개
              </TypoWhite>
            </Shadow>
          </Contents>
          <Contents>
            <Image src="Waiting5.png" />
            <Shadow align="column">
              <TypoWhite size="24px">강원 산불 피해 모금</TypoWhite>
              <TypoWhite size="16px">한국재난관리협회</TypoWhite>
              <DonateButton>
                <TypoWhite size="14px">투표하기</TypoWhite>
              </DonateButton>
              <TypoWhite size="14px" top="150px">
                달성률 35%
              </TypoWhite>
              <FullBar>
                <Bar width="122px" />
              </FullBar>
              <TypoWhite size="14px" top="15px">
                누적 토큰수 4,305,000/12,300,000개
              </TypoWhite>
            </Shadow>
          </Contents>
          <Contents>
            <Image src="Waiting6.png" />
            <Shadow align="column">
              <TypoWhite size="24px">
                소아암 환자들을 위한 의료비 지원
              </TypoWhite>
              <TypoWhite size="16px">사랑의열매</TypoWhite>
              <DonateButton>
                <TypoWhite size="14px">투표하기</TypoWhite>
              </DonateButton>
              <TypoWhite size="14px" top="150px">
                달성률 21%
              </TypoWhite>
              <FullBar>
                <Bar width="73px" />
              </FullBar>
              <TypoWhite size="14px" top="15px">
                누적 토큰수 2,583,000/12,300,000개
              </TypoWhite>
            </Shadow>
          </Contents>
        </ContentsBox>
      </div>
      <BottomBox/>
    </div>
  );
};
