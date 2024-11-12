import styled from "styled-components";
import Heart from "../../assets/img/listHeartImg(하트).png";
import Chat from "../../assets/img/listChatImg(댓글).png";
import Setting from "../../assets/img/listSettingImg(설정).png";
import { color } from "../../styles/theme";
import Profile from "../../assets/img/listProfileImg(프로필).png";
import { breakpoints } from "../../styles/device";

const List = () => {
  return (
    <>
      <Div>
        <Front>
          <Profiles src={Profile} alt="프로필" />
          <BigTitle>제목 들어가요</BigTitle>
          <SmallTitle>2024-08-19</SmallTitle>
        </Front>
        <Back>
          <Special>
            <Hearts src={Heart} alt="좋아요" />
            <HeartsTitle>5</HeartsTitle>
            <Chats src={Chat} alt="댓글" />
            <ChatsTitle>5</ChatsTitle>
          </Special>
          <Settings src={Setting} alt="설정" />
        </Back>
      </Div>
    </>
  );
};

export const Div = styled.div`
  width: 100%;
  height: 60px;
  border: 0.5px solid ${color.Gray[7]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 16px;
  box-sizing: border-box;
`;
export const Profiles = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 20px;
`;
export const BigTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-left: 16px;
  display: inline-block;
  @media (max-width: ${breakpoints.tabletSmall}) {
    font-size: 17px;
    font-weight: 500;
  }
  @media (max-width: ${breakpoints.mobileSmall}) {
    font-size: 14px;
    font-weight: 500;
  }
`;
export const SmallTitle = styled.span`
  margin-left: 16px;
  font-size: 12px;
  font-weight: 400;
`;
export const Front = styled.div`
  display: flex;
  align-items: center;
`;
export const Hearts = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const Chats = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
export const HeartsTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 12px;
`;
export const ChatsTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 12px;
`;
export const Back = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
`;
export const Special = styled.div`
  margin: 18px;
  display: flex;
  align-items: center;
`;
export const Settings = styled.img`
  width: 30px;
  height: 30px;
`;
export default List;
