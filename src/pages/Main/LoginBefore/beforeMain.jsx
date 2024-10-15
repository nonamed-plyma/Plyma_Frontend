import styled from "styled-components";
import Header from "../../../components/Header/BeforeHeader/beforeHeader";
import { SmallTitle } from "../../../components/List/list";
function BeforeMainPage() {
  return (
    <>
      <Header />
      <Middle>
        <Titles>
          <BigTitle>
            건의사항이 있다면 <br />
            플리마가 해결해드려요
          </BigTitle>
          <SmallTitle>익명으로 건의사항을 남기기만 하면 해결</SmallTitle>
        </Titles>
        <MiddleContent>
          <LeftArrow></LeftArrow>
          <RightArrow></RightArrow>
        </MiddleContent>
      </Middle>
    </>
  );
}
export default BeforeMainPage;
