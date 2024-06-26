import { useForm } from "react-hook-form";
import { ButtonL } from "./ButtonL";
import { Button } from "./Button";
import styled from "styled-components";
import { GlobalPadding } from "./GlobalStyled";

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 640px) {
    padding: 150px ${GlobalPadding.padding_640};
  }
  @media screen and (max-width: 450px) {
    padding: 100px ${GlobalPadding.padding_450};
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
  height: 700px;
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
  @media screen and (max-width: 640px) {
    padding: 100px 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 0 20px;
    height: 600px;
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

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const SignUpSubmit = () => {
    console.log("확인");
  };
  return (
    <Container>
      <MForm onSubmit={handleSubmit(SignUpSubmit)}>
        <Title>회원가입</Title>
        <input
          {...register("userid", {
            required: "아이디를 적어주세요.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.userid?.message}</ErrorMessage>

        <input
          {...register("name", {
            required: false,
          })}
          type="text"
          placeholder="이름(선택사항)"
        />

        <input
          {...register("email", {
            required: "이메일은 적어주세요.",
          })}
          type="text"
          placeholder="이메일"
        />

        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

        <input
          {...register("password", {
            required: "패스워드는 적어주세요.",
            minLength: {
              value: 4,
              message: "패스워드는 최소 4자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <Button text={"회원가입"} />

        <ButtonL text={"로그인"} link={"/login"} />
      </MForm>
    </Container>
  );
};
