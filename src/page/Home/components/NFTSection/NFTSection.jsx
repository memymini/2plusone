import {
  Container,
  InfoTypoContainer,
  NFTContainer,
  NFTImg,
  NFTItem,
  OrangTitle,
  PhoneImg,
  Root,
  Title,
  TotalItemBox,
  Typo,
  TypoContainer,
} from "./styled";
import girlNFTImg from "../../../../assets/image/main_girl.png";
import monkeyNFTImg from "../../../../assets/image/main_monkey.png";

export const NFTSection = () => {
  return (
    <Root>
      <Container>
        <PhoneImg />
        <TypoContainer>
          <Title>
            기부런의 <OrangTitle>NFT</OrangTitle>를 발급받으세요!
          </Title>
          <Typo top="26px">새로운 인증의 시대,</Typo>
          <Typo bottom="45px">기부런 NFT와 시작할 수 있습니다.</Typo>
          <NFTContainer>
            <NFTItem>
              <NFTImg src={girlNFTImg} alt="girl" />
              <InfoTypoContainer>
                <Typo top="3px" size="20px" weight="700">
                  Amazing
                </Typo>
                <Typo size="20px" weight="700">
                  Collection
                </Typo>
                <Typo size="14px" weight="500">
                  by Arkhan
                </Typo>
                <TotalItemBox>Total 54 Items</TotalItemBox>
              </InfoTypoContainer>
            </NFTItem>
            <NFTItem>
              <NFTImg src={monkeyNFTImg} />
              <InfoTypoContainer>
                <Typo top="3px" size="20px" weight="700">
                  Amazing
                </Typo>
                <Typo size="20px" weight="700">
                  Collection
                </Typo>
                <Typo size="14px" weight="500">
                  by Arkhan
                </Typo>
                <TotalItemBox>Total 54 Items</TotalItemBox>
              </InfoTypoContainer>
            </NFTItem>
          </NFTContainer>
        </TypoContainer>
      </Container>
    </Root>
  );
};
