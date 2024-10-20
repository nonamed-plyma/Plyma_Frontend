<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React from "react";
import styled from "styled-components";
import { color } from "../../../styles/theme";
=======
=======
>>>>>>> Stashed changes
<<<<<<< HEAD
=======
import React from "react";
import styled from "styled-components";
import { color } from "../../styles/theme";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const StyledButton = styled.button`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "60px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || "#008DEC"};
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  opacity: ${(props) => props.opacity || "1"};
  color: white;
  border: ${(props) => props.border || "none"};
=======
  color: white;
>>>>>>> Stashed changes
=======
  color: white;
>>>>>>> Stashed changes
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Input컴포넌트생성
>>>>>>> Stashed changes
=======
>>>>>>> Input컴포넌트생성
>>>>>>> Stashed changes
