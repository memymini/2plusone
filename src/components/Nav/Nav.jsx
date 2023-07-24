import { Link } from "react-router-dom";
import { Root } from "./styled";

export const Nav = () => {
  return (
    <Root>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Root>
  );
};
