import {BackContainer, MedalImage, ImageGroup, OrangeTypo, Typo, ImageText, ImageTextGroup, List} from "./styled";

export const Background = () => {
  return (
    <BackContainer>
        <Typo size="35px">나눔의 소중한 예를 보여주신 <OrangeTypo>기부자들</OrangeTypo></Typo>
        <ImageGroup>
            <ImageTextGroup>
                <MedalImage src="/은메달.png" />
                <ImageText>공소연님</ImageText>
            </ImageTextGroup>
            <ImageTextGroup bottomMargin="50px">
                <MedalImage src="/금메달.png" />
                <ImageText>밥먹는 제이지님</ImageText>
            </ImageTextGroup>
            <ImageTextGroup>
                <MedalImage src="/동메달.png" />
                <ImageText>김동국님</ImageText>
            </ImageTextGroup>
        </ImageGroup>
        <List></List>
    </BackContainer>
  );
};
