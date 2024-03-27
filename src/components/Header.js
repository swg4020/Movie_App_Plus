import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  li {
    margin-left: 100px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>Movie</Link>
      </Logo>
      <Nav>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Nav>
    </SHeader>
  );
};
