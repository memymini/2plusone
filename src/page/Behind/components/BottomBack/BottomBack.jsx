import { useState } from "react";
import {
  Button,
  WhiteGround,
  ImageGroup,
  WhiteGroundImage,
  ButtonContainer,
} from "./styled";
import { Link } from "react-router-dom";
import ImageData from "../../../../utils/BehindDetail";

export const BottomBack = () => {
  const [currentGroup, setCurrentGroup] = useState("group1");

  const handleButtonClick = (group) => {
    setCurrentGroup(group);
  };
  return (
    <WhiteGround>
      {ImageData.map(
        (data) =>
          data.group === currentGroup && (
            <ImageGroup>
              {data.details.map((item, index) => (
                <Link to={item.id}>
                  <WhiteGroundImage src={item.src} />
                </Link>
              ))}
            </ImageGroup>
          )
      )}
      {/*       {currentGroup === "group1" && (
        <>
          <ImageGroup>
            <Link to="/PangPang1">
              <WhiteGroundImage />
            </Link>
            <WhiteGroundImage src="/PangPang2.png" />
            <WhiteGroundImage src="/PangPang3.png" />
          </ImageGroup>
          <ImageGroup>
            <WhiteGroundImage src="/PangPang4.png" />
            <WhiteGroundImage src="/PangPang5.png" />
            <WhiteGroundImage src="/PangPang6.png" />
          </ImageGroup>
        </>
      )}

      {currentGroup === "group2" && (
        <>
          <ImageGroup>
            <WhiteGroundImage src="/OKJJI1.png" />
            <WhiteGroundImage src="/OKJJI2.jpg" />
            <WhiteGroundImage src="/OKJJI3.png" />
          </ImageGroup>
          <ImageGroup>
            <WhiteGroundImage src="/OKJJI4.png" />
            <WhiteGroundImage src="/OKJJI5.png" />
            <WhiteGroundImage src="/OKJJI6.png" />
          </ImageGroup>
        </>
      )}

      {currentGroup === "group3" && (
        <>
          <ImageGroup>
            <WhiteGroundImage src="/JJANG1.png" />
            <WhiteGroundImage src="/JJANG2.png" />
            <WhiteGroundImage src="/JJANG3.png" />
          </ImageGroup>
          <ImageGroup>
            <WhiteGroundImage src="/JJANG4.png" />
            <WhiteGroundImage src="/JJANG5.JPG" />
            <WhiteGroundImage src="/JJANG6.JPG" />
          </ImageGroup>
        </>
      )} */}

      <ButtonContainer>
        <Button
          isActive={currentGroup === "group1"}
          onClick={() => handleButtonClick("group1")}
        >
          1
        </Button>
        <Button
          isActive={currentGroup === "group2"}
          onClick={() => handleButtonClick("group2")}
        >
          2
        </Button>
        <Button
          isActive={currentGroup === "group3"}
          onClick={() => handleButtonClick("group3")}
        >
          3
        </Button>
      </ButtonContainer>
    </WhiteGround>
  );
};
