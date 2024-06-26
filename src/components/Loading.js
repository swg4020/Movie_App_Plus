import { DotLoader } from "react-spinners";
import { colors } from "./GlobalStyled";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: #1d1d1d;
`;

export const Loading = () => {
  return (
    <Container>
      <DotLoader color={colors.point} />
    </Container>
  );
};
