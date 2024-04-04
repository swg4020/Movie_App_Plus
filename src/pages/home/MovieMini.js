import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";
import { GlobalPadding } from "../../components/GlobalStyled";

const Section = styled.section`
  position: absolute;
  left: 0;
  z-index: 99;
  width: 100%;
  bottom: 40px;
  padding: 50px 0 0 50px;
  @media screen and (max-width: 640px) {
    padding: ${GlobalPadding.padding_640} 0 0 ${GlobalPadding.padding_640};
    bottom: 20px;
  }
  @media screen and (max-width: 450px) {
    padding: ${GlobalPadding.padding_450} 0 0 ${GlobalPadding.padding_450};
    bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 25px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const ConWrap = styled.div``;

const Sub = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  h3 {
    width: 80%;
    font-size: 15px;
    text-align: center;
    padding: 5px;
    font-weight: 700;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #1d1d1d61;
    backdrop-filter: blur(3px);
  }
`;

const Con = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Numb = styled.div`
  width: 20%;
  font-size: 40px;
  text-align: end;
  font-weight: 700;
  bottom: 0;
  color: white;
  z-index: 99;
  @media screen and (max-width: 640px) {
    font-size: 35px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
const Bg = styled.div`
  width: 80%;
  height: 120px;
  background: url(${IMG_SIZE.size_200}${(props) => props.$bgUrl}) no-repeat
    center / cover;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  @media screen and (max-width: 640px) {
    height: 110px;
  }
  @media screen and (max-width: 450px) {
    height: 100px;
  }
`;

export const MovieMini = ({ movieData, titleText }) => {
  const params = {
    slidesPerView: 5.2,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 4.2,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Section>
      <Title>{titleText}</Title>

      <Swiper {...params}>
        {movieData?.map((data, index) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <ConWrap>
                <Con>
                  <Numb>{index + 1}</Numb>
                  <Bg $bgUrl={data.backdrop_path} />
                </Con>
                <Sub>
                  <h3>{data.title}</h3>
                </Sub>
              </ConWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

//타이틀추가
