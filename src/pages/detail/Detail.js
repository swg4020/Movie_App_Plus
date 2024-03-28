import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { IMG_SIZE } from "../../constant/url";
import styled from "styled-components";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div``;
const Con = styled.div``;
const Genres = styled.ul``;

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoadig, setIsLoading] = useState();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsLoading(false);
      } catch (errors) {
        console.log(errors);
      }
    })();
  }, [id]);
  console.log(data);
  console.log(data?.genres);
  return (
    <>
      {isLoadig ? (
        <Loading />
      ) : (
        <>
          {data && (
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
              </Con>
            </Container>
          )}
        </>
      )}
    </>
  );
};
