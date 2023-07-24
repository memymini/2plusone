import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LogoImg,
  NavItem,
  Tooltip,
  NavItemText,
  NavList,
  Root,
  WalletButton,
} from "./styled";

const navItems = [
  {
    link: "/about",
    text: "기부런 소개",
    details: ["소개", "기부 비하인드"],
  },
  {
    link: "/contact",
    text: "이용안내",
    details: ["지갑 연동", "기부하기", "토큰 사용법", "기부금 전달 방식"],
  },
  {
    link: "/donate",
    text: "기부하기",
    details: ["대기 중", "진행 중", "기부 순위"],
  },
  {
    link: "/transaction",
    text: "거래내역",
    details: [],
  },
  {
    link: "/customer",
    text: "고객센터",
    details: ["FAQ", "문의 사항"],
  },
];

export const Nav = () => {
  return (
    <Root>
      <Container>
        <Link to="/">
          <LogoImg />
        </Link>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.link}>
              <Link to={item.link}>{item.text}</Link>
              {item.details.length > 0 && (
                <Tooltip>
                  {item.details.map((detail) => (
                    <NavItemText key={detail}>{detail}</NavItemText>
                  ))}
                </Tooltip>
              )}
            </NavItem>
          ))}
        </NavList>
        <WalletButton>지갑 연동</WalletButton>
      </Container>
    </Root>
  );
};
