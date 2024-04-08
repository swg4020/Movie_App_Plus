import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { ButtonL } from "./ButtonL";

const user = {
  id: 0,
  userid: "test",
  password: "test1",
};

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 640px) {
    padding: 150px 100px;
  }
  @media screen and (max-width: 450px) {
    padding: 150px 50px;
  }
`;

const MForm = styled.form`
  border-radius: 10px;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
  padding: 100px 40px;
  background-color: #fff;
  input {
    all: unset;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border-radius: 10px;
    padding-left: 15px;
    margin-top: 10px;
    color: black;
  }
`;
const Title = styled.h2`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1d1d1d;
  @media screen and (max-width: 640px) {
    font-size: 60px;
  }
  @media screen and (max-width: 450px) {
    font-size: 50px;
  }
`;

const ErrorMessage = styled.div`
  font-size-adjust: 14px;
  color: crimson;
  margin-top: 5px;
  text-align: left;
  width: 100%;
  font-family: 700;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const nav = useNavigate();

  const LoginSubmit = (data) => {
    const { userid, password } = data;

    if (userid !== user.userid) {
      setError("username", {
        message: "아이디가 틀렸습니다.",
      });
    }

    if (password !== user.password) {
      setError("password", {
        message: "비밀번호가 틀렸습니다.",
      });
    }

    if (userid === user.userid && password === user.password) {
      nav("/", {
        replace: true,
      });
    }
  };
  return (
    <Container>
      <MForm onSubmit={handleSubmit(LoginSubmit)}>
        <Title>로그인</Title>
        <input
          {...register("userid", {
            required: "아이디를 적어주세요",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.userid?.message}</ErrorMessage>
        <input
          {...register("password", {
            required: "비밀번호를 작성해주세요",
            minLength: {
              value: 4,
              message: "비밀번호는 4자리 이상",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <Button text={"로그인"} />
        <ButtonL text={"회원가입"} link={"/signup"} />
      </MForm>
    </Container>
  );
};
