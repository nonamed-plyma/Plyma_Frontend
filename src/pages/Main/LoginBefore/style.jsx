import styled from "styled-components";
import { color } from "../../../styles/theme";
import LogoImg from "../../../assets/img/logo.png";
import MagnifyImg from "../../../assets/img/searchbar_img(돋보기).png";
import LeftArrowImg from "../../../assets/img/middle_img5(왼쪽 향하는 화살표).png";
import RightArrowImg from "../../../assets/img/middle_img6(오른쪽 향하는 화살표).png";

export const Middle = styled.div`
  width: 100%;
  height: 420px;
  background-color: ${color.Blue[3]};
  overflow-x: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const MiddleContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const MiddleBigTitle = styled.span`
  font-weight: bold;
  font-size: 42px;
`;
export const MiddleSmallTitle = styled.span`
  font-weight: 500;
  margin: 0;
  font-size: 26px;
  display: block;
`;
export const Titles = styled.div`
  color: ${color.White};
  margin: 0;
  position: absolute;
  top: 120px;
  left: 180px;
`;
export const LeftArrow = styled.img.attrs({
  src: LeftArrowImg,
})`
  margin-left: 60px;
`;
export const RightArrow = styled.img.attrs({
  src: RightArrow,
})`
  margin-right: 60px;
`;
