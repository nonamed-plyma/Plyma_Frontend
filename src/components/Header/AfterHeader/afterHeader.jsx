import styled from "styled-components";
import Logo from "../../../assets/img/logo.png";
import { color } from "../../../styles/theme";

const AfterHeader = () => {
  return (
    <HeaderContainer>
      <Logos>
        <LogoImg src={Logo} alt="header-logo" />
        <LogoTitle>PLYMA</LogoTitle>
      </Logos>
      <HeaderLink>마이페이지</HeaderLink>
    </HeaderContainer>
  );
};
export const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logos = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;
`;
export const LogoImg = styled.img`
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
export const HeaderLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
  margin-right: 200px;
`;

export default AfterHeader;
