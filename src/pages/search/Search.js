import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IMG_SIZE } from "../../constant/url";
import { searchMovie } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.section`
  padding: 150px;
`;
const Form = styled.form`
  input {
    all: unset;
    border-bottom: 1px solid gray;
    width: 100%;
    font-size: 24px;
    padding-left: 5px;
    padding-bottom: 10px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 10px;
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
  }
`;

const Text = styled.p`
  width: 100%;
  font-size: 29px;
  padding: 50px 0 50px 20px;
`;

const ErrorMessage = styled.p`
  font-size: 20px;
  color: gray;
  font-weight: 600;
  padding: 10px;
`;

export const Search = () => {
  const [isLoadig, setIsLoading] = useState(false);
  const [term, setTerm] = useState();
  const [keyword, setKeyword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { search: keyword } = data;
    try {
      const { results } = await searchMovie(keyword);
      console.log(results);
      setTerm(results);
      setKeyword(keyword);
      setIsLoading(false);
    } catch (errors) {
      console.log(errors);
    }
  };

  const message = errors?.search?.message;

  return (
    <Container>
      <PageTitle title={"Search"}/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "내용을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화가 있으신가요?"
        />
      </Form>

      {errors ? <ErrorMessage>{message}</ErrorMessage> : ""}

      {term ? <Text>"{keyword}"의 검색 결과</Text> : ""}

      {term && (
        <ConWrap>
          {isLoadig ? (
            <Loading />
          ) : (
            <>
              {term.map((data) => (
                <Con key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <Bg>
                      {data.poster_path ? (
                        <img
                          src={`${IMG_SIZE.size_200}${data.poster_path}`}
                          alt={data.title}
                        />
                      ) : (
                        <img src="" alt="이미지 없음" />
                      )}
                    </Bg>
                    <h3>{data.title}</h3>
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
