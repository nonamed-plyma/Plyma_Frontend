import React from "react";
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
  width: 100%;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  width: 90%;
  max-width: 920px;
  text-align: left;
`;

export const TitleInput = styled(Input)`
  width: calc(90% - 90px);
  max-width: 920px;
  height: 40px;
  margin-bottom: 10px;
`;

export const FileInputContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;
`;

export const FileLabel = styled.label`
  display: inline-block;
  margin-bottom: 1px;
  margin-top: 5px;
  border-radius: 10px;
  padding: 5px 10px;
  border: 1px solid ${color.Gray[3]};
  &:hover {
    background-color: ${color.Blue[1]};
    border: 1px solid ${color.Blue[1]};
    color: ${color.White};
  }
`;

export const ContentInput = styled.textarea`
  width: 90%;
  max-width: 1000px;
  height: 400px;
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 8px 20px;
  border-radius: 10px;
`;

export const UploadButton = styled(Button)`
  border: none;
  background-color: ${color.Blue[1]};
  margin-top: 20px;
  width: 97%;
  max-width: 1050px;
  font-size: 18px;
`;

function ListWrite() {
  return (
    <>
      <Header />
      <Container>
        <Title>제목</Title>
        {/* TitleInput과 ContentInput의 width가 동일하게 유지됨 */}
        <TitleInput placeholder="제목을 입력하세요" />

        <FileInputContainer>
          <FileLabel>
            <input type="file" style={{ display: "none" }} />
            사진 추가
          </FileLabel>
        </FileInputContainer>

        <ContentInput placeholder="내용을 입력하세요"></ContentInput>
        <UploadButton>올리기</UploadButton>
      </Container>
    </>
  );
}

export default ListWrite;
