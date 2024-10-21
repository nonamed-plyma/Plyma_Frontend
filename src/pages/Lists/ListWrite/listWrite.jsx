import styled from "styled-components";
import Header from "../../../components/Header/MyPageHeader/myPageHeader";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/button";
import { color } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  border-top: 1px solid rgba(173, 173, 173, 0.55);
  padding-top: 25px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-right: 1000px;
`;

export const TitleInput = styled(Input)`
  width: 1000px;
  height: 40px;
  margin-bottom: 10px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  display: inline-block;
  margin: 10px 0;
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 5px 10px;
  border: 1px solid ${color.Gray[3]};
  margin-left: 995px;
  margin-top: -1px;
`;

export const UploadButton = styled(Button)`
  border: none;
  background-color: ${color.Blue[1]};
  margin-top: 20px;
  width: 1125px;
  font-size: 18px;
`;

export const ContentInput = styled(Input)`
  width: 1000px;
  height: 400px;
  margin-bottom: 10px;
  margin-top: 5px;
`;

function ListWrite() {
  return (
    <>
      <Header />
      <Container>
        <Title>제목</Title>
        <TitleInput placeholder="제목을 입력하세요" />

        <FileLabel>
          <HiddenFileInput type="file" />
          파일 추가
        </FileLabel>

        <ContentInput placeholder="내용을 입력하세요"></ContentInput>
        <UploadButton>올리기</UploadButton>
      </Container>
    </>
  );
}

export default ListWrite;
