import styled from "styled-components";
import Header from "../../../../components/Header/MyPageHeader/myPageHeader";
import Div from "../../../../components/Div/div";
import Button from "../../../../components/Button/button";
import List from "../../../../components/List/list";
import YesDot from "../../../../assets/img/yesDot.png";
import NoDot from "../../../../assets/img/noDot.png";
import { color } from "../../../../styles/theme";

export const Name = styled.span`
  font-size: 32px;
  font-weight: 500;
  margin-top: 23px;
  display: block;
  text-align: center;
`;

export const SelectOne = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-left: 0px;
`;

export const SelectTwo = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-left: 0px;
`;

export const YesCircleImg = styled.img`
  margin-right: 0px;
`;

export const NoCircleImg = styled.img`
  margin-right: 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;
`;

export const SidelDiv = styled(Div)`
  width: 412px;
  height: 750px;
  background-color: rgba(173, 173, 173, 0.05);
  border: 1px solid rgba(173, 173, 173, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  padding-bottom: 48px; /* SchoolNumber 자리를 확보 */
  border-radius: 0px;
`;

export const ProfileDiv = styled(Div)`
  border-radius: 200px;
  width: 176px;
  height: 176px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${color.Gray[5]};
`;

export const LineDiv = styled(Div)`
  width: 87px;
  height: 0.5px;
  background-color: ${color.Black};
  margin-top: 10px;
  margin-bottom: 80px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 200px;
  margin-bottom: 10px;
  margin-left: 100px;
`;

export const LogOutButton = styled(Button)`
  width: 91px;
  height: 49px;
  border: 1px solid ${color.Blue[0]};
  margin-top: 15px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(173, 173, 173, 0.55);
  position: relative;
`;

export const Title = styled.span`
  font-size: 28px;
  font-weight: 600;
  position: absolute;
  top: 70px;
  left: 100px;
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  & > div {
    margin-bottom: 20px;
  }
`;

function OnGoodt() {
  return (
    <>
      <Header />
      <Container>
        <SidelDiv>
          <ProfileDiv></ProfileDiv>
          <Name>권세은</Name>
          <LineDiv></LineDiv>
          <Row>
            <YesCircleImg src={NoDot} />
            <SelectOne>내가 쓴 글</SelectOne>
          </Row>
          <Row>
            <NoCircleImg src={YesDot} />
            <SelectTwo>좋아요</SelectTwo>
          </Row>
          <LogOutButton>로그아웃</LogOutButton>
        </SidelDiv>
        <Main>
          <Title>좋아요</Title>
          <Edge>
            <List />
            <List />
            <List />
          </Edge>
        </Main>
      </Container>
    </>
  );
}

export default OnGoodt;
