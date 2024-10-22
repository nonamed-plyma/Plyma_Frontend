import styled from "styled-components";
import Header from "../../../components/Header/AfterHeader/afterHeader";
import Heart from "../../../assets/img/listHeartImg(하트).png";
import Chat from "../../../assets/img/listChatImg(댓글).png";
import Setting from "../../../assets/img/listSettingImg(설정).png";
import Profile from "../../../assets/img/listProfileImg(프로필).png";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/button";
import { color } from "../../../styles/theme";

const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  margin-top: 30px;
  text-align: center;
  margin-right: 890px;
`;

export const Date = styled.span`
  font-size: 20px;
  margin-right: 20px;
  text-align: center;
`;

export const Good = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const Settings = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

export const LineDiv = styled.div`
  width: 1200px;
  height: 1px;
  background-color: ${color.Black};
  margin: 5px 0;
  text-align: center;
`;

export const ContentDiv = styled.div`
  padding: 0 20px;
  text-align: center;
  margin-bottom: 400px;
`;

export const Content = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: ${color.Black};
  text-align: center;
  margin-right: 250px;
`;

export const Profiles = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatContent = styled.p`
  font-size: 17px;
  color: ${color.Black};
  font-weight: 500;
`;

export const Chats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: -5px 10px;
  margin-right: 1025px;
`;

export const ChatInput = styled(Input)`
  width: 1000px;
  height: 35px;
  border-color: ${color.Gray[2]};
  margin-right: 10px;
`;

export const ChatButton = styled(Button)`
  width: 70px;
  height: 54px;
  background-color: ${color.White};
  color: ${color.Black};
  border: 1px solid ${color.Gray[2]};
  &:hover {
    border: 1px solid ${color.Blue[2]};
    color: ${color.Blue[2]};
  }
`;

export const GoodNumber = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;

export const Chatss = styled.img`
  margin-right: 4px;
`;

export const Bars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const ChatNumber = styled.span`
  font-size: 20px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(173, 173, 173, 0.55);
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;
export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  margin-right: 950px;
`;
export const ChatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

function ListWatch() {
  return (
    <>
      <Header />
      <Container>
        <Title>제목 들어가요</Title>
        <ActionRow>
          <Date>2024-10-19</Date>
          <FirstRow>
            <Good src={Heart} alt="좋아요" />
            <GoodNumber>5</GoodNumber>
          </FirstRow>
          <SecondRow>
            <Chatss src={Chat} alt="댓글" />
            <ChatNumber>2</ChatNumber>
          </SecondRow>
          <Settings src={Setting} alt="설정" />
        </ActionRow>
        <LineDiv />
        <ContentDiv>
          <Content>
            뭐 학교 에어컨 고장이 맘에 안들어요. 도대체 언제 고쳐지는거에요?
            빨리 고쳐주세요. 더워 죽겠어요.ㅠ 등등
          </Content>
        </ContentDiv>
        <LineDiv />
        <Chats>
          <Profiles src={Profile} alt="프로필 이미지" />
          <ChatContent>어쩌구 인정인정</ChatContent>
        </Chats>
        <Chats>
          <Profiles src={Profile} alt="프로필 이미지" />
          <ChatContent>어쩌구 인정인정</ChatContent>
        </Chats>
        <ChatRow>
          <ChatInput placeholder="댓글 작성" />
          <ChatButton>등록</ChatButton>
        </ChatRow>
      </Container>
    </>
  );
}

export default ListWatch;
