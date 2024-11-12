import styled from "styled-components";
import BeforeMainPage from "../../Main/LoginBefore/beforeMain";
import { color } from "../../../styles/theme"; // color import
import Input from "../../../components/Input/input";
import Div from "../../../components/Div/div";
import Button from "../../../components/Button/button";
import LogoImg from "../../../assets/img/logo.png";
import xS from "../../../assets/svg/xImg(엑스표시).svg";
import EyeOff from "../../../assets/img/inputEyeOffImg(눈꺼짐).png";
import { breakpoints } from "../../../styles/device";

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalDiv = styled(Div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color.White};
  padding: 20px;
  border-radius: 10px;
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 500px;
    height: 550px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 300px;
    height: 350px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 45px;
  margin-top: 5px;
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 50px;
    height: 35px;
    margin-top: -10px;
  }
`;

export const IdInput = styled(Input)`
  margin-top: -10px;
  width: 350px;
  height: 40px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 300px;
    height: 40px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 180px;
    height: 20px;
    margin-bottom: 5px;
  }
`;

export const PasswordInput = styled(Input)`
  margin-top: 40px;
  width: 350px;
  height: 40px;
  background-size: 22px 22px;
  background-position-x: 420px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 300px;
    height: 40px;
    background-position: 370px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 180px;
    height: 20px;
    background-position-x: 350px;
    background-size: 20px 20px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const LoginButton = styled(Button)`
  margin-top: 60px;
  border: none;
  font-size: 17px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 420px;
    height: 55px;
    margin-bottom: 30px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 300px;
    height: 40px;
    margin-top: 10px;
  }
`;

export const NoAccount = styled.p`
  font-weight: 500;
  font-size: 17px;
  margin-top: 30px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    margin-top: 7px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 15px;
  }
`;

export const Link = styled.a`
  color: ${color.Blue[2]};
  font-weight: 600;
  font-size: 17px;
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-size: 33px;
  font-weight: 500;
  margin-left: -340px;
  margin-top: 35px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    margin-left: -300px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    margin-top: 9px;
    font-size: 25px;
    margin-left: -200px;
  }
`;

export const XS = styled.img`
  margin-left: 500px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    margin-right: 40px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    margin-right: 220px;
    margin-bottom: 0px;
    margin-top: -2px;
  }
`;

function StudentSignin() {
  return (
    <>
      <BeforeMainPage />
      <Layer />
      <ModalDiv>
        <XS src={xS}></XS>
        <Logo src={LogoImg} />
        <Title>로그인</Title>
        <IdInput placeholder="이름을 입력해주세요(1~4자)" />
        <PasswordInput
          placeholder="학번을 입력하주세요(4글자)"
          type="password"
          backgroundImage={`url(${EyeOff})`}
        />
        <LoginButton>회원가입</LoginButton>
        <NoAccount>
          계정이 있으신가요? <Link>로그인</Link>
        </NoAccount>
      </ModalDiv>
    </>
  );
}

export default StudentSignin;
