import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./GlobalStyled";

const Con = styled.div`
width: 100%;
a{
  width: 100%;
}
`;

const SButton = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  background-color: ${colors.point};
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  cursor: pointer;
`;

export const ButtonL = ({ text, link }) => {
  return (
    <Con>
      <Link to={link}>
        <SButton>{text}</SButton>
      </Link>
    </Con>
  );
};
