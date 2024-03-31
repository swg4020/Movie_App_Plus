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
  bottom: 10px;
  padding: 50px 0 0 50px;
  @media screen and (max-width: 640px) {
    padding: ${GlobalPadding.padding_640} 0 0 ${GlobalPadding.padding_640};
  }
  @media screen and (max-width: 450px) {
    padding: ${GlobalPadding.padding_450} 0 0 ${GlobalPadding.padding_450};
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

const Con = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Numb = styled.div`
  width: 20%;
  font-size: 50px;
  text-align: end;
  font-weight: 700;
  bottom: 0;
  color: black;
  text-shadow: 0px 1px 10px crimson;
`;
const Bg = styled.div`
  width: 80%;
  height: 120px;
  background: url(${IMG_SIZE.size_200}${(props) => props.$bgUrl}) no-repeat
    center / cover;
  border-radius: 15px;
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
  let num = 0;
  return (
    <Section>
      <Title>{titleText}</Title>

      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Con>
                <Numb>{++num}</Numb>
                <Bg $bgUrl={data.poster_path} />
              </Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
