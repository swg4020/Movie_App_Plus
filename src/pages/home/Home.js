import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";

const Banner = styled.section`
  height: 80vh;
  background: url(${IMG_SIZE.origin}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  position: relative;
`;
const Title = styled.div`
  position: absolute;
  bottom: 200px;
  left: 50px;
  h3 {
    font-size: 80px;
    font-family: 700;
  }
  p {
    font-size: 18px;
    opacity: 0.8;
    margin-top: 30px;
    max-width: 550px;
    width: 100%;
    line-height: 26px;
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

export const Home = () => {
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        setNowData(nowResult);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);
  console.log(nowData);

  const data = nowData;
  return (
    <>
      {nowData && (
        <Banner $bgUrl={data?.backdrop_path}>
          <BackBg />
          <Title>
            <h3>{data?.title}</h3>
            <p>{data?.overview}</p>
          </Title>
        </Banner>
      )}
    </>
  );
};
