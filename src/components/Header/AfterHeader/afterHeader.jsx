import styled from "styled-components";
import LogoImg from "../../../assets/img/logo.png";
import { color } from "../../../styles/theme";
import { breakpoints } from "../../../styles/device";

const AfterHeader = () => {
  return (
    <HeaderContainer>
      <Logos>
        <Logo src={LogoImg} alt="header-logo" />
        <LogoTitle>PLYMA</LogoTitle>
      </Logos>
      <HeaderLink>마이페이지</HeaderLink>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;

  @media (max-width: ${breakpoints.mobileLarge}) {
    margin-left: 100px;
  }
`;

export const Logo = styled.img`
  width: 28px;
  height: 22px;
  margin-right: 11px;
`;

export const LogoTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: ${color.Blue[4]};
  margin: 1.5px 0px;
`;

export const HeaderLink = styled.button`
  font-size: 17px;
  font-weight: 500;
  color: ${color.Black};
  margin-right: 200px;
  border: none;
  background-color: ${color.White};
  display: inline-block;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 15px;
    margin-left: 100px;
  }
`;

export default AfterHeader;
