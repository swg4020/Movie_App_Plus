import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 100px 0 50px 50px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Bg = styled.div`
  height: 370px;
  background: url(${IMG_SIZE.size_500}${(props) => props.$bgUrl}) no-repeat
    center / cover;
`;





export const Movies = ({ movieData, titleText }) => {
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
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Bg $bgUrl={data.poster_path} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
