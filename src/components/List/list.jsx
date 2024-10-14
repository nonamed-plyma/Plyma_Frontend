import styled from "styled-components";
<<<<<<< Updated upstream
import HeartImg from "../../assets/img/list_heart_img(하트).png";
import ChatImg from "../../assets/img/list_chat_img(댓글).png";
import SettingImg from "../../assets/img/list_setting_img(설정).png";
import { color } from "../../styles/theme";
import ProfileImg from "../../assets/img/list_profile_img(프로필).png";
=======
<<<<<<< Updated upstream
import Heart from "../../assets/img/list_heart_img(하트).png";
import Chat from "../../assets/img/list_chat_img(댓글).png";
import Setting from "../../assets/img/list_setting_img(설정).png";
import { color } from "../../styles/theme";
import Profile from "../../assets/img/list_profile_img(프로필).png";
=======
import HeartImg from "../../assets/img/listHeartImg(하트).png";
import ChatImg from "../../assets/img/listChatImg(댓글).png";
import SettingImg from "../../assets/img/listSettingImg(설정).png";
import { color } from "../../styles/theme";
import ProfileImg from "../../assets/img/listProfileImg(프로필).png";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

const List = () => {
  return (
    <>
      <Div>
        <Front>
          <Profiles src={ProfileImg} alt="프로필" />
          <ListBigTitle>제목 들어가요</ListBigTitle>
          <ListSmallTitle>2024-08-19</ListSmallTitle>
        </Front>
        <Back>
          <Special>
            <Hearts src={HeartImg} alt="좋아요" />
            <HeartsTitle>5</HeartsTitle>
            <Chats src={ChatImg} alt="댓글" />
            <ChatsTitle>5</ChatsTitle>
          </Special>
          <Settings src={SettingImg} alt="설정" />
        </Back>
      </Div>
    </>
  );
};

export const Div = styled.div`
  width: 1040px;
  height: 60px;
  border: 0.5px solid ${color.Gray[7]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;
export const Profiles = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 20px;
`;
export const ListBigTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-left: 16px;
  display: inline-block;
`;
export const ListSmallTitle = styled.span`
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
