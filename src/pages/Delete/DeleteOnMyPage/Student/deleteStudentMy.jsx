import styled from "styled-components";
import MyPages from "../../../MyPage/Student/OnWrites/onWrites";

import Div from "../../../../components/Div/div";
import List from "../../../../components/List/list";
import WaringSign from "../../../../assets/img/warningSign.png";
import Button from "../../../../components/Button/button";
import { color } from "../../../../styles/theme";

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
  width: 656px;
  height: 306px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const WarningComment = styled.p`
  font-size: 27px;
  font-weight: 500;
  margin-top: 80px;
`;

export const WarningImg = styled.img`
  margin-right: 5px;
`;

export const WarningContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  font-weight: 500;
`;

export const WarningMessage = styled.span`
  font-size: 20px;
  margin-bottom: 1px;
`;

export const Accent = styled.span`
  color: ${color.Red};
  font-size: 20px;
  font-weight: 550;
`;

export const WarningButton = styled(Button)`
  border: 1px solid ${color.Red};
  background-color: ${color.White};
  color: ${color.Red};
  margin-top: 30px;
  width: 238px;
  height: 46px;
`;

function DeleteStudentMy() {
  return (
    <>
      <MyPages />
      <Layer />
      <ModalDiv>
        <WarningComment>정말 이 게시물을 삭제하시겠습니까?</WarningComment>
        <WarningContent>
          <WarningImg src={WaringSign} />
          <WarningMessage>
            삭제시 이 게시물은 <Accent>영구삭제</Accent>됩니다
          </WarningMessage>
        </WarningContent>
        <WarningButton>삭제하기</WarningButton>
      </ModalDiv>
    </>
  );
}
export default DeleteStudentMy;
