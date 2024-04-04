import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: #1d1d1d;
  z-index: 9999;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.h1`
  font-size: 300px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 640px) {
    font-size: 250px;
  }
  @media screen and (max-width: 450px) {
    font-size: 200px;
  }
`;
const SubText = styled.h3`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    font-size: 40px;
  }
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;
const BtnHome = styled.div`
font-size: 30px;
font-weight: 600;
background-color: white;
padding: 10px;
border-radius: 5px;
color: #1d1d1d;
`;

export const Erorr404 = () => {
  return (
    <Container>
      <MainText>404</MainText>
      <SubText>SORRY, PAGE NOT FOUND</SubText>

      <Link to="/">
        <BtnHome>GO BACK HOME</BtnHome>
      </Link>
    </Container>
  );
};
