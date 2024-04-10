import { BiSolidToTop } from "react-icons/bi";
import styled from "styled-components";
import { colors } from "./GlobalStyled";

const ScrollT = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: ${colors.pointRGB};
  width: 55px;
  height: 55px;
  z-index: 99999;
  border-radius: 5px;
  cursor: pointer;
  svg{
    font-size: 55px;
  }
  @media screen and (max-width: 640px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
    svg{
      font-size: 40px;
    }
  }
  @media screen and (max-width: 450px) {
    width: 30px;
    height: 30px;
    bottom: 10px;
    right: 10px;
    svg{
      font-size: 30px;
    }
  }
`;

export const ScrollTop = () => {
  const ClickTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ScrollT onClick={ClickTop}>
      <BiSolidToTop />
    </ScrollT>
  );
};
