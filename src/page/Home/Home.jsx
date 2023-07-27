import { IntroSection } from "./components";
import { NFTSection } from "./components/NFTSection";
import { Root } from "./styled";

export const Home = () => {
  return (
    <Root>
      <IntroSection />
      <NFTSection />
    </Root>
  );
};
