import { Link } from "react-router-dom";
import { Container, LogoImg, NavList, Root, WalletButton } from "./styled";

export const Nav = () => {
  return (
    <Root>
      <Container>
        <Link to="/">
          <LogoImg />
        </Link>
        <NavList>
          <Link to="/about">기부런 소개</Link>
          <Link to="/contact">이용안내</Link>
          <Link to="/contact">기부하기</Link>
          <Link to="/contact">거래내역</Link>
          <Link to="/contact">고객센터</Link>
        </NavList>
        <WalletButton>지갑연동</WalletButton>
      </Container>
    </Root>
  );
};
