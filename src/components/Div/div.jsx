import React from "react";
import styled from "styled-components";
import { color } from "../../styles/theme";

const StyledDiv = styled.div`
  width: ${(props) => props.width || "656px"};
  height: ${(props) => props.height || "700px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || color.White};
  border: ${(props) => props.border || "none"};
`;

const Div = (props) => {
  return <StyledDiv {...props} />;
};

export default Div;
