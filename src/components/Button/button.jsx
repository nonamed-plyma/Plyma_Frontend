<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> Input컴포넌트생성
import React from "react";
=======
>>>>>>> 버튼컴포넌트생성
=======
=======
import React from "react";
>>>>>>> Stashed changes
=======
=======
import React from "react";
>>>>>>> Stashed changes
=======
>>>>>>> 헤더컴포넌트-생성
=======
=======
import React from "react";
>>>>>>> Stashed changes
=======
=======
import React from "react";
>>>>>>> Stashed changes
import styled from "styled-components";
import { color } from "../../styles/theme";

const StyledButton = styled.button`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "60px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  margin: ${(props) => props.margin || "0"};
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< HEAD
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
<<<<<<< HEAD
  background-image: ${(props) => props.backgroundImage || "none"};
  padding: 8px;
  border: none;
=======
  background-color: ${(props) => props.backgroundColor || `${color.Blue[2]}`};
>>>>>>> 버튼컴포넌트생성
  color: white;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

<<<<<<< HEAD
export default Button;
>>>>>>> 게시글목록(List)컴포넌트생성
=======
=======
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
>>>>>>> Stashed changes
=======
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
>>>>>>> Stashed changes
=======
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
>>>>>>> Stashed changes
=======
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
>>>>>>> Stashed changes
  color: white;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
>>>>>>> Input컴포넌트생성
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
export default Button;
>>>>>>> 헤더컴포넌트-생성
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
