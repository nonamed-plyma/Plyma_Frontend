<<<<<<< HEAD
=======
import React from "react";
import styled from "styled-components";
import { color } from "../../styles/theme";

const StyledButton = styled.button`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "60px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
  background-image: ${(props) => props.backgroundImage || "none"};
  padding: 8px;
  border: none;
  color: white;
`;

const Button = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
>>>>>>> 게시글목록(List)컴포넌트생성
