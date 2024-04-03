import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 50px 80px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.7) 53%,
    rgba(0, 0, 0, 1) 100%
  );
`;
const Con = styled.div`
  width: 100%;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 20px;
  @media screen and (max-width: 640px) {
    font-size: 28px;
  }
  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`;
const Text = styled.div`
  font-size: 16px;
  text-align: center;
  a {
    p {
      margin-bottom: 20px;
      color: gray;
    }
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Con>
        <Link to="/">Movie</Link>
      </Con>
      <Text>
        <a href="https://github.com/swg4020/Movie_App_Plus">
          <p>Project_Address : https://github.com/swg4020/Movie_App_Plus</p>
        </a>
        <a href="https://github.com/swg4020">
          <p>Github : https://github.com/swg4020</p>
        </a>
      </Text>
    </Container>
  );
};
