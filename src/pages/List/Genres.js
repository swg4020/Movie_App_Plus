import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { genre, genres } from "../../api";
import { Loading } from "../../components/Loading";
import { GlobalPadding } from "../../components/GlobalStyled";
import styled from "styled-components";
import { IMG_SIZE } from "../../constant/url";

const Container = styled.section`
  padding: 150px;
  @media screen and (max-width: 640px) {
    padding: 100px 50px 50px ${GlobalPadding.padding_640};
  }
  @media screen and (max-width: 450px) {
    padding: 100px 20px 50px ${GlobalPadding.padding_450};
  }
`;
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 10px;
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
`;

const Con = styled.div`
  h3 {
    margin-top: 10px;
  }
`;
const Bg = styled.div`
  height: 350px;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  @media screen and (max-width: 640px) {
    height: 270px;
  }
  @media screen and (max-width: 450px) {
    height: 240px;
  }
`;
const Box = styled.div`
  height: 100vh;
  display: ${(props) => props.$noNe};
`;

export const Genres = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [genreData, setGenreData] = useState();
  const [isLoadig, setIsLoading] = useState(false);

  const num = Number(id);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const { results: gSData } = await genres(id);
        const { genres: gdata } = await genre();
        setData(gSData);
        setGenreData(gdata);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const Gdata =
    genreData &&
    genreData.filter((data) => console.log(data.id === num ? data.name : "no"));

  console.log(data);
  return (
    <Container>
      {data ? <Box $noNe={"none"}></Box> : <Box $noNe={"block"}></Box>}
      {data && (
        <ConWrap>
          {isLoadig ? (
            <Loading />
          ) : (
            <>
              {data.map((data) => (
                <Con key={data?.id}>
                  <Link to={`/detail/${data.id}`}>
                    <Bg>
                      {data?.poster_path ? (
                        <img
                          src={`${IMG_SIZE.size_200}${data?.poster_path}`}
                          alt={data?.title}
                        />
                      ) : (
                        <img src="" alt="이미지 없음" />
                      )}
                    </Bg>
                  </Link>
                </Con>
              ))}
            </>
          )}
        </ConWrap>
      )}
    </Container>
  );
};
