import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";
import { colors } from "../../components/GlobalStyled";
import { MovieMini } from "./MovieMini";

const Banner = styled.section`
  height: 100vh;
  background: url(${IMG_SIZE.origin}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  position: relative;
  @media screen and (max-width: 640px) {
    height: 90vh;
  }
  @media screen and (max-width: 450px) {
    height: 80vh;
  }
`;
const Title = styled.div`
  position: absolute;
  bottom: 200px;
  left: 50px;
  h3 {
    font-size: 80px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    opacity: 0.8;
    margin-top: 30px;
    max-width: 550px;
    width: 100%;
    line-height: 26px;
    margin-bottom: 10px;
  }
  a {
    p {
      width: 150px;
      height: 30px;
      border-radius: 3px;
      text-align: center;
      background-color: ${colors.point};
      line-height: 30px;
      font-size: 25px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 640px) {
    bottom: 160px;
    left: 50px;
    h3 {
      font-size: 50px;
    }
    p {
      max-width: 400px;
    }
  }
  @media screen and (max-width: 450px) {
    bottom: 140px;
    left: 20px;
    h3 {
      font-size: 30px;
    }
    p {
      max-width: 300px;
    }
  }
`;
const BackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.7) 53%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const MainBanner = ({ imgUrl, numData }) => {
  const data = imgUrl[numData];
  return (
    <Banner $bgUrl={data?.backdrop_path}>
      <BackBg />
      <Title>
        <h3>{data.title}</h3>
        <p>{data.overview.slice(0, 100) + "..."}</p>
        <Link to={`/detail/${data.id}`}>
          <p>더 보기</p>
        </Link>
      </Title>
      <MovieMini movieData={imgUrl} titleText={"추천"} />
    </Banner>
  );
};
