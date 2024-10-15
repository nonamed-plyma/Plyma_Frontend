import styled from "styled-components";
import Header from "../../../components/Header/AfterHeader/afterHeader";
import { color } from "../../../styles/theme";
import LogoImg from "../../../assets/img/logo.png";
import MagnifyImg from "../../../assets/img/searchbarImg(돋보기).png";
import LeftArrowImg from "../../../assets/img/middleImg5(왼쪽 향하는 화살표).png";
import RightArrowImg from "../../../assets/img/middleImg6(오른쪽 향하는 화살표).png";
import BulbImg from "../../../assets/img/middleImg1(전구).png";
import SchoolLogoImg from "../../../assets/img/middleImg2(학교로고).png";
import StarImg from "../../../assets/img/middleImg3(별).png";
import SpeakerImg from "../../../assets/img/middleImg4(확성기).png";
import Input from "../../../components/Input/input";
import List from "../../../components/List/list";
import Button from "../../../components/Button/button";
import Plus from "../../../assets/img/buttonPlusImg(추가하기).png";

export const Body = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Middle = styled.div`
  width: 100%;
  height: 330px;
  background-color: ${color.Blue[3]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MiddleContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const MiddleBigTitle = styled.span`
  font-weight: bold;
  font-size: 35px;
`;

export const MiddleSmallTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  display: block;
`;

export const Titles = styled.div`
  color: ${color.White};
  position: absolute;
  top: 90px;
  left: 180px;
`;

export const LeftArrow = styled.img`
  margin-left: 60px;
`;

export const RightArrow = styled.img`
  margin-right: 60px;
`;

export const Feature1 = styled.div`
  background-image: url(${BulbImg});
  width: 190px;
  height: 90px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-color: ${color.White};
  position: absolute;
  top: -10px;
  right: 250px;
`;

export const Feature2 = styled.div`
  background-image: url(${SchoolLogoImg});
  width: 190px;
  height: 90px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-color: ${color.White};
  position: absolute;
  top: calc(35px + 60px);
  right: 350px;
`;

export const Feature3 = styled.div`
  background-image: url(${StarImg});
  width: 190px;
  height: 90px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-color: ${color.Blue[5]};
`;

export const Feature4 = styled.div`
  background-image: url(${SpeakerImg});
  width: 190px;
  height: 90px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-color: ${color.Blue[6]};
`;

export const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  position: absolute;
  right: 50px;
  top: 25px;
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -30px;

  & > div {
    margin-bottom: 20px;
  }
`;

export const EdgeTitle = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
  margin-right: 900px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0;
  width: 1040px;
`;

export const FloatingButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const FloatingButton = styled(Button)`
  position: absolute;
  right: 150px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${color.Blue[3]};
  background-image: url(${Plus});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BottomImg = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  left: 100px;
  top: 200px;
`;

function AfterMainPage() {
  return (
    <Body>
      <Header />
      <Middle>
        <Titles>
          <MiddleBigTitle>
            건의사항이 있다면, <br />
            플리마가 해결해드려요
          </MiddleBigTitle>
          <MiddleSmallTitle>
            익명으로 건의사항을 남기기만 하면 해결
          </MiddleSmallTitle>
        </Titles>
        <ImgGrid>
          <Feature1 />
          <Feature2 />
          <BottomImg>
            <Feature3 />
            <Feature4 />
          </BottomImg>
        </ImgGrid>
        <MiddleContent>
          <LeftArrow src={LeftArrowImg} />
          <RightArrow src={RightArrowImg} />
        </MiddleContent>
      </Middle>
      <InputContainer>
        <Input
          width="100%"
          height="40px"
          borderRadius="40px"
          placeholder="키워드를 입력해주세요"
          placeholderColor={color.Gray[1]}
          borderColor={color.Gray[1]}
          backgroundImage={`url(${LogoImg}), url(${MagnifyImg})`}
        />
      </InputContainer>
      <Edge>
        <EdgeTitle>게시글 목록</EdgeTitle>
        <List />
        <List />
        <List />
      </Edge>
      <FloatingButtonContainer>
        <FloatingButton />
      </FloatingButtonContainer>
    </Body>
  );
}
export default AfterMainPage;
