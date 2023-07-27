import { IntroSection } from "./components";
import { TypoContainer } from "./components/IntroSection/styled";
import { Root } from "./styled";

export const Home = () => {
  return (
    <Root>
      <IntroSection />
      {/*       <NFTSectionRoot>
        <PhoneImg />
        <TypoContainer>
          <Title>기부런의 NFT를 발급받으세요!</Title>
          <Typo>새로운 인증의 시대, 기부런 NFT와 시작할 수 있습니다.</Typo>
          <NFTContainer>
            <NFTItem>
              <TotalItemBox />
              <NFTImg />
              <TypoContainer>
                <Typo>Amazing Collection</Typo>
                <Typo>by Arkhan</Typo>
              </TypoContainer>
            </NFTItem>
            <NFTItem>
              <TotalItemBox />
              <NFTImg />
              <TypoContainer>
                <Typo>Amazing Collection</Typo>
                <Typo>by Arkhan</Typo>
              </TypoContainer>
            </NFTItem>
          </NFTContainer>
        </TypoContainer>
      </NFTSectionRoot> */}
    </Root>
  );
};
