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
import { navItems } from "../../utils/NavUtils";

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
