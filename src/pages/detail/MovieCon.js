import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";
import {
  GlobalPadding,
  VideoSize,
  colors,
} from "../../components/GlobalStyled";
import { useState } from "react";
import ReactPlayer from "react-player";

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
  width: 45%;
  height: 800px;
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
const Genres = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;

  div {
    width: 120px;
    padding: 6px;
    margin-bottom: 10px;
    text-align: center;
    background-color: ${colors.pointRGB};
    border-radius: 5px;
    font-size: 18px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  li:last-child {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 640px) {
    div{
      font-size: 16px;
      width: 100px;
    }
  }
  @media screen and (max-width: 450px) {
    div{
      font-size: 16px;
      width: 100px;
    }
  }
`;

const Video = styled.button`
  all: unset;
  position: relative;
  p {
    width: 150px;
    border-radius: 25px;
    color: white;
    border: 2px solid #e5091459;
    padding: 10px 0 10px 15px;
    background-color: ${colors.pointRGB};
    font-size: 20px;
    font-weight: 600;
    position: relative;
    margin-top: 30px;
  }
  div {
    position: absolute;
    top: 31px;
    right: 1px;
    border: 1px solid ${colors.pointRGB};
    font-size: 35px;
    padding: 4px 15px 9px 15px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: ${colors.pointRGB};
  }
  @media screen and (max-width: 640px) {
    p {
    width: 130px;
    padding: 5px 0 5px 15px;
    font-size: 18px;
    margin-top: 30px;
  }
    div {
    top: 31px;
    font-size: 30px;
    padding: 2px 12px 6px 12px;
  }
  }
  @media screen and (max-width: 450px) {
    p {
    width: 130px;
    padding: 5px 0 5px 15px;
    font-size: 18px;
    margin-top: 30px;
  }
    div {
    top: 31px;
    font-size: 30px;
    padding: 2px 12px 6px 12px;
  }
  }
`;

const Movieveideo = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => props.$video};
  justify-content: center;
  background-color: #1d1d1dde;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  div {
    width: ${VideoSize.Vwidth};
    height: ${VideoSize.Vheight};
  }
  @media screen and (max-width: 640px) {
    div {
      width: ${VideoSize.Mwidth};
      height: ${VideoSize.Mheight};
    }
  }
  @media screen and (max-width: 450px) {
    div {
      width: ${VideoSize.Swidth};
      height: ${VideoSize.Sheight};
    }
  }
`;

const Close = styled.button`
  all: unset;
  margin-top: 30px;
  font-size: 35px;
  padding: 10px 20px 18px 18px;
  border-radius: 50%;
  cursor: pointer;
  background-color: gray;
  p {
    margin-top: 1px;
  }
`;

export const MovieCon = ({ data, moviedata }) => {
  const videodata = moviedata;
  const [isNone, setIsNone] = useState("none");
  const [start, setStart] = useState(false);
  const OnvideoHanedler = () => {
    setIsNone("flex");
    setStart(true);
  };
  const ClosevideoHanedler = () => {
    setIsNone("none");
    setStart(false);
  };
  console.log(start);
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
              <div key={genre.id}>{genre.name}</div>
            ))}
          </Genres>
          <p>{data?.overview}</p>
          <>
            {videodata?.length ? (
              <Video onClick={OnvideoHanedler}>
                <p>예고편</p>
                <div>+</div>
              </Video>
            ) : (
              ""
            )}
          </>
        </Con>
      </Container>
      <Movieveideo $video={isNone}>
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videodata[0]?.key}`}
            playing={start}
            muted={true}
            controls={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* 카멜로 수정  이어지는 부분 수정*/}
        <Close onClick={ClosevideoHanedler}>
          <p>✖</p>
        </Close>
      </Movieveideo>
    </>
  );
};
