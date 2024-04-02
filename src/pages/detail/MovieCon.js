import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";
import {
  GlobalPadding,
  VideoSize,
  colors,
} from "../../components/GlobalStyled";
import { useState } from "react";

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 100px ${GlobalPadding.padding_640} 150px
      ${GlobalPadding.padding_640};
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 100px ${GlobalPadding.padding_450} 150px
      ${GlobalPadding.padding_450};
  }
`;
const Bg = styled.div`
  width: 48%;
  height: 700px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;
const Con = styled.div`
  width: 46%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .info {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    padding-top: 50px;
    border-top: 1px solid #808080;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 28px;
    opacity: 0.7;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 30px;
    h3 {
      font-size: 50px;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 20px;

    h3 {
      font-size: 30px;
      line-height: 70px;
    }

    .imfo,
    p {
      font-size: 15px;
    }
  }
`;
const Genres = styled.ul`
  list-style: disc;
  margin-left: 26px;
  li {
    margin-bottom: 10px;
  }
  li:last-child {
    margin-bottom: 50px;
  }
`;

const Video = styled.button`
  all: unset;
  background-color: ${colors.point};
  width: 150px;
  height: 30px;
  border-radius: 5px;
  margin-top: 50px;
  text-align: center;
  line-height: 30px;
  font-size: 19px;
  font-weight: 600;
`;

const Movieveideo = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => props.$video};
  justify-content: center;
  background-color: #1d1d1d;
  align-items: center;
  iframe {
    width: ${VideoSize.Vwidth};
    height: ${VideoSize.Vheight};
  }
`;
const Close = styled.button``;

export const MovieCon = ({ data, moviedata }) => {
  const videodata = moviedata[0];
  const [isNone, setIsNone] = useState("none");
  const OnvideoHanedler = () => {
    setIsNone("flex");
  };
  const ClosevideoHanedler = () => {
    setIsNone("none");
  };
  return (
    <>
      <Container>
        <Bg>
          <img
            src={`${IMG_SIZE.origin}${data?.poster_path}`}
            alt={data?.title}
          />
        </Bg>
        <Con>
          <h3>{data?.title}</h3>
          <div className="info">{Math.ceil(data?.vote_average)}점</div>
          <div className="info">{data?.runtime}분</div>
          <div className="info">{data?.release_date}</div>
          <Genres className="info">
            {data?.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </Genres>
          <p>{data?.overview}</p>
          <>
            {data?.results?.length ? <Video onClick={OnvideoHanedler}>예고편 보기</Video> : ""}
          </>
        </Con>
      </Container>
      <Movieveideo $video={isNone}>
        <iframe
          src={`https://www.youtube.com/embed/${videodata?.key}`}
          title={`${videodata?.name}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* 카멜로 수정  이어지는 부분 수정*/}
        <Close onClick={ClosevideoHanedler}>X</Close>
      </Movieveideo>
    </>
  );
};
