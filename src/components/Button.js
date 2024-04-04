
import styled from "styled-components";
import { colors } from "./GlobalStyled";

const SButton = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18;
  background-color: ${colors.point};
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  cursor: pointer;
`;

export const Button = ({ text }) => {
  return (
      <SButton>{text}</SButton>
  );
};