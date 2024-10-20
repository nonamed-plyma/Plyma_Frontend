import styled from "styled-components";
import BeforeMainPage from "../../Main/LoginBefore/beforeMain"; // BeforeMain을 import
import { color } from "../../../styles/theme"; // color import
import Input from "../../../components/Input/input";
import Div from "../../../components/Div/div";
import Button from "../../../components/Button/button";
import LogoImg from "../../../assets/img/logo.png";
import xS from "../../../assets/svg/xImg(엑스표시).svg";

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalDiv = styled(Div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: ${color.White};
  padding: 20px;
  border-radius: 10px;
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  width: 60px;
  height: 45px;
  margin-top: 5px;
`;

export const IdInput = styled(Input)`
  margin-top: -10px;
  width: 350px;
  height: 45px;
`;

export const PasswordInput = styled(Input)`
  margin-top: 40px;
  width: 350px;
  height: 45px;
`;

export const LoginButton = styled(Button)`
  margin-top: 60px;
  border: none;
  font-size: 17px;
`;

export const NoAccount = styled.p`
  font-weight: 500;
  font-size: 17px;
  margin-top: 30px;
`;

export const Link = styled.a`
  color: ${color.Blue[2]};
  font-weight: 600;
  font-size: 17px;
`;

export const Title = styled.p`
  font-size: 33px;
  font-weight: 500;
  margin-left: -340px;
  margin-top: 35px;
`;
export const XS = styled.img`
  margin-left: 500px;
`;

function CorrectSignin() {
  return (
    <>
      <BeforeMainPage />
      <Layer />
      <ModalDiv>
        <XS src={xS}></XS>
        <Logo src={LogoImg}></Logo>
        <Title>회원가입</Title>
        <IdInput placeholder="아이디를 입력해주세요(4~10자)" />
        <PasswordInput
          placeholder="비밀번호를 입력해주세요(8~16자)"
          type="password"
        />
        <LoginButton>회원가입</LoginButton>
        <NoAccount>
          계정이 있으신가요? <Link>로그인</Link>
        </NoAccount>
      </ModalDiv>
    </>
  );
}

export default CorrectSignin;
