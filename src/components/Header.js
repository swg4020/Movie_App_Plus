import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { GlobalPadding, colors } from "./GlobalStyled";
import { GoSearch } from "react-icons/go";
import { genre } from "../api";

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
  @media screen and (max-width: 640px) {
    padding: 20px ${GlobalPadding.padding_640};
  }
  @media screen and (max-width: 450px) {
    padding: 20px ${GlobalPadding.padding_450};
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  li {
    margin-left: 20px;
    a {
      color: ${colors.point};
    }
    svg {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 640px) {
    li {
      margin-left: 20px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 450px) {
    li {
      margin-left: 10px;
      font-size: 16px;
    }
  }
`;

const NavG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Header = () => {
  const headerRef = useRef();

  const handlerScroll = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;

    if (pageY >= 100) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.7)";
      current.style.backdropFilter = "blur(3px)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", handlerScroll);
  });

  const [genreData, setGenreData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { genres: genredata } = await genre();
        setGenreData(genredata);
        console.log(genredata);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={routes.home}>Movie</Link>
      </Logo>
      <Nav>
        <li>
          <Link to={routes.search}>
            <GoSearch />
          </Link>
        </li>
        <li>
          <Link to={routes.login}>로그인</Link>
        </li>
        <li>
          <Link to={routes.signup}>회원가입</Link>
        </li>
        <NavG>
          
          {genreData?.map((data) => (
          <Link to={`/genres/${data.id}`}>
            <div>{data.name}</div>
            </Link>
          ))}
          
        </NavG>
      </Nav>
    </SHeader>
  );
};
