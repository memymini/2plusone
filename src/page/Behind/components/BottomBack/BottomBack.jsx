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
