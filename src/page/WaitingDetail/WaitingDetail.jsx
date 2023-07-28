import { useParams } from "react-router-dom";
import { Root } from "./styled";

export const WaitingDetail = () => {
    const { index } = useParams();
  return (
    <Root>
      <h1>페이지정보{index}</h1>
    </Root>
  );
};
