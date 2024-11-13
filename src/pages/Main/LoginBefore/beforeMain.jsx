import styled from "styled-components";
import Header from "../../../components/Header/BeforeHeader/beforeHeader";
import { color } from "../../../styles/theme";
import LogoImg from "../../../assets/img/logo.png";
import MagnifyImg from "../../../assets/img/searchbarImg(돋보기).png";
import LeftArrowImg from "../../../assets/img/middleImg5(왼쪽 향하는 화살표).png";
import RightArrowImg from "../../../assets/img/middleImg6(오른쪽 향하는 화살표).png";
import BulbImg from "../../../assets/img/middleImg1(전구).png";
import SchoolLogoImg from "../../../assets/img/middleImg2(로고).png";
import StarImg from "../../../assets/img/middleImg3(별).png";
import SpeakerImg from "../../../assets/img/middleImg4(확성기).png";
import Input from "../../../components/Input/input";
import List from "../../../components/List/list";
import Button from "../../../components/Button/button";
import Plus from "../../../assets/img/buttonPlusImg.png";
import { breakpoints } from "../../../styles/device";

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
  font-size: 33px;
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 27px;
  }
`;

export const MiddleSmallTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  display: block;
  line-height: 34px;
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 18px;
  }
`;

export const Titles = styled.div`
  color: ${color.White};
  position: absolute;
  top: 90px;
  left: 180px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    top: 80px;
    left: 90px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    top: 100px;
  }
`;

export const LeftArrow = styled.img`
  position: absolute;
  left: 30px;
`;

export const RightArrow = styled.img`
  position: absolute;
  right: 30px;
`;

export const Feature1 = styled.img`
  width: 190px;
  height: 90px;
  position: absolute;
  top: -10px;
  right: 250px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 170px;
    height: 90px;
    right: 100px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    display: none;
  }
`;

export const Feature2 = styled.img`
  width: 190px;
  height: 90px;
  position: absolute;
  top: calc(35px + 60px);
  right: 350px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 170px;
    height: 90px;
    right: 200px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    display: none;
  }
`;

export const Feature3 = styled.img`
  width: 190px;
  height: 90px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 170px;
    height: 90px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    display: none;
  }
`;

export const Feature4 = styled.img`
  width: 190px;
  height: 90px;
  @media (max-width: ${breakpoints.tabletSmall}) {
    width: 170px;
    height: 90px;
    right: 800px;
  }
  @media (max-width: ${breakpoints.mobileLarge}) {
    display: none;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  position: relative;
`;

export const EdgeTitle = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
  width: 150px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 64px 0;
`;

export const FloatingButtonContainer = styled.div`
  position: absolute;
  right: -70px;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const FloatingButton = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
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
  @media (max-width: ${breakpoints.tabletSmall}) {
    left: 200px;
  }
`;

export const Inputs = styled(Input)`
  width: 100%;
  height: 60px;
  border-radius: 40px;
  box-sizing: border-box;
`;

export const WrapperContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpoints.tabletSmall}) {
    max-width: 90%;
  }
`;

export const EdgeTitleContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 90px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;
  top: 40px;
`;

function BeforeMainPage() {
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
          <Feature1 src={BulbImg} />
          <Feature2 src={SchoolLogoImg} />
          <BottomImg>
            <Feature3 src={StarImg} />
            <Feature4 src={SpeakerImg} />
          </BottomImg>
        </ImgGrid>
        <MiddleContent>
          <LeftArrow src={LeftArrowImg} />
          <RightArrow src={RightArrowImg} />
        </MiddleContent>
      </Middle>
      <WrapperContainer>
        <InputContainer>
          <Inputs
            placeholder="키워드를 입력해주세요"
            placeholderColor={color.Gray[1]}
            borderColor={color.Gray[1]}
            backgroundImage={`url(${LogoImg}), url(${MagnifyImg})`}
          />
        </InputContainer>
        <Edge>
          <EdgeTitleContainer>
            <EdgeTitle>게시글 목록</EdgeTitle>
          </EdgeTitleContainer>
          <ListContainer>
            <List />
            <List />
            <List />
            <FloatingButtonContainer>
              <FloatingButton />
            </FloatingButtonContainer>
          </ListContainer>
        </Edge>
      </WrapperContainer>
    </Body>
  );
}
export default BeforeMainPage;
