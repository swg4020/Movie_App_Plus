import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";
import { colors } from "../../components/GlobalStyled";
import { MovieMini } from "./MovieMini";
import { useEffect, useState } from "react";
import { trending } from "../../api";
import { CiCirclePlus } from "react-icons/ci";
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
  bottom: 300px;
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
      width: 120px;
      border-radius: 25px;
      border: 2px solid #e5091459;
      padding: 10px 0 10px 15px;
      background-color: ${colors.pointRGB};
      font-size: 20px;
      font-weight: 600;
      position: relative;
      svg {
        font-size: 45px;
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 640px) {
    bottom: 220px;
    left: 50px;
    h3 {
      font-size: 50px;
    }
    p {
      max-width: 400px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 450px) {
    bottom: 180px;
    left: 20px;
    h3 {
      font-size: 30px;
    }
    p {
      max-width: 300px;
      font-size: 16px;
    }
    a {
      p {
        width: 100px;
        border-radius: 25px;
        padding: 5px 0 5px 10px;
        font-size: 18px;

        svg {
          font-size: 35px;
        }
      }
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
  const [trendData, setTrendData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { results: trenDing } = await trending();
        setTrendData(trenDing);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Banner $bgUrl={data?.backdrop_path}>
      <BackBg />
      <Title>
        <h3>{data.title}</h3>
        <p>{data.overview.slice(0, 100) + "..."}</p>
        <div>
          <Link to={`/detail/${data.id}`}>
            <p>
              더보기 <CiCirclePlus />
            </p>
          </Link>
        </div>
      </Title>
      <MovieMini movieData={trendData} titleText={"인기 급상승"} />
    </Banner>
  );
};
