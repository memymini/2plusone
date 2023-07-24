import styled from "styled-components";
import logo from "../../assets/icon/logo.png";

export const Root = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 107px;
  font-family: "Do Hyeon", "Noto Sans KR", sans-serif;
  font-size: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1280px;
  & > *:first-child {
    margin-right: auto;
  }
  & > *:last-child {
    margin-left: auto;
  }
`;

export const LogoImg = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 166px;
  height: 83px;
  margin-right: 10px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: fit-content;
  > * {
    cursor: pointer;
  }
`;

export const WalletButton = styled.button`
  width: 112px;
  height: 48px;
  border-radius: 10px;
  background: #ff7425;
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  /* margin-left: 10px; */
  transition: 0.3s;
  &:hover {
    background: #ea580c;
  }
`;
