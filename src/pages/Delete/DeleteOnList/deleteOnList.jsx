import styled from "styled-components";
import ListWatch from "../../Lists/ListWatch/listWatch";
import Div from "../../../components/Div/div";
import WaringSign from "../../../assets/img/warningSign.png";
import Button from "../../../components/Button/button";
import { color } from "../../../styles/theme";
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
  width: 656px;
  height: 306px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 556px;
    height: 300px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 456px;
    height: 206px;
  }
  @media (max-width: ${breakpoints.mobileSmall}) {
    width: 356px;
    height: 106px;
  }
`;

export const WarningComment = styled.p`
  font-size: 27px;
  font-weight: 500;
  margin-top: 80px;
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 23px;
    margin-top: 35px;
  }
  @media (max-width: ${breakpoints.mobileSmall}) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const WarningImg = styled.img`
  margin-right: 5px;
  width: 20px;
`;

export const WarningContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  font-weight: 500;
  @media (max-width: ${breakpoints.mobileSmall}) {
    margin-top: -11px;
  }
`;

export const WarningMessage = styled.span`
  font-size: 20px;
  margin-bottom: 1px;
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobileSmall}) {
    font-size: 17px;
  }
`;

export const Accent = styled.span`
  color: ${color.Red};
  font-size: 20px;
  font-weight: 550;
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobileSmall}) {
    font-size: 17px;
  }
`;

export const WarningButton = styled(Button)`
  border: 1px solid ${color.Red};
  background-color: ${color.White};
  color: ${color.Red};
  margin-top: 30px;
  width: 238px;
  height: 46px;
  &:hover {
    background-color: ${color.Red};
    color: ${color.White};
  }
  @media (max-width: ${breakpoints.mobileSmall}) {
    margin-top: 10px;
  }
`;

function DeleteOnList() {
  return (
    <>
      <ListWatch />
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

export default DeleteOnList;
