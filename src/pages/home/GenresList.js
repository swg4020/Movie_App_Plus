import { useEffect, useState } from "react";
import { genre } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalPadding, colors } from "../../components/GlobalStyled";

const Section = styled.section`
  padding: 50px 0 0 50px;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding: 40px 0 0 ${GlobalPadding.padding_640};
  }
  @media screen and (max-width: 450px) {
    padding: 30px 0 0 ${GlobalPadding.padding_450};
  }
`;

const Con = styled.div`
  padding: 15px;
  background-color: ${colors.pointRGB};
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  border: 2px solid ${colors.pointRGB};
  border-radius: 30px;
  @media screen and (max-width: 640px) {
    padding: 15px;
    font-size: 19px;
  }
  @media screen and (max-width: 450px) {
    padding: 10px;
    font-size: 16px;
  }
`;

export const GenresList = () => {
  const [genreData, setGenreData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { genres: genredata } = await genre();
        setGenreData(genredata);
        console.log(genredata);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  const params = {
    slidesPerView: 8.2,
    spaceBetween: 50,
    breakpoints: {
      1024: {
        slidesPerView: 7.2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 4.2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Section>
      <Swiper {...params}>
        {genreData?.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/genres/${data.id}`}>
              <Con>{data.name}</Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
