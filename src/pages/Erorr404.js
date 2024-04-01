import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    box-shadow: 0px 1px 10px crimson;
    border-radius: 15px;
    height: 200px;
    line-height: 100px;
    p {
      font-size: 50px;
      text-align: center;
      text-shadow: 0px 1px 10px crimson;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 640px) {
    a {
      height: 150px;
      line-height: 75px;
      width: 350px;
      p {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    a {
      height: 100px;
      line-height: 50px;
      width: 250px;
      p {
        font-size: 20px;
      }
    }
  }
`;

export const Erorr404 = () => {
  return (
    <Container>
      <Link to="/">
        <p>Not Found ERORR 404</p>
        <p>Click: MovieApp Home</p>
      </Link>
    </Container>
  );
};
