import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Container, Root } from "./styled";

export const Layout = () => {
  return (
    <Root>
      <Container>
        <Nav />
        <Outlet />
      </Container>
    </Root>
  );
};
