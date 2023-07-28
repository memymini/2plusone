import React, { useState } from "react";
import { Link , useParams} from "react-router-dom";
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
  const { index } = useParams();
  //카테고리 선택 버튼
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
    console.log("Selected Category:", category);
  };
  //contents 내용
  const [contents, setContents] = useState([
    {
      title: "폭우로 인해 집과 가족을 잃은 이들",
      organization: "서울시사회복지센터",
      image: "Waiting1.png",
      progress: 83,
      barWidth: "290px",
      totalTokens: "10,209,000",
      targetTokens: "12,300,000",
      categories: ["all", "disaster"],
    },
    {
      title: "이 아이가 배부름을 알까요",
      organization: "세이브더 칠드런",
      image: "Waiting2.png",
      progress: 52,
      barWidth: "182px",
      totalTokens: "6,396,000",
      targetTokens: "12,300,000",
      categories: ["all", "weak"],
    },
    {
      title: "홍수로 집을 잃은 사람들",
      organization: "강서구청",
      image: "Waiting3.png",
      progress: 89,
      barWidth: "311px",
      totalTokens: "10,947,000",
      targetTokens: "12,300,000",
      categories: ["all", "disaster"],
    },
    {
      title: "5살 지영이를 도와주세요",
      organization: "굿네이버스",
      image: "Waiting4.png",
      progress: 42,
      barWidth: "147px",
      totalTokens: "5,166,000",
      targetTokens: "12,300,000",
      categories: ["all", "weak"],
    },
    {
      title: "강원 산불 피해 모금",
      organization: "한국재난관리협회",
      image: "Waiting5.png",
      progress: 35,
      barWidth: "122px",
      totalTokens: "4,350,000",
      targetTokens: "12,300,000",
      categories: ["all", "disaster", "environment"],
    },
    {
      title: "소아암 환자들을 위한 의료비 지원",
      organization: "사랑의열매",
      image: "Waiting6.png",
      progress: 21,
      barWidth: "73px",
      totalTokens: "2,583,000",
      targetTokens: "12,300,000",
      categories: ["all", "weak", "medical"],
    },
    // 다른 컨텐츠들도 추가...
  ]);

  return (
    <div>
      <TopBox>
        <Typo size="48px">기부하기</Typo>
        <Typo size="20px">서울시에 당신의 따뜻한 마음을 기부해주세요.</Typo>
      </TopBox>

      <TypoContainer>
        <Typo size="48px">
          다음 기부 목록에 <TypoOrange size="48px">투표</TypoOrange>
          하세요
        </Typo>
      </TypoContainer>

      <CategoryBox>
        <CategoryButton onClick={() => handleButtonClick("all")}>
          <Typo size="14px">All</Typo>
        </CategoryButton>
        <CategoryButton onClick={() => handleButtonClick("animal")}>
          <Typo size="14px">동물</Typo>
        </CategoryButton>
        <CategoryButton onClick={() => handleButtonClick("disaster")}>
          <Typo size="14px">재난</Typo>
        </CategoryButton>
        <CategoryButton onClick={() => handleButtonClick("weak")}>
          <Typo size="14px">사회적 약자</Typo>
        </CategoryButton>
        <CategoryButton onClick={() => handleButtonClick("environment")}>
          <Typo size="14px">환경</Typo>
        </CategoryButton>
        <CategoryButton onClick={() => handleButtonClick("medical")}>
          <Typo size="14px">의료</Typo>
        </CategoryButton>
      </CategoryBox>

      <div>
        <ContentsBox>
          {contents
            .filter(
              (content) =>
                content.categories.includes(selectedButton) ||
                selectedButton === "all"
            )
            .map((content, index) => (
              <Link to={`/WaitingDetail/${index}`} key={index}>
                <Contents key={index}>
                  <Image src={content.image} />
                  <Shadow align="column">
                    <TypoWhite size="24px">{content.title}</TypoWhite>
                    <TypoWhite size="16px">{content.organization}</TypoWhite>
                    <DonateButton>
                      <TypoWhite size="14px">투표하기</TypoWhite>
                    </DonateButton>
                    <TypoWhite size="14px" top="150px">
                      달성률 {content.progress}%
                    </TypoWhite>
                    <FullBar>
                      <Bar width={content.barWidth} />
                    </FullBar>
                    <TypoWhite size="14px" top="15px">
                      누적 토큰수 {content.totalTokens}/{content.targetTokens}개
                    </TypoWhite>
                  </Shadow>
                </Contents>
              </Link>
            ))}
        </ContentsBox>
      </div>
      <BottomBox />
    </div>
  );
};
