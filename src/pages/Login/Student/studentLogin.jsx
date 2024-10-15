import styled from "styled-components";
import { color } from "../../../styles/theme";
import Xs from "../../../assets/svg/xImg(엑스표시).svg";
import EyeOff from "../../../assets/img/inputEyeOffImg(눈꺼짐).png";
import MainPage from "../../Main/LoginBefore/beforeMain";

export const Login = styled.div1`
  width: 100%;
  color: ${color.Black};
`;
function StudentLogin() {
  return (
    <>
      <MainPage></MainPage>
      <Login></Login>
    </>
  );
}
export default StudentLogin;
